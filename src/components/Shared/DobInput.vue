<script>
  import TextInput from '@/components/Shared/TextInput.vue'
  import moment from 'moment'

  export default {
    name: 'DobInput',
    components: {
      TextInput
    },
    props: {
      minAge: {
        type: String,
        default: 18
      },
      description: {
        type: String,
        default: null
      },
      error: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        required: false
      },
      feedback: {
        type: String,
        default: null
      }
    },
    data () {
      let values = { day: null, month: null, year: null }
      if (this.value) {
        const parsedValue = moment(this.value)
        values = Object.assign(values, {
          day: parsedValue.format('DD'),
          month: parsedValue.format('MM'),
          year: parsedValue.year().toString()
        })
      }

      return {
        day: values.day,
        month: values.month,
        year: values.year
      }
    },
    methods: {
      handleSubmit () {
        this.$validator.validateAll()
      }
    },
    computed: {
      dob () {
        if (this.errors.items.length === 0 && this.day && this.month && this.year) {
          let dob = moment.utc({ year: this.year, month: parseInt(this.month) - 1, day: this.day }).toISOString()
          return dob ? dob.substring(0, 10) : undefined
        }
      },
      ageError () {
        return this.dob ? moment().diff(moment(this.dob), 'years') < this.minAge : null
      }
    },
    watch: {
      dob (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<template lang='pug'>
  .input.input__dob(:class='{ "error": ageError }')
    p.body--small.input__description(v-if='description', :class='{ "error": ageError }') {{ description }}
    .input__group
      text-input.input__dob__day(
        name='day'
        type='number',
        v-model='day',
        placeholder='DD',
        :error='errors.has("day")',
        v-validate='"required|min_value:1|max_value:31"',
        maxlength="2"
      )
      text-input.input__dob__month(
        name='month'
        type='number',
        v-model='month',
        placeholder='MM',
        :error='errors.has("month")',
        v-validate='"required|min_value:1|max_value:12"',
        maxlength="2"
      )
      text-input.input__dob__year(
        name='year'
        type='number',
        v-model='year',
        placeholder='YYYY',
        v-validate='"required|min_value:1900|max_value:2018"',
        :error='errors.has("year")',
        maxlength="4"
      )
    p.body--small.input__feedback(v-if='feedback')
      span {{ feedback }}
</template>

<style lang='stylus'>
  .input__dob
    .input__dob__day
    .input__dob__month
      max-width: 65px
      margin-right: 15px
      margin-bottom: 0
      padding: 0

    .input__dob__year
      max-width: 85px
      margin-bottom: 0

    .input__feedback
      color: #FA476F

    input[type=number]
      &::-webkit-inner-spin-button
      &::-webkit-outer-spin-button
        -webkit-appearance: none
        appearance: none
        margin: 0
</style>
