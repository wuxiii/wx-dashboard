import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

Vue.use(VueRouter)

// 路由配置规则
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    name: 'Home',
    meta: { authorization: true, title: '首页' },
    children: [
      {
        path: '', // 默认子路由
        name: 'Home',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue'),
        meta: { title: '菜单管理' }
      },
      {
        path: '/resource',
        name: 'Resource',
        component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue'),
        meta: { title: '资源管理' }
      },
      {
        path: '/course',
        name: 'Course',
        component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue'),
        meta: { title: '课程管理' }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/user/index.vue'),
        meta: { title: '用户管理' }

      },
      {
        path: '/advert',
        name: 'Advert',
        component: () => import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue'),
        meta: { title: '广告管理' }

      },
      {
        path: '/advert-space',
        name: 'Advert-space',
        component: () => import(/* webpackChunkName: 'aadvert-space' */ '@/views/advert-space/index.vue'),
        meta: { title: '广告位管理' }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: '404' */ '@/views/error-page/404.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const authorization = to.matched.some(record => record.meta.authorization)
  if (authorization) {
    if (to.name !== 'Login' && !store.state.user) {
      next({ name: 'Login', query: { redirect: from.name } })
    } else next()
  } else next()
})

export default router
