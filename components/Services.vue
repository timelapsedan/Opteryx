<template>
  <div id="screenTwo" class="services section">
    <div class="ctr">
      <div class="services-grid">
        <div>
          <ul>
            <li>
              <nuxt-link to="/drone-fly-over-fly-through/">
                <div>
                  <h3 class="h-four">Fly Overs &amp;<br/>Fly Throughs</h3>
                  <div>
                    <span></span>
                    <Badge />
                    <img src="images/icon-001-grey.svg" alt="Fly Overs & Fly Throughs" />
                    <span></span>
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/construction-monitoring-drones/">
                <div>
                  <h3 class="h-four">Drones For Construction</h3>
                  <div>
                    <span></span>
                    <Badge />
                    <img src="images/icon-002-grey.svg" alt="Drones For Construction Progress" />
                    <span></span>
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/drone-surveys/">
                <div>
                  <h3 class="h-four">Surveys</h3>
                  <div>
                    <span></span>
                    <Badge />
                    <img src="images/icon-003-grey.svg" alt="Surveys" />
                    <span></span>
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/360-panoramas/">
                <div>
                  <h3 class="h-four">360 Panoramas</h3>
                  <div>
                    <span></span>
                    <Badge />
                    <img src="images/icon-004-grey.svg" alt="360 Panoramas" />
                    <span></span>
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ai-drones/">
                <div>
                  <h3 class="h-four">Drones With A.I</h3>
                  <div>
                    <span></span>
                    <Badge />
                    <img src="images/icon-005-grey.svg" alt="Drones With A.I" />
                    <span></span>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h2 class="h-one-b">Construction Sector</h2>
            <h3 class="h-two">Drone Specialists</h3>
            <p><b>Fully accredited for drone and construction industry work with over 20 years' experience of specialist work for the construction and allied industries.</b></p>
            <p>Unlock the full potential of aerial video, photography and data collection with precise topographical surveys, engaging promotional videos, and so much more.</p>
            <p>Explore our wide spectrum of <strong>drone services</strong> — where our expertise and innovation meets the sky!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.services {
  background: var(--primary) url('/images/temp15.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.services-grid {
  width: 100%;
}

.services-grid > div {
  display: flex;
  align-items: center;
  text-align: center;
}

.services ul,
.services li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.services ul {
  list-style: none;
  padding: 0;
  margin: 0 0 3rem 0;
  width: 100%;
}

.services li {
  position: relative;
  margin: 1rem 0.5rem;
  text-align: center;
}

.services li div > div {
  position: relative;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
}

.services li a div div img + span::before,
.services li a div div img + span::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  border-top: none;
  border-bottom: 1px solid var(--secondary);
  border-left: 1px solid var(--secondary);
  transform: translateX(0) translateY(0);
  transition: transform 0.3s ease-in-out;
}

.services li a div div img + span::after {
  border-left: none;
  border-right: 1px solid var(--secondary);
  left: auto;
  right: 0;
}

.services li div > div > span:first-child::before,
.services li div > div > span:first-child::after {
  content: "";
  display: block;
  border-top: 1px solid var(--secondary);
  border-left: 1px solid var(--secondary);
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: translateX(0) translateY(0);
  transition: transform 0.3s ease-in-out;
}

.services li div > div > span:first-child::after {
  border-top: 1px solid var(--secondary);
  border-left: none;
  border-right: 1px solid var(--secondary);
  left: auto;
  right: 0;
}

.services li:hover a div div img + span::before {
  transform: translateX(10px) translateY(-10px);
}

.services li:hover a div div img + span::after {
  transform: translateX(-10px) translateY(-10px);
}

.services li:hover div > div > span:first-child::before {
  transform: translateX(10px) translateY(10px);
}

.services li:hover div > div > span:first-child::after {
  transform: translateX(-10px) translateY(10px);
}

.services li a {
  color: var(--primary);
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  padding: 1rem;
}

.services li a,
.services li a div {
  width: 100%;
}

.services li svg {
  transform: scale(0.7);
  transition: transform ease 0.3s;
}

.services li svg .st0 {
  fill: #132335;
  transition: fill ease 0.3s;
}

.services li svg .st1 {
  fill: #fff;
}

.services li svg .st2 {
  clip-path: url(#badgeMask);
}

.services li svg .st3 {
  fill: #a41b35;
  transition: fill ease 0.3s;
}

.services li:hover svg .st0 {
  fill: #bdbdbd;
}

.services li:hover svg .st3 {
  fill: #fff;
}

.services li img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  padding: 1rem;
  transform: scale(0.9);
  transition: transform ease 0.3s;
}

.services li:hover svg,
.services li:hover img {
  transform: scale(1);
}

.services p {
  color: #fff;
}

@media only screen and (min-width: 600px) {
  .services ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }

  .services li {
    width: calc(50% - 2rem);
  }
}

@media only screen and (min-width: 1024px) {
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .services-grid > div {
    text-align: left;
  }
}

@media only screen and (min-width: 1360px) {
  .services li {
    width: calc(33.33% - 2rem);
  }
}
</style>
