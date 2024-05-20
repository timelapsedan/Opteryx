<template>
  <!-- header -->
  <header id="app-header">
    <div class="app-header-grid ctr">
      <div>
        <nav class="app-nav">
          <ul>
            <li>
              <nuxt-link to="#">
                Drone Services
              </nuxt-link>
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
            </li>
            <li>
              <nuxt-link to="#">
                Sectors
              </nuxt-link>
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
            </li>
            <li>
              <nuxt-link to="#">
                About
              </nuxt-link>
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
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <nav class="app-nav">
          <ul>
            <li>
              <a href="/">
                Call Us &nbsp; <span>0123 456 789</span>
              </a>
            </li>
          </ul>
        </nav>
        <HamBurger />
      </div>
    </div>
  </header>
</template>
<style scoped>
#app-header {
  background: rgba(222, 222, 222, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  z-index: 999;
}

#app[data-nav-status='open'] #app-header {
  background: rgba(222, 222, 222, 0);
}

.app-header-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header-grid > div {
  flex: 1;
}

.app-nav div {
  display: flex;
  flex: 1;
}

.app-header-grid > div:nth-child(2) {
  flex: 0 0 80px;
}

.app-header-grid > div:nth-child(3) {
  display: flex;
  justify-content: flex-end;
}

.app-nav {
  display: flex;
  align-items: center;
}

#app[data-nav-status='open'] .app-nav {
  visibility: hidden;
}

.app-nav ul {
  display: none;
}

.app-nav ul li {
  position: relative;
}

.app-nav ul li a span {
  color: var(--secondary);
}

.app-nav ul ul {
  display: none;
  padding: 50px 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.app-nav ul li:hover ul {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.app-nav ul ul li {
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.85);
  display: block;
  border-bottom: 1px solid rgba(19, 35, 53, 0.7);
  transition: background-color ease 1.5s;
}

.app-nav > ul li:hover {
  cursor: pointer;
}

.app-nav ul ul li:hover {
  transition: background-color ease 0.3s;
  background-color: rgba(19, 35, 53, 0.8);
}

/* Optional: Style for nested a elements */
.app-nav ul ul li a {
  color: var(--primary);
  text-decoration: none;
  padding: 1rem 2rem;
  display: block;
  transition: color 0.3s ease;
}

/* Optional: Hover effect for nested a elements */
.app-nav ul ul li a:hover {
  color: #fff;
}

.app-header-grid #logo {
  display: block;
  width: 80px;
  height: auto;
}

.app-header-grid #logo .st0 {
  fill: #132335;
}

.app-header-grid #logo .st1 {
  fill: #fff;
}

.app-header-grid #logo .st2 {
  clip-path: url(#SVGID_00000181047228464927629570000016981170706935036053_);
}

.app-header-grid #logo .st3 {
  fill: #a41b35;
}

.app-header-grid #logo .st4 {
  display: none;
}

.app-header-grid #logo .st5 {
  display: inline;
}

.app-header-grid #logo .st6 {
  fill: #fff;
  stroke: #fff;
  stroke-width: 2;
  stroke-miterlimit: 10;
}

.app-header-grid #logo .st10 {
  fill: #1cb7d8;
}

@media only screen and (min-width: 1360px) {
  .app-header-grid > div:nth-child(2) {
    flex: 0 0 120px;
  }

  .app-header-grid #logo {
    width: 120px;
  }

  .app-nav ul {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .app-nav li {
    display: flex;
  }

  .app-nav li a {
    color: var(--primary);
    display: flex;
    margin: 0 2rem 0 0;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.3rem;
    font-weight: 600;
    transition: color ease 0.3s;
  }

  .app-nav > ul li:hover a {
    color: var(--primary);
  }
}
</style>
