
<script>
  import Header from '@/components/Shared/Header'

  export default {
    name: 'MinimalLayout',
    components: {
      Header
    }
  }
</script>

<template lang='pug'>
  .wrapper.wrapper--minimal
    Header(:funnelName='$route.meta.funnelName')
    .content
      transition(name='fade' mode="out-in")
        router-view
</template>

<style lang='stylus'>
  body
    background-color: #EFF4F7

  .wrapper.wrapper--minimal
    position: relative
    margin: auto
    max-width: 1680px
    min-height: 100vh
    height: 100%
    overflow: hidden
    background-color: #F7F9FB
    z-index: 0
    box-shadow: 0 1px 4px 0 rgba(#3D4250, 0.18)

    .content
      padding-top: 20px
      height: 100%
      
      @media (min-width: 768px)
        padding-top: 82px

  .fade-enter-active,
  .fade-leave-active
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;


  .fade-enter,
  .fade-leave-active
    opacity: 0
</style>
