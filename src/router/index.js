import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginComponent.vue')
    },
    {
      path: '/dashboarmain',
      name: 'DashboarMain',
      component: () => import(/* webpackChunkName: "DashboarMain" */ '../components/dashboarHome/DashboarComponent.vue'),
      children: [
        {
          path: '/producto/:id',
          name: 'product',
          component: () => import('../components/common/product/AllProduct.vue')
        },
        {
          path: '/',
          name: 'productos',
          component: () => import(/* webpackChunkName: "CatComponent" */ '../components/common/product/AllProduct.vue')
        },
        {
          path: '/search/:name',
          name: 'search',
          component: () => import('../components/common/product/AllProduct.vue')
        },
      ]

    },
  ]
})

export default router
