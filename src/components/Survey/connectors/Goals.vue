<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
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
        },
        selected: []
      }
    },
    beforeMount () {
      this.selected = this.$store.state.survey.goals || []
    },
    computed: {
      name () {
        return this.$store.state.survey.name
      }
    },
    methods: {
      toggleItem (key) {
        if (this.selected.includes(key)) {
          this.selected.splice(this.selected.indexOf(key), 1)
        } else if (this.selected.length < 4) {
          this.selected.push(key)
        }
      },
      submit () {
        this.$store.commit('survey/setGoals', this.selected)
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
          :value='key'
          :selected='selected.includes(key)'
          :disabled='!selected.includes(key) && selected.length >= 4'
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
              :disabled="selected.length === 0 || selected.length > 4"
              @click='submit'
            ) Next
</template>
