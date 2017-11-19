import { mount } from 'vue-test-utils'
import DashboardLayout from './DashboardLayout.vue'
import { Helpers } from 'test-helpers'

describe('DashboardLayout', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(DashboardLayout)
    h       = new Helpers(wrapper, expect)
  })

  it('should render <the-hero/>', () => {
    h.domHas('.hero')
  })

  it('should render <the-navbar/>', () => {
    h.domHas('.navbar')
  })

  it('should render <dashbaord-layout-content/>', () => {
    h.domHas('#dashbaord-layout-content')
  })

  it('should render a .container within a .section', () => {
    h.domHas('.section > .container')
  })

})
