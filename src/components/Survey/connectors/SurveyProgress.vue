<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    }
  }
</script>

<template lang='pug'>
  .progress-bar-container
  //- SUGGESTION: progress-bar needs a currentStep and a stages array. These need to be passed in here
  //- SUGGESTION: un-comment the below when your ready to pass these in

    //- progress-bar(:currentStep='currentStep', :totalSteps='stages.length')

</template>

<style lang='stylus'>
  .progress-bar-container
    display: flex
    flex-wrap: nowrap
    width: 80px
    align-items: center
</style>
