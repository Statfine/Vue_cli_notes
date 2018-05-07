<template>
  <div class="hello">
    <h1>“{{ msg }}” 笔记</h1>
    <h2>VueX介绍页面<a href="https://vuex.vuejs.org/zh-cn/intro.html" target="_blank">https://vuex.vuejs.org</a></h2>
    <div class="container">
      <p class="title">getter的两中写法：1.全局获取；2.单独的store里面获取</p>
      <p>1.store.app下的welcome：{{ getterWelcome }}</p>
      <p>2.store.app下的welcome：{{ getWelcome }}</p>
    </div>
    <div class="container">
      <p class="title">action</p>
      <el-input class="margin_buttom" v-model="value" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="getClick">点击修改 {{ getSum }}</el-button>
    </div>
    <MapCom></MapCom>
  </div>
</template>

<script>
import MapCom from './mapCom.vue'
export default {
  name: 'VuexPage',
  components: {
    MapCom
  },
  data () {
    console.log('init VuexPage')
    return {
      msg: 'VueX',
      value: 1
    }
  },
  computed: {
    getterWelcome () {
      return this.$store.getters.getterWelcome
    },
    getWelcome () {
      return this.$store.getters.getWelcome
    },
    getSum () {
      return this.$store.getters.getSum
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('watchroute', to, from)
    },
    '$store.state.app.sum': function (after, before) {
      console.log(after)
      console.log(before)
    },
    value: function (val) {
      console.log('watch', val)
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
      this.getDetailData()
    },
    getDetailData () {
      this.$store.dispatch('changeSum', this.value)
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
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 10px
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
