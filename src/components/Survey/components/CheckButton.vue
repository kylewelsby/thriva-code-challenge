<script>
  export default {
    name: 'CheckButton',
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template lang='pug'>
  .check-button(
    :class="{ 'check-button--selected': selected }",
    tabindex='0'
  ) {{ text }}

</template>

<style lang='stylus'>
  // SUGGESTION: style the check-button here

</style>
