<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>我是接受到的：<span style="color: #ff8140">{{ text }}</span></div>
    <div @click="handleChangeTitle">点击可以修改父元素的标题</div>
    <div>传递数据默认值：{{ sonHint }}</div>
  </div>
</template>

<script>
export default {
  name: 'SonCom',
  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    },
    categories: {
      type: Array,
      default () {
        return [1, 2, 3]
      }
    },
    hint: {
      type: String,
      default () {
        return '我是空的'
      }
    },
    handleChangeTitleCallBac: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      title: 'SonCom',
      index: 1,
      sonHint: ''
    }
  },
  created () {
    this.sonHint = this.hint
  },
  mounted () {
    //
  },
  methods: {
    handleChangeTitle () {
      this.index = this.index + 1
      this.handleChangeTitleCallBac(this.index)
    },
    publickChangeHint (value) {
      this.sonHint = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
