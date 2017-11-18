import Vue from 'vue'
import { createLocalVue } from 'vue-test-utils'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const localVue = createLocalVue()

localVue.use(VueRouter)

// shallow(Component, {
//   localVue
// })

