import Survey from './views/Survey.vue'
import Name from './connectors/Name'
import Goals from './connectors/Goals'
import Diet from './connectors/Diet'
import Dob from './connectors/Dob'
import Gender from './connectors/Gender'

export default {
  domain: 'Survey',
  views: {
    Survey
  },
  connectors: {
    Name,
    Goals,
    Diet,
    Dob,
    Gender
  },
  components: {
  }
}
