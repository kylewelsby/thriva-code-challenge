<script>
export default {
  name: 'ThvButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    element: {
      type: String,
      default: 'a',
      validator: value => {
        return ['a', 'button', 'nuxtLink', 'routerLink'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator: value => {
        return ['primary', 'transparent'].includes(value)
      }
    },
    link: {
      type: String,
      default: '#'
    },
    colour: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colourModifierClass () {
      if (this.colour) {
        return `button--${this.colour}`
      } else {
        return null
      }
    }
  }
}
</script>

<template lang='pug'>
  span
    a.button(
      v-if='element==="a"', 
      :class="['button--' + size, colourModifierClass, type]", 
      :href='link'
    )
      slot(name='icon')
      slot

    button.button(
      :disabled='disabled',
      v-else-if='element==="button"', 
      :class="['button--' + size, colourModifierClass, type]", 
      @click='$emit("click")'
    )
      slot(name='icon')
      slot

    nuxt-link.button(
      v-else-if='element==="nuxtLink"', 
      :class="['button--' + size, colourModifierClass, type]", 
      :to='link'
    )
      slot(name='icon')
      slot

    router-link.button(
      v-else-if='element==="routerLink"', 
      :class="['button--' + size, colourModifierClass, type]", 
      :to='link'
    )
      slot(name='icon')
      slot
    

    
</template>

<style lang='stylus'>

  a.button,
  button.button
    position: relative;
    background-color: #3ECADD
    border: 2px solid #3ECADD
    border-radius: 100px
    height: h = 40px
    line-height: (h/1.09)
    font: 16px/h 'sofia-pro', 'sofia pro', 'Helvetica', 'Arial', sans-serif,
    font-weight: 400
    padding: 0 (h/1.5)
    min-width: 105px
    color: #FFFFFF
    margin: 0
    display: inline-block
    transition: 0.2s
    text-align: center
    outline: none
    cursor pointer
    text-decoration none

    &--large
      height: h = 46px
      line-height: (h/1.09)
      padding: 0 (h/1.5)

    &--small
      font-size: 14px
      height: h = 32px
      line-height: (h/1.09)
      padding: 0 (h/2)

    &:hover
      @media (min-width: 768px)
        transform: translateY(-3px)
        background-color: lighten(#3ECADD, 10%)
        border: 2px solid lighten(#3ECADD, 10%)
        box-shadow: 0 1px 4px 0 rgba(#565B75,0.18)
        color: #FFFFFF
        position: relative

        &:before
          content: ''
          height: 10px
          width: 100%
          background: transparent
          position: absolute
          bottom: -3px
          left: 0

    &:active
      transform: translateY(0)
      background-color: darken(#3ECADD, 15%)
      border: 2px solid darken(#3ECADD, 15%)

    &:focus
      &:active
        &:before
          display: none

    &:focus
      &:after
        content: ''
        position: absolute
        border-radius: 100px
        top: n = -3px
        right: n
        bottom: n
        left: n
        border: 2px solid #FFFFFF
        box-shadow: 0 0 6px 0 #3ECADD
      
    &.disabled, &:disabled
      cursor: default
      opacity: 0.4
      &:hover, &:active, &:focus
        transform: translateY(0)
        box-shadow: none
        background-color: #3ECADD

    &--secondary
      background-color: #99A2BF
      border: 2px solid #99A2BF
      &:hover
        background-color: lighten(#99A2BF, 10%)
        border: 2px solid lighten(#99A2BF, 10%)
      &:active
        background-color: darken(#99A2BF, 15%)
        border: 2px solid darken(#99A2BF, 15%)
      &:focus
        &:after
          box-shadow: 0 0 6px 0 #99A2BF

    colours = {
      // PRIMARY
      pink: #FA476F
      purple: #664277
      blue: #3ECADD
      light-purple: #99A2BF
      green: #AEEC73
      sand: #F0DBCC
      // SECONDARY
      orange: #FFC662
      red: #FF7987
      // GREYSCALE
      xx-light-grey: #F7F9FB
      x-light-grey: #EFF4F7
      light-grey: #E5E7F1
      input-border-grey: #CED0D9
      grey: #99A2BF
      dark-grey: #6F749A
      x-dark-grey: #565B75
      xx-dark-grey: #3D4250
      // GENERIC
      white: #FFFFFF
      // TYPOGRAPHY
      headings: #565B75
      body:  #6F749A
    }
    
    for colour in colours
      &--{colour}
        background-color: colours[colour]
        border: 2px solid @background-color
        &:hover
          background-color: lighten(@background-color, 10%)
          border: 2px solid lighten(@background-color, 10%)
        &:active
          background-color: lighten(@background-color, 15%)
          border: 2px solid lighten(@background-color, 15%)
        &:focus
          &:after
            box-shadow: 0 0 6px 0 @background-color

    &--static:hover
      transform: none
      box-shadow: none

    &.transparent
      background-color: #FFFFFF
      border: 2px solid #E5E7F1
      color: #565B75

      &:hover
        background-color: #FFFFFF
        border: 2px solid lighten(#E5E7F1, 40%)
        color: #565B75

</style>
