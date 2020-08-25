<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    data () {
      console.log(this.$route.name)
      return {
        stages: ['name', 'goals', 'diet', 'dob', 'gender']
      }
    },
    computed: {
      currentStep () {
        return this.stages.indexOf(this.$route.name) + 1
      }
    }
  }
</script>

<template lang='pug'>
  .progress-bar-container
    progress-bar(:currentStep='currentStep', :totalSteps='stages.length')
</template>

<style lang='stylus'>
  .progress-bar-container
    display: flex
    flex-wrap: nowrap
    width: 80px
    align-items: center
</style>
