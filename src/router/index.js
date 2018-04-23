import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterPage from '@/views/RouterPage'
import ChildrenRouter from '@/views/RouterPage/childrenRouter'

// 按需加载
// import Dashboard from '@/views/RouterPage/Dashboard/dashboard'
// import Dashboard1 from '@/views/RouterPage/Dashboard/dashboard1'
// import Dashboard21 from '@/views/RouterPage/Dashboard/dashboard2_1'
// import Dashboard22 from '@/views/RouterPage/Dashboard/dashboard2_2'
const Dashboard = () => import('@/views/RouterPage/Dashboard/dashboard')
const Dashboard1 = () => import('@/views/RouterPage/Dashboard/dashboard1')
const Dashboard21 = () => import('@/views/RouterPage/Dashboard/dashboard2_1')
const Dashboard22 = () => import('@/views/RouterPage/Dashboard/dashboard2_2')

const RequestPage = () => import('@/views/RequestPage')
const VueElementUiPage = () => import('@/views/VueElementUiPage')
const VueJsPage = () => import('@/views/VueJsPage')

const User = {
  template: `
    <div class="user">
      <p>父页面</p>
      <h2>User {{ $route.params.id }}</h2>
      <div>{{ $route.params.id === '123' ? 'RouterE/abc/posts' : 'RouterE/abc/profile' }}</div>
    </div>
  `
}

Vue.use(Router)
/**
 * 全局导航守卫全局前置守卫 路由钩子函数 { beforeEach beforeResolve afterEach }
 * 路由独享的守卫 {beforeEnter}
 * 组件内的守卫 {beforeRouteEnter beforeRouteUpdate beforeRouteLeave}
 * redirect 重定向{ path: '/a', redirect: { name: 'foo' }}
 */
const router = new Router({
  mode: 'history', // #
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router',
      name: 'router',
      component: RouterPage,
      props: { default: true, sidebar: false }
    },
    {
      path: '/router/:id',
      name: 'routerId',
      component: RouterPage
    },
    {
      path: '/routerE/:id',
      name: 'routerParams',
      component: ChildrenRouter,
      meta: { requiresAuth: false },
      children: [
        {
          // 当 /routerE/:id/profile 匹配成功，
          // User 会被渲染在 ChildrenRouter 的 <router-view> 中
          path: 'profile',
          component: User
        },
        {
          path: 'posts',
          component: User,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/dashbaord',
      component: Dashboard,
      children: [
        {
          path: 'emails',
          component: Dashboard1
        },
        {
          path: 'profile',
          components: {
            default: Dashboard21,
            helper: Dashboard22
          }
        }]
    },
    {
      path: '/request',
      name: 'requestPage',
      component: RequestPage
    },
    {
      path: '/ui',
      name: 'VueElementUiPage',
      component: VueElementUiPage
    },
    {
      path: '/vue',
      name: 'VueJsPage',
      component: VueJsPage
    }
  ]
})

// 权限判断
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires welcome, check if welcome
    // if not, redirect to welcome page.
    next({ path: '/' })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
