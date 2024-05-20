<template>
  <nuxt-link id="logo" to="/" @click="toggleNav">
    <img src="~/assets/icons/opteryx-logo.svg" width="60" height="52" alt="Logo">
  </nuxt-link>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['toggleNav']),
    updateAppNavStatus (isOpen) {
      const app = document.getElementById('app')
      if (app) {
        app.setAttribute('data-nav-status', isOpen ? 'open' : 'closed')
      }
    }
  },
  computed: {
    ...mapGetters(['isNavOpen'])
  },
  watch: {
    isNavOpen (newValue) {
      this.updateAppNavStatus(newValue)
    }
  },
  mounted () {
    this.updateAppNavStatus(this.isNavOpen)
  }
}
</script>
