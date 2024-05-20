<template>
  <!-- This block is a full width background image -->
  <div class="block_f" v-if="showImage" :style="{ backgroundImage: 'url(' + imageSrc + ')' }" style="background-repeat: no-repeat; background-position: center; background-attachment: fixed; background-size: cover;">
    <div class="block_f-content">
      <div :class="color">
        <div>
          <h2 class="h-one-b">Drone Services</h2>
          <h3 class="h-two">Industry Compliant &amp; Certified</h3>
          <p class="p-three"><b>Whether you're in construction,  property/real estate, agriculture, or film and TV, our drone systems and highly qualified pilots deliver the highest quality results that truly set your projects apart.</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    imageSrc: {
      type: String,
      default: '/images/poster-01.jpg' // default image source
    },
    altData: {
      type: String,
      default: 'Background Image' // default alt text
    },
    color: {
      type: String,
      default: 'gradient' // default class for background
    }
  },
  data () {
    return {
      showImage: false
    }
  },
  mounted () {
    if (this.show) {
      this.showImage = true
    }
  }
}
</script>
<style scoped>
.block_f {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
  overflow: hidden;
  margin: 0 0 3rem 0;
}

.block_f img {
  filter: grayscale(1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 133%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
}

.block_f-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.block_f-content > div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 3rem;
}

.gradient {
  background: rgb(19, 35, 53);
  background: -moz-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  filter: progid:dximagetransform.microsoft.gradient(startColorstr="#132335", endColorstr="#a41b35", GradientType=1);
}

.red {
  background: rgba(164, 27, 53, 0.8);
}

.blue {
  background: rgba(19, 35, 53, 0.8);
}
</style>
