import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/regist',
      name: 'Regist',
      component: () => import('../components/Regist.vue')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../components/Main.vue'),
      children: [
        {
          path: '/showZDXJ',
          name: 'ShowZDXJ',
          component: () => import('../components/ShowZDXJ.vue')
        },
        {
          path: '/showZTJK',
          name: 'ShowZTJK',
          component: () => import('../components/ShowZTJK.vue')
        },
        {
          path: '/showGJLB',
          name: 'ShowGJLB',
          component: () => import('../components/ShowGJLB.vue')
        },
        {
          path: '/showRZJK',
          name: 'ShowRZJK',
          component: () => import('../components/ShowRZJK.vue')
        }
      ]
    }
  ]
})
