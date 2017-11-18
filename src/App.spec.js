import { mount } from 'vue-test-utils'
import Vue from 'vue'
import App from './App.vue'

describe('App.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(App)
  })

  it('should render a .container within a .section', () => {
    expect(wrapper.find('.section > .container')).toBeDefined()
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm          = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Welcome to Your Vue.js App')
  })

})
