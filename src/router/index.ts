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
        path: 'role',
        name: 'Role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue'),
        meta: { title: '角色管理' },
        children: [
          {
            path: '',
            name: 'role',
            component: () => import(/* webpackChunkName: 'alloc-menu' */ '@/views/role/RoleList.vue'),
            props: true, // 将路由路径参数映射到组件的 props 数据中
            meta: { title: '角色列表' }
          },
          {
            path: ':roleId/alloc-menu',
            name: 'alloc-menu',
            component: () => import(/* webpackChunkName: 'alloc-menu' */ '@/views/role/alloc-menu.vue'),
            props: true, // 将路由路径参数映射到组件的 props 数据中
            meta: { title: '分配菜单' }
          },
          {
            path: ':roleId/alloc-resource',
            name: 'alloc-resource',
            component: () => import(/* webpackChunkName: 'alloc-menu' */ '@/views/role/alloc-resource.vue'),
            props: true, // 将路由路径参数映射到组件的 props 数据中
            meta: { title: '分配资源' }
          }
        ]
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue'),
        meta: { title: '菜单管理' },
        children: [
          {
            path: '',
            name: '',
            component: () => import(/* webpackChunkName: 'menu-create-edit' */ '@/views/menu/menu.vue'),
            meta: { title: '菜单管理' }

          },
          {
            path: 'menu-create',
            name: 'menu-create',
            component: () => import(/* webpackChunkName: 'menu-create-edit' */ '@/views/menu/create.vue'),
            meta: { title: '创建菜单' }

          },
          {
            path: ':id/edit',
            name: 'menu-edit',
            component: () => import(/* webpackChunkName: 'menu-create-edit' */ '@/views/menu/edit.vue'),
            meta: { title: '编辑菜单' }
          }
        ]
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
      },
      {
        path: '/course/create',
        name: 'course-create',
        component: () => import(/* webpackChunkName: 'course-create' */ '@/views/course/create.vue')
      },
      {
        path: '/course/:courseId/edit',
        name: 'course-edit',
        component: () => import(/* webpackChunkName: 'course-edit' */ '@/views/course/edit.vue'),
        props: true
      },
      {
        path: '/course/:courseId/section',
        name: 'course-section',
        component: () => import(/* webpackChunkName: 'course-section' */ '@/views/course/section.vue'),
        props: true
      },
      {
        path: '/course/:courseId/video',
        name: 'course-video',
        component: () => import(/* webpackChunkName: 'course-video' */ '@/views/course/video.vue'),
        props: true
      },
      {
        path: '/advert-space/create',
        name: 'advert-space-create',
        component: () => import(/* webpackChunkName: 'advert-create-create' */ '@/views/advert-space/create.vue')
      },
      {
        path: '/advert-space/:id/edit',
        name: 'advert-space-edit',
        component: () => import(/* webpackChunkName: 'advert-create-edit' */ '@/views/advert-space/edit.vue')
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
