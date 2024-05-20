<template>
  <div id="app-html">
    <span class="headspace"></span>
    <!-- hero -->
    <BlockTypeH
      :show="true"
      :showButton="true"
      videoSrc="/video/construction-comp-2.mp4"
      color="blue"
      title="Opteryx"
      titleTwo="Drone Systems"
      subtitle="cutting-edge UAV technology"
      description="At Opteryx Drone Systsms we have over 20 years experience working in the media industries for every sort of client big and small. Elevate your perspective with our state-of-the-art drone services."
      descriptionTwo="We provide unparalleled bird's-eye views and crystal-clear imagery that only cutting-edge UAV technology can provide."
    />
    <!-- INTRO -->
    <div id="screenOne" class="app-intro ctr">
      <Intro />
    </div>
    <Services />
    <Sectors />
    <Related />
    <Team />
    <Contact />
  </div>
</template>
<script>
export default {
  name: 'Home',
  layout: 'default',
  head () {
    return {
      title: 'Opteryx Drone Systems',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Opteryx Drone Systems'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: ''
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('closeNav')
  }
}
</script>
