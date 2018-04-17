<template>
  <div class="hello">
    <h2>{{ username }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'routerPage',
  data () {
    console.log('data')
    return {
      msg: '路由',
      id: ''
    }
  },
  computed: {
    username () {
      // 我们很快就会看到 route `params` 是什么
      console.log(this.$route)
      return this.$route.path
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('watchroute')
    }
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log('beforeRouteUpdate')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
