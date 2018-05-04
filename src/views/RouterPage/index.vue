<template>
  <div class="hello">
    <h1>“{{ msg }}” 笔记</h1>
    <h2>路由介绍页面<a href="https://router.vuejs.org/zh-cn/" target="_blank">https://router.vuejs.org/zh-cn/</a></h2>
    <h2>{{ username.id ? username : null }}</h2>
    <div><router-link to="/router/123">Go to Router/123</router-link></div>
    <div><router-link to="/router/abc">Go to Router/abc</router-link></div>
     <div><router-link to="/dashbaord">Go to Dashbaord</router-link></div>
    <div>点击会跳转<router-link :to="'/router/' + getJumpId">{{ username.id ? username.id === '123' ? 'abc' : '123' : null }}</router-link></div>
    <div>点击会跳转<router-link :to="'/router/' + params">{{ username.id ? username.id === '123' ? 'abc' : '123' : null }}</router-link></div>
    <div>点击不会跳转<router-link :to="'/router/' + username.id === '123' ? 'abc' : '123'">{{ username.id ? username.id === '123' ? 'abc' : '123' : null }}</router-link></div>
    <p>嵌套路由</p>
    <div><router-link to="/routerE/123/profile">Go to RouterE/123/profile</router-link></div>
    <div><router-link to="/routerE/abc/posts">页面需要登录 Go to RouterE/abc/posts</router-link></div>
    <p>控制台打印路由route对象</p>
    <p>权限判断的钩子函数咋子router.js router.beforeEach</p>
  </div>
</template>

<script>
export default {
  name: 'routerPage',
  data () {
    console.log('data')
    return {
      msg: '路由',
      params: this.$route.params.id === '123' ? 'abc' : '123'
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  destroyed () {
    console.log('destroyed')
  },
  computed: {
    username () {
      // 我们很快就会看到 route `params` 是什么
      console.log(this.$route)
      return this.$route.params
    },
    getJumpId () {
      return this.$route.params.id === '123' ? 'abc' : '123'
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('watchroute', to, from)
      this.params = this.$route.params.id === '123' ? 'abc' : '123'
    },
    '$store.state.app.sum': function (after, before) {
      console.log(after)
      console.log(before)
    },
    msg: function (val) {
      console.log('watch', val)
    },
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
