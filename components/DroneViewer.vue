<template>
  <div class="drone-viewer" :style="{ top: droneViewerTop }">
    <div class="drone-screen">
      <canvas id="drone-canvas" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      droneViewerTop: 'calc(100vh + 50% - 50%)' // Default top position
    }
  },
  mounted () {
    // Calculate top position dynamically based on the height of div#screenOne
    const screenOneHeight = document.getElementById('screenOne').clientHeight
    const droneViewerHeight = this.$el.clientHeight
    this.droneViewerTop = `calc(100vh - ${droneViewerHeight / 2}px + ${screenOneHeight / 2}px)`
  }
}
</script>
<style scoped>
.drone-viewer {
  display: none;
}

@media only screen and (min-width: 1360px) {
  #app.index .drone-viewer {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    right: 12rem;
    pointer-events: none;
    background: url('/images/phone.png') no-repeat center center;
    background-size: contain;
    width: 180px;
    height: 352px;
  }

  .drone-screen {
    background: #ccc;
    border-radius: 10px;
    width: 157px;
    height: 290px;
    transform: translateX(11px);
  }

  #drone-canvas {
    width: 100%;
    height: 100%;
  }
}

@media only screen and (min-width: 1760px) {
  #app.index .drone-viewer {
    right: calc(8rem + 3rem);
  }
}

@media only screen and (min-width: 1920px) {
  #app.index .drone-viewer {
    right: 19rem;
  }
}

@media only screen and (min-width: 2560px) {
  #app.index .drone-viewer {
    right: 28rem;
  }
}
</style>
