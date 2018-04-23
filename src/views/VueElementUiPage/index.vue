<template>
  <div class="hello" v-loading="loading">
    <h1>“{{ msg }}” 笔记</h1>
    <h2>Element介绍页面<a href="http://element-cn.eleme.io/#/zh-CN/" target="_blank">http://element-cn.eleme.io/#/zh-CN/</a></h2>
    <div class="margin_buttom"><i class="el-icon-delete"></i></div>
    <div class="margin_buttom"><el-button type="primary" icon="el-icon-search" @click="getClick">Message</el-button></div>
    <div class="margin_buttom"><el-button type="primary" icon="el-icon-search" @click="sureDialog">Sure</el-button></div>
    <el-input class="margin_buttom" v-model="input" placeholder="请输入内容"></el-input>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value4"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="changDate">
      </el-date-picker>
    </div>
    <div>
      <el-color-picker v-model="color4" @change="changeColor"></el-color-picker>
    </div>
    <div>
      <el-button
        plain
        @click="open2">
        提示 通知
      </el-button>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <el-button>上左</el-button>
      </el-tooltip>
    </div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      msg: 'Element Ui',
      input: '',
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      color4: '#409EFF',
      dialogVisible: false,
      loading: true
    }
  },
  computed: {
    //
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
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
      this.$message('这是一条消息提示' + this.input)
    },
    changDate (e) {
      console.log(e)
    },
    changeColor (e) {
      console.log(e)
    },
    open2 () {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    sureDialog () {
      this.$confirm('确认关闭？')
        .then(_ => {
          console.log('sure')
        })
        .catch(_ => {})
    },
    clearLoading () {
      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.margin_buttom {
  margin-bottom: 10px;
}
</style>
