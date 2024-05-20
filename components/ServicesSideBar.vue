<template>
  <nav class="side-bar">
    <span class="side-bar-title">
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
    <span class="side-bar-title">
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
    <span class="side-bar-title">
      <span>Related</span>
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
  </nav>
</template>
<style scoped>
.side-bar {
  width: 100%;
}

.side-bar-title {
  background: var(--primary);
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.6rem;
  margin: 0 0 2rem 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  letter-spacing: 1px;
  line-height: 1.8;
  padding: 0 1rem;
}

.side-bar ul,
.side-bar li {
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
}

.side-bar ul {
  margin: 0 0 6rem 0;
}

.side-bar li a {
  background-color: rgba(0, 0, 0, 0);
  color: var(--secondary);
  display: block;
  font-size: 1.4rem;
  line-height: 2;
  padding: 0 1rem;
  text-decoration: none;
  width: 100%;
  transition: background-color 0.3s ease;
}

.side-bar li a b {
  color: var(--primary);
  font-size: 1.7rem;
}

.side-bar li:hover a {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
