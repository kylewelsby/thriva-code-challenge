<script>
  import ThvButton from '@/components/Shared/Button'
  import DobInput from '@/components/Shared/DobInput'

  export default {
    name: 'Dob',
    components: {
      DobInput,
      ThvButton
    },
    computed: {
      disableNext () {
        let under18 = this.$refs.DobInput && this.$refs.DobInput.ageError
        return this.dob === '' || this.errors.items.length > 0 || under18 === true
      },
      feedback () {
        if (this.$refs.DobInput && this.$refs.DobInput.ageError) {
          return 'You must be over 18'
        }
        return this.errors.items.length > 0 ? this.errors.items[0].msg : ''
      }
    },
    methods: {
      submit () {
        this.$refs.DobInput.handleSubmit()
        this.$validator.reset()
        this.$validator.validate().then(result => {
          if (result && !this.feedback) {
            // SUGGESTION: could save DOB here is it is now assumed valid
            this.$router.push('/gender')
          }
        })
      },
      back () {
        this.$router.push('/diet')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__dob.align-center
        h1 How old are you?
        .spacer.sp__top--sm
        p.body--large.question-description This helps us recommend the best test for you. We know it's a bit forward but our lips are sealed!
        .spacer.sp__top--sm

        dob-input.align-center.survey-input(
          ref='DobInput'
          v-validate="'required'",
          data-vv-value-path="dob",
          :value='dob',
          name='dob',
          :error='errors.has("dob")',
          minAge='18',
          :feedback='feedback'
          @keyup.enter='submit',
          label=''
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              @click='submit'
            ) Next
</template>

<style lang='stylus'>
  .survey-questions__dob
    .input__dob
      .input__group
        .input__dob__day, .input__dob__month, .input__dob__year
          max-width: 300px

    .input__feedback
      text-align: left
</style>
