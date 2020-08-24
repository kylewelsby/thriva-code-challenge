import { mount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CheckButton, {
      propsData: {
        text: 'Energy',
        value: 'energy'
      }
    })
  })

  it('renders with expected class', () => {
    expect(wrapper.classes()).toContain('check-button')
  })

  it('add selected class to component when clicked', () => {
    wrapper.setProps({ selected: true })
    expect(wrapper.classes()).toContain('check-button--selected')
  })
})
