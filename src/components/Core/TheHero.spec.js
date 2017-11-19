import { mount } from 'vue-test-utils'
import TheHero from './TheHero.vue'
import { Helpers } from 'test-helpers'

describe('TheHero', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = mount(TheHero)
    h       = new Helpers(wrapper, expect)
  })

  it('should render a .hero with a .container inside ', () => {
    h.domHas('.hero .container')
  })

})
