import { mount } from 'vue-test-utils'
import TheNavbar from './TheNavbar.vue'
import { Helpers } from 'test-helpers'

describe('TheNavbar', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(TheNavbar)
    h       = new Helpers(wrapper, expect)
  })

  it('should render a .navbar', () => {
    h.domHas('.navbar > .navbar-brand')
  })

  it('should render a hamburger nav', () => {
    h.domHas('.navbar-burger')
  })

  it('mobile nav should be closed by default', () => {
    h.domHas('.navbar-menu')
    h.domHasNot('.burger.is-active')
    h.domHasNot('.navbar-menu.is-active')
  })

  it('should open mobile-nav when the burger button is clicked', () => {
    h.domHasNot('.navbar-menu.is-active')
    h.domHasNot('.burger.is-active')
    h.click('.burger')
    h.domHas('.navbar-menu.is-active')
    h.domHas('.burger.is-active')
  })

})
