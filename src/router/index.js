import Vue from 'vue'
import Router from 'vue-router'

/**
 * Route Pages
 */
import ClientsPage from '@pages/Clients/ClientsPage.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import DashboardLayout from '@ui/Layout/DashboardLayout.vue'

/**
 * Route Modules
 */
import clientRoutes from './modules/clientRoutes'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path:      '/',
      redirect:  {name: 'dashboard.index'},
      component: DashboardLayout,
      children:  [
        {
          path:      'dashboard',
          name:      'dashboard.index',
          component: HelloWorld
        },
        {
          path:      'clients',
          redirect:  {name: 'clients.index'},
          component: ClientsPage,
          children:  clientRoutes
        }
      ]
    },
    {
      path:      '/',
      name:      'HelloWorld',
      component: HelloWorld
    }
  ]
})

