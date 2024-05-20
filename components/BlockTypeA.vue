<template>
  <!-- This block is a full width background video -->
  <div class="app-video" v-if="showVideo">
    <video controls :autoplay="autoplay" :loop="loop">
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: '/video/construction-comp-2.mp4'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showVideo: false,
      videoSrc: ''
    }
  },
  mounted () {
    if (this.show) {
      this.showVideo = true
      this.videoSrc = this.src
    }
  }
}
/*
example usage

<BlockTypeA
  :show="true"
  src="/video/construction-comp-2.mp4"
  :autoplay="true"
  :loop="true"
/>

*/
</script>
<style scoped>
.app-video {
  background: url('/images/poster-01.jpg') no-repeat center center;
  position: relative;
  width: 100%;
  height: 177px;
  overflow: hidden;
  margin: 0 0 3rem 0;
}

.app-video video {
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

@media only screen and (min-width: 1440px) {
  .app-video {
    height: 260px;
  }
}

@media only screen and (min-width: 2560px) {
  .app-video {
    height: 360px;
  }
}
</style>
