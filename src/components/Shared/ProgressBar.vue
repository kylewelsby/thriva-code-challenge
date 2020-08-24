<script>
  export default {
    name: 'ProgressBar',
    props: {
      segmented: {
        type: Boolean,
        required: false
      },
      currentStep: {
        type: Number,
        required: true
      },
      totalSteps: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        default: '#FA476F'
      }
    },
    computed: {
      segmentStyle () { return { 'background-color': this.color } },
      mercuryStyle () { return { 'width': this.percentage + '%', 'background-color': this.color } },
      percentage () {
        const percent = (this.currentStep / this.totalSteps) * 100
        return Math.min(100, percent)
      }
    }
  }
</script>

<template lang='pug'>
  .progress-bar.progress-bar--segmented.grid-x(v-if='segmented')
    .cell.auto.segment(v-for="n in currentStep", :style='segmentStyle')
    .cell.auto.segment(v-for="n in (totalSteps - currentStep)")
  .progress-bar.progress-bar--percentage(v-else)
    .mercury(:style='mercuryStyle')

</template>

<style lang='stylus'>
  .progress-bar
    width: 100%
    height: 6px
    border-radius: 7px

    &.progress-bar--percentage
      background-color: #EFF4F7
      width: 100%
      height: 6px
      border-radius: 7px

      .mercury
        height: 100%
        border-radius: 7px

    &.progress-bar--segmented
      .segment
        background-color: #E5E7F1
        height: 100%
        display: flex
        margin-right: 2px

      .segment:first-child
        border-top-left-radius: 7px
        border-bottom-left-radius: 7px

      .segment:last-child
        border-top-right-radius: 7px
        border-bottom-right-radius: 7px
        margin-right: 0px

</style>
