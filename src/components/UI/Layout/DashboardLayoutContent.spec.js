import { mount } from 'vue-test-utils'
import DashboardLayoutContent from './DashboardLayoutContent.vue'
import { Helpers } from 'test-helpers'

describe('DashboardLayoutContent', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(DashboardLayoutContent)
    h       = new Helpers(wrapper, expect)
  })

  it('should render correct', () => {
    h.wrapperHasClass('container')
    h.wrapperHasId('dashbaord-layout-content')
  })

})
