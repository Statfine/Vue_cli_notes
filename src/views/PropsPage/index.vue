<template>
  <div class="hello">
    <h1>标题：{{ title }}</h1>
    <div>这是父元素传递给子元素的文本:<span style="color: #4885ed">{{ text }}</span></div>
    <div @click="handleDoSunFunc">调用子组件方法，改变默认值</div>
    <SonCom ref="comRefSonCom" :text="text" :handleChangeTitleCallBac="handleChangeTitle" />
  </div>
</template>

<script>
import SonCom from './son'
export default {
  name: 'PropsPage',
  components: {
    SonCom
  },
  data () {
    return {
      title: 'PropsPage',
      text: '你好'
    }
  },
  mounted () {
    //
  },
  methods: {
    handleChangeTitle (value) {
      this.title = value
    },
    handleDoSunFunc () {
      this.$refs.comRefSonCom.publickChangeHint('我能调用子组件方法')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
