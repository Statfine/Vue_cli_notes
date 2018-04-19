<template>
  <div class="hello">
    <h1>“{{ msg }}” 笔记</h1>
    <h2>路由介绍页面<a href="https://github.com/axios/axios" target="_blank">https://github.com/axios/axios</a></h2>
    <p>当前页面点击请求，同事改变数据 未走vuex</p>
    <h2>{{ list.length }}</h2>
    <div class="btn" @click="handleRequrest">Click requrest</div>
  </div>
</template>

<script>
import { getInfo } from './api'
export default {
  name: 'requestPage',
  data () {
    console.log('init requestPage')
    return {
      msg: 'axios 数据请求',
      list: []
    }
  },
  computed: {
    //
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('watchroute', to, from)
      this.params = this.$route.params.id === '123' ? 'abc' : '123'
    }
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
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.getDetailData(vm)
    })
  },
  methods: {
    getDetailData () {
      console.log('getDetailData1')
      setTimeout(() => {
        console.log('getDetailData2')
      }, 1000)
      // Promise示例
      new Promise((resolve, reject) => {
        console.log('getDetailData3')
        var a = 1
        if (a === 1) {
          resolve()
        }
        if (a === 2) {
          reject(new Error('something bad happened'))
        }
      }).then(() => {
        console.log('getDetailData4')
      }).catch((error) => {
        console.log('catch', error)
      })
      getInfo().then(response => {
        console.log('request response', response)
      }).catch(error => {
        console.log('request', error)
      })
    },
    handleRequrest () {
      console.log('get')
      // 请求
      new Promise((resolve, reject) => {
        getInfo().then(response => {
          console.log('Promise response', response)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      }).then((response) => {
        console.log('Promise then', response)
        this.list = response
      }).catch((error) => {
        console.log('Promise catch=>', error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.btn {
  border-radius: 2px;
  background: #42b983;
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
</style>
