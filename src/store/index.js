import Vue from 'vue'
import Vuex from 'vuex'
import { inProd } from '@helpers/env'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: !inProd()
})