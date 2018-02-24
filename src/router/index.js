import Vue from 'vue'
import Router from 'vue-router'

import Coins from '@/components/coins/Coins.vue'
import Add from '@/components/add/add.vue'


import Create from '@/pages/create/Create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/create/add',
      name: 'add',
      component: Add
    }
  ]
})
