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

  it('should render correct contents', () => {
    h.wrapperHasId('app')
    h.domHasNot('.container')
  })

})
