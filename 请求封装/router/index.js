import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import next from '@/pages/next.vue'
// import login from '@/pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      // 1.表格
      path: '/next',
      name: 'next',
      component: next
    }
  ]
})
