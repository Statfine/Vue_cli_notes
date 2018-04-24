<template>
  <div class="hello">
    <h1>“{{ msg }}” 笔记</h1>
    <h2>Vue介绍页面<a href="https://cn.vuejs.org/v2/guide/syntax.html" target="_blank">https://cn.vuejs.org/v2/guide/syntax.html</a></h2>
    <p>{{ textP }}</p>
    <div class="container">
      <p class="title">v-bind:</p>
      <div v-bind:id="dynamicId">{{ bind }}<span id="dynamicId">id</span></div>
      <div v-bind:id="'list-' + dynamicId">表达式</div>
      <p>完整写法  v-bind:id</p>
      <p>缩写  :id</p>
    </div>
    <div class="container">
      <p class="title">v-on:</p>
      <div v-on:click="getClick">点击触发事件</div>
      <div click="getClick">点击没有事件</div>
      <p>完整写法  v-on:click</p>
      <p>缩写  @click</p>
    </div>
    <div class="container">
      <p class="title">methods是个方法;computed是计算属性，实时响应的;watch就是监听data和computed里的值是否发生改变</p>
      <p>{{ now }}</p>
      <div class="input_div">firstName:<el-input class="margin_buttom" v-model="firstName" placeholder="请输入内容"></el-input></div>
      <div class="input_div">lastName:<el-input class="margin_buttom" v-model="lastName" placeholder="请输入内容"></el-input></div>
      <p>Computed: {{ fullNameComputed }}</p>
      <p>Methods: {{ fullNameMethods() }}</p>
      <p>Watch: {{ fullName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueElementUiPage',
  data () {
    console.log('init VueElementUiPage')
    setTimeout(() => {
      this.clearLoading()
    }, 2000)
    return {
      msg: 'Vue',
      textP: '文本的数据绑定 （双大括号{{ }}）',
      bind: '属性用v-bind:',
      dynamicId: 'idP',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  computed: {
    now: function () {
      return Date.now()
    },
    fullNameComputed: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('watchroute', to, from)
    },
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  methods: {
    getClick () {
      console.log('click')
    },
    clearLoading (value) {
      console.log('setTimeout')
      this.time = value
    },
    fullNameMethods: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.container {
  width: 560px;
  margin: 0 auto 40px auto;
  border-bottom: 2px solid #e9e9e9;
}
.title {
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
}
.input_div {
  display: flex;
  align-items: center;
}
.input_div .el-input {
  margin-left: 20px!important;
}
</style>
