<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__goals.align-center
        h1 Nice to meet you {{ name }}. What would you like to focus on?
        p.body--large.question-description Choose up to four
        .spacer.sp__top--sm

        check-button(
          v-for='(goal, key) in goals',
          :key='key',
          :text='goal.name'
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
