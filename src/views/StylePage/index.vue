<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div
      class="type-p"
      :style="{ color: type ? '#4885ed' : '#ff8140' }"
      @click="chooseType">
      style绑定样式
    </div>
    <p :class="{ disabled: type }" class="show">:class绑定样式</p>
    <div class="father" :style="{ background: type ? '#4885ed' : '#ff8140' }" :class="[{ add: type }, { cut: !type }]">:class绑定数组样式</div>
  </div>
</template>

<script>
export default {
  name: 'StylePage',
  data () {
    return {
      msg: 'StylePage',
      type: true
    }
  },
  mounted () {
    //
  },
  methods: {
    chooseType () {
      this.type = !this.type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  .show {
    display: block;
  }
  .disabled {
    display: none;
  }
  .father {
    text-decoration: underline;
    text-align: center;
    color: #fff;
    width: 100%;
  }
  .add {
    color: #ff8140;
  }
  .cut {
    color: #4885ed;
  }
}
h1 {
  font-weight: normal;
  text-align: center;
  padding: 100px;
  font-size: 24px;
}
.type-p {
  font-size: 22px;
  cursor: pointer;
}
</style>
