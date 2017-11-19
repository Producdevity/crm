import { mount } from 'vue-test-utils'
import App from './App.vue'
import { Helpers } from 'test-helpers'


describe('App', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(App)
    h       = new Helpers(wrapper, expect)
  })

  it('should render <the-hero/>', () => {
    h.domHas('.hero')
  })

  it('should render <the-navbar/>', () => {
    h.domHas('.navbar')
  })

  it('should render a .container within a .section', () => {
    h.domHas('.section > .container')
  })

  it('should render correct contents', () => {
    h.see('Welcome to Your Vue.js App')
  })

})
