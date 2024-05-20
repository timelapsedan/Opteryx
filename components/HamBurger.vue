<template>
  <button class="hamburger" @click="toggleNav" type="button" title="Toggle Menu">
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
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
<style scoped>
.hamburger {
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  z-index: 1000;
}

#app[data-preload-status='preloading'] .hamburger {
  opacity: 0;
  transition: opacity ease 0.3s;
}

#app[data-preload-status='preloaded'] .hamburger {
  opacity: 1;
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
}

.hamburger-inner {
  display: block;
  margin-top: -2px;
  top: auto;
  bottom: 0;
}

.hamburger-inner,
.hamburger-inner::after,
.hamburger-inner::before {
  position: absolute;
  width: 24px;
  height: 2px;
  transition: all ease 0.3s;
  border-radius: 4px;
  background-color: var(--primary);
}

.hamburger-inner::after,
.hamburger-inner::before {
  display: block;
  content: "";
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  top: -20px;
}

#app[data-nav-status='open'] .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

#app[data-nav-status='open'] .hamburger-inner::after {
  top: 0;
  opacity: 0;
}

#app[data-nav-status='open'] .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
}
</style>
