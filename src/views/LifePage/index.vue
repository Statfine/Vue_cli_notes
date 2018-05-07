<template>
  <div class="hello">
    <div
      v-for="(item, index) in lifeList"
      :key="item"
    >{{ index + ':' + item }}</div>
    <router-link class="note" to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'LifePage',
  data () {
    return {
      name: 'LifePage',
      lifeList: []
    }
  },
  beforeCreate () {
    console.log(this.name, 'beforeCreate')
  },
  created () {
    console.log(this.name, 'created')
    this.lifeList.push('created')
  },
  beforeMount () {
    console.log(this.name, 'beforeMount')
    this.lifeList.push('beforeMount')
  },
  mounted () {
    console.log(this.name, 'mounted')
    this.lifeList.push('mounted')
  },
  beforeUpdate () {
    console.log(this.name, 'beforeUpdate')
  },
  updated () {
    console.log(this.name, 'updated')
  },
  beforeDestroy () {
    console.log(this.name, 'beforeDestroy')
    this.lifeList.push('beforeDestroy')
  },
  destroyed () {
    console.log(this.name, 'destroyed')
    this.lifeList.push('destroyed')
  },
  methods: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
