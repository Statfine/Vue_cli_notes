<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="margin_buttom">
      <el-button type="primary" icon="el-icon-search" @click="handleGetCanvas">canvas</el-button>
    </div>
    <div id="imageCover" class="imageCover">
      <img crossOrigin="Anonymous" id="imageCanvas" :src="picture[0]" alt="logo" width="200" height="200" />
      <img crossOrigin="Anonymous" class="p_cover_one" :src="picture[1]" alt="" />
      <img crossOrigin="Anonymous" class="p_cover_two" :src="picture[2]" alt="" />
    </div>
    <img :src="imgHtmlSrc" alt="logo" />
    <img :src="imgDomSrc" alt="logo" />
    <img :src="imgSrc" alt="logo" />
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'
export default {
  name: 'html2canvas',
  data () {
    return {
      msg: 'html2canvas',
      imgHtmlSrc: '',
      imgDomSrc: '',
      imgSrc: '',
      picture: [
        'http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/EcYrRKRtEydM.png',
        'http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png',
        'http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/napFbsCN2Gt3.png'
      ]
    }
  },
  mounted () {
    //
  },
  methods: {
    handleGetCanvas () {
      // html2canvas
      html2canvas(document.getElementById('imageCover'), { useCORS: true }).then((canvas) => {
        console.log('html2canvas', canvas.toDataURL('image/png'))
        this.imgHtmlSrc = canvas.toDataURL('image/png')
      })
      // domtoimage
      domtoimage.toSvg(document.getElementById('imageCover')).then((dataUrl) => {
        console.log('domtoimage', dataUrl)
        this.imgDomSrc = dataUrl
      })
      // canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      ctx.drawImage(document.getElementById('imageCanvas'), 0, 0)
      this.imgSrc = canvas.toDataURL()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  padding: 10px;
  .imageCover {
    position: relative;
    width: 200px;
    height: 200px;
    .p_cover_one {
      position: absolute;
      left: 10px;
      width: 120px;
      top: 0px;
    }
    .p_cover_two {
      position: absolute;
      left: 0px;
      width: 120px;
      top: 100px;
    }
  }
}
</style>
