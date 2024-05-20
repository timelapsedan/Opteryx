<template>
  <div class="preloader">
    <div class="preloader__logo">
      <img src="~/assets/icons/opteryx-logo.svg" alt="Preloader">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  data () {
    return {
      preloader: null,
      app: null
    }
  },
  mounted () {
    this.preload()
    setTimeout(() => {
      this.discharge()
    }, 2000)
  },
  methods: {
    preload () {
      this.preloader = document.querySelector('.preloader')
      this.app = document.querySelector('#app')
    },
    discharge () {
      this.preloader.style.opacity = 0
      setTimeout(() => {
        this.preloader.style.display = 'none'
      }, 1000)
    }
  }
}
</script>
