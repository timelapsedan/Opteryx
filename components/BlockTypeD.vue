<template>
  <!-- This block is a full width background video -->
  <div class="block_d" v-if="showVideo">
    <video autoplay loop muted playsinline>
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="block_d-content">
      <div class="ctr" :class="color">
        <div>
          <h1 class="h-one-b">{{ title }}</h1>
          <h2 class="h-two">{{ subtitle }}</h2>
          <p class="p-three"><b>{{ description }}</b></p>
          <div v-if="showButton">
            <nuxt-link to="/contact/" class="b-one" >
              <span>
                Enquire Now
              </span>
            </nuxt-link>
          </div>
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
    showButton: {
      type: Boolean,
      default: false
    },
    videoSrc: {
      type: String,
      default: '/video/construction-comp-2.mp4' // Default video source
    },
    color: {
      type: String,
      default: 'gradient' // Default class for background
    },
    title: {
      type: String,
      default: 'Drone Services' // Default title
    },
    subtitle: {
      type: String,
      default: 'Industry Compliant & Certified' // Default subtitle
    },
    description: {
      type: String,
      default: 'Whether you\'re in construction, property/real estate, agriculture, or film and TV, our drone systems and highly qualified pilots deliver the highest quality results that truly set your projects apart.' // Default description
    }
  },
  data () {
    return {
      showVideo: false
    }
  },
  mounted () {
    if (this.show) {
      this.showVideo = true
    }
  }
}
</script>
<style scoped>
.block_d {
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;
  margin: 0 0 3rem 0;
}

.block_d video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
}

.block_d-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.block_d-content > .ctr {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

@media only screen and (min-width: 1024px) {
  .block_d {
    margin: 0 0 9rem 0;
  }
}
</style>
