<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 style="display: none">Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2 style="display: none">Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <router-link class="note" to="/life">生命周期</router-link>
    <router-link class="note" to="/router">路由页面</router-link>
    <router-link class="note" to="/vue">Vue JS</router-link>
    <router-link class="note" to="/style">Vue Style</router-link>
    <router-link class="note" to="/props">Vue Props</router-link>
    <router-link class="note" to="/request">我的请求页面</router-link>
    <router-link class="note" to="/ui">Vue Element UI</router-link>
    <router-link class="note" to="/vuex">VueX</router-link>
    <router-link class="note" to="/thridPlugin">插件</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  display: block;
}
.note {
  font-size: 24px;
}
</style>
