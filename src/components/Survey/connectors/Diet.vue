<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No'
          },
          coeliac: {
            name: 'Coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo'
          },
          pescatarian: {
            name: 'Pescatarian'
          },
          plantBased: {
            name: 'Plant-based'
          },
          other: {
            name: 'Other'
          }
        },
        selected: null
      }
    },
    beforeMount () {
      this.selected = this.$store.state.survey.diet
    },
    methods: {
      toggleItem (key) {
        this.selected = key
      },
      submit () {
        this.$store.commit('survey/setDiet', this.selected)
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__diet.align-center
        h1 Do you follow a particular diet?
        .spacer.sp__top--sm

        check-button(
          v-for='(diet, key) in diets',
          :key='key',
          :text='diet.name'
          :value='key'
          :selected='selected === key'
          @click.native="toggleItem(key)"
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled="!selected"
              @click='submit'
            ) Next

</template>
