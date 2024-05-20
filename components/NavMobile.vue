<template>
  <nav id="nav" @click="toggleNav">
    <div class="ctr">
      <div class="headspace"></div>
      <div class="nav_grid">
        <div class="nav_grid-cell">
          <span class="nav_grid-title">
            <span>Drone Services</span>
          </span>
          <ul>
            <li>
              <nuxt-link to="/drone-fly-over-fly-through/" title="Fly-overs and Fly-throughs">
                <b>Fly-overs and Fly-throughs</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-fly-overs/" title="Drones Fly-overs">
                - Drone Fly-overs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-fly-throughs/" title="Drones Fly-throughs">
                - Drones Fly-throughs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-surveys/" title="Surveys">
                <b>Surveys</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-survey-heat-loss/" title="Heat Loss Drone Surveys">
                - Heat Loss
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-survey-topographical/" title="Topographical Drone Surveys">
                - Topographical
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-survey-infrastructure/" title="Infrastructure Drone Surveys">
                - Infrastructure
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-survey-volumetric-measurement/" title="Volumetric Measurement Drone Surveys">
                - Volumetric Measurement
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/360-panoramas/" title="360 Panoramas">
                360 Panoramas
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ai-drones/" title="Drones with AI">
                Drones with AI
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="nav_grid-cell">
          <span class="nav_grid-title">
            <span>Sectors</span>
          </span>
          <ul>
            <li>
              <nuxt-link to="/construction-monitoring-drones/" title="Construction Monitoring Drones">
                <b>Construction</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/demolition-monitoring-drones/" title="Demolition Monitoring Drones">
                <b>Demolition</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/infrastructure-monitoring-drones/" title="Infrastructure Monitoring Drones">
                <b>Infrastructure</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/property/" title="Property / Real Estate">
                - Property / Real Estate
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/agriculture-monitoring-drones/" title="Agriculture Monitoring Drones">
                - Agriculture
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/film-tv/" title="Film and TV">
                - Film and TV
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="nav_grid-cell">
          <span class="nav_grid-title">
            <span>About</span>
          </span>
          <ul>
            <li>
              <nuxt-link to="/about/" title="About Opteryx">
                <b>Opteryx</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/accreditations/" title="Our Accreditations">
                <b>Our Accreditations</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/team/" title="Meet the Team">
                <b>The Team</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact/" title="Contact Us">
                <b>Contact Us</b>
              </nuxt-link>
            </li>
          </ul>
          <span class="nav_grid-title nav_grid-title-multiple">
            <span>Other Services</span>
          </span>
          <ul>
            <li>
              <nuxt-link to="/timelapse/" title="Timelapse">
                <b>Timelapse</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/interactive-tours/" title="3D Interactive Tours">
                <b>3D Interactive Tours</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portal/" title="Portal">
                <b>Portal</b>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/masts-towers-posts/" title="Masts, Towers and Posts">
                <b>Masts, Towers and Posts</b>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="nav_grid-cell">
          <span class="nav_grid-title">
            <span>Showcase</span>
          </span>
          <!-- Conditionally render the video based on data-nav-status -->
          <div class="nav_grid-video">
            <img src="/images/temp11.jpg" alt="showcase" />
          </div>
        </div>
      </div>
    </div>
  </nav>
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
#nav {
  backdrop-filter: blur(6px);
  background-color: rgba(204, 204, 204, 0.85);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 800;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: opacity ease 0.3s;
}

#nav .headspace {
  height: 70px;
}

#app[data-nav-status='open'] > #nav {
  opacity: 1;
  pointer-events: all;
}

.nav_grid {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  width: 100%;
}

.nav_grid-cell {
  text-align: left;
  padding: 0.5rem;
}

.nav_grid-video {
  background: var(--primary);
  display: flex;
}

.nav_grid-video video {
  height: auto;
  opacity: 0.5;
  width: 100%;
  mix-blend-mode: luminosity;
}

.nav_grid .nav_grid-cell:last-child {
  display: none;
}

#nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0 1rem;
  transition: all ease 0.3s;
}

#nav ul li {
  opacity: 0;
  transform: translateY(-1rem);
  transition: all ease 0.3s;
}

#nav ul li a {
  color: var(--secondary);
  font-size: 1rem;
  padding: 0.125rem 0.25rem;
  position: relative;
  line-height: 2.8;
  text-decoration: none;
  text-transform: uppercase;
}

#nav ul li a::before {
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  content: "";
  z-index: -1;
  transition: all ease 1s;
}

#nav ul li:hover a::before {
  width: 100%;
  transition: all ease 0.3s;
}

#nav ul li a b {
  font-weight: 600;
  color: var(--primary);
}

.nav_grid-title {
  display: flex;
  margin: 0 0 0.5rem 0;
  position: relative;
}

.nav_grid-title-multiple {
  margin-top: 1rem;
}

.nav_grid-title span {
  display: block;
  position: relative;
  margin: 0;
  padding: 0 1rem;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.5;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav_grid-title::after {
  position: absolute;
  background: var(--primary);
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  transition: all ease-out 0.3s;
}

#app[data-nav-status='open'] .nav_grid-title::after {
  width: 100%;
}

#nav ul li:nth-child(2) {
  transition-delay: 0.05s;
}

#nav ul li:nth-child(3) {
  transition-delay: 0.1s;
}

#nav ul li:nth-child(4) {
  transition-delay: 0.15s;
}

#nav ul li:nth-child(5) {
  transition-delay: 0.2s;
}

#nav ul li:nth-child(6) {
  transition-delay: 0.25s;
}

#nav ul li:nth-child(7) {
  transition-delay: 0.3s;
}

#nav ul li:nth-child(8) {
  transition-delay: 0.35s;
}

#nav ul li:nth-child(9) {
  transition-delay: 0.4s;
}

#nav ul li:nth-child(10) {
  transition-delay: 0.45s;
}

#app[data-nav-status='open'] > #nav ul li {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (min-width: 1240px) {
  #nav {
    align-items: center;
    overflow-y: hidden;
  }

  .nav_grid {
    grid-template-columns: 0.75fr 0.75fr 0.75fr 1.25fr;
    grid-template-rows: 1fr;
  }

  .nav_grid .nav_grid-cell:nth-child(n + 3) {
    display: block;
  }
}
</style>
