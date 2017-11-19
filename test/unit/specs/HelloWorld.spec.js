import { mount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { Helpers } from 'test-helpers'

describe('HelloWorld', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(HelloWorld)
    h       = new Helpers(wrapper, expect)
  })

  it('should render correct contents', () => {
    h.see('Welcome to Your Vue.js App', '.hello h1')
  })
})
