<template>
  <div class="hello">
    <div class="container">
      <p class="title">map 写法</p>
      <p>store下的title：{{ getterTitle }}</p>
      <el-input class="margin_buttom" v-model="value" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="getClick">点击修改 {{ getSum }}</el-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'MapCom',
  data () {
    console.log('init VuexPage')
    return {
      msg: 'VueX',
      value: 1
    }
  },
  computed: {
    ...mapGetters([
      'getterTitle',
      'getSum'
    ])
  },
  watch: {
    '$route' (to, from) {
      console.log('watchroute', to, from)
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
      this.changeSum(this.value)
      this.setWelcome(this.value)
    },
    // 修改功能
    ...mapMutations({
      setWelcome: 'CHANGE_WELCOME' // 获取歌手信息
    }),
    ...mapActions([
      'changeSum' // 设置播放历史
    ])
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
