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
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template lang='pug'>
  .check-button(
    :class="{ 'check-button--selected': selected, 'check-button--disabled': disabled }",
    tabindex='0'
  ) {{ text }}

</template>

<style lang='stylus'>
  .check-button
    display: flex;
    align-items: center;
    justify-content center;
    max-width: 478px;
    min-height: 100px;
    border-radus: 4px;
    border: solid 1px #ced0d9;
    background-color: #fff;
    margin: 20px auto;
    padding: 15px 20px;
    color: #3d4250;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: normal;
    transition-property: border, background-color;
    transition-duration 150ms;
    transition-timing-function: ease-out;
    cursor: pointer;

  .check-button.check-button--selected
    background-color: #f4fcfd;
    border: solid 2px #3ecadd;

  .check-button.check-button--disabled
    background-color: #fff;
    border: solid 1px #e5e4f1;
    color: #ced0d9;
    cursor: default;

  @media (min-width: 768px)
    .check-button
      min-height: 120px;
      padding: 20px 30px;
      font-weight: 20px;


</style>
