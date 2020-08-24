<script>
  import Logomark from '@/assets/images/logos/logomark.svg'
  import SurveyProgress from '@/components/Survey/connectors/SurveyProgress'

  export default {
    name: 'Header',
    components: {
      SurveyProgress
    },
    computed: {
      logoSrc () {
        return Logomark
      }
    }
  }
</script>

<template lang='pug'>
  header.header
    .header__container
      a.header__logo.header__logo--logomark(href='/')
        img(:src='logoSrc')
      survey-progress

</template>

<style lang='stylus'>
  height=62px

  .header
    width: 100%
    background: #FFFFFF
    z-index: 100
    max-width: 1680px

    .header__container
      max-width: 1680px
      background-color: #FFFFFF
      margin: auto
      padding: 0 20px
      position: relative
      height: height
      display: flex
      flex-wrap: nowrap
      align-items: center
      justify-content: space-between
      border-bottom: 1px solid #E5E7F1
      z-index: 100

      @media (min-width: 768px)
        padding: 0 30px
        border-bottom: none

      .header__logo
        height: 30px
        img
          height: 100%

        &--full
          display: none

  @media (min-width: 768px)
    .header
      position: fixed
      top: 0
      border-bottom: 1px solid #E5E7F1

</style>
