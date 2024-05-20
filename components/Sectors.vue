<template>
  <div id="screenThree" class="sectors section">
    <div class="ctr">
      <div class="sectors-intro">
        <h3 class="h-one">Industry Sectors</h3>
        <h4 class="h-two">Sectors We Work with</h4>
      </div>
      <ul>
        <li>
          <nuxt-link to="/construction-monitoring-drones/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp2.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Construction</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/demolition-monitoring-drones/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp3.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Demolition</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/infrastructure-monitoring-drones/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp4.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Infrastructure</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/property/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp5.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Property / Real Estate</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/agriculture-monitoring-drones/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp6.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Agriculture</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/film-tv/">
            <div>
              <div class="sectors-thumb blue">
                <img src="/images/temp7.jpg" alt="temp" />
              </div>
              <h5 class="h-four-b">Film &amp; TV</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.sectors {
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.sectors ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.sectors .h-two {
  margin: 0 0 6rem 0;
}

.sectors-intro {
  text-align: center;
}

.sectors .ctr > ul {
  width: 100%;
}

.sectors .ctr > ul li a {
  color: var(--primary);
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
}

.sectors-thumb {
  position: relative;
}

.sectors-thumb::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.sectors-thumb.gradient::after {
  background: rgb(19, 35, 53);
  background: -moz-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  filter: progid:dximagetransform.microsoft.gradient(startColorstr="#132335", endColorstr="#a41b35", GradientType=1);
}

.sectors-thumb.red::after {
  background: rgba(164, 27, 53, 0.8);
}

.sectors-thumb.blue::after {
  background: rgba(19, 35, 53, 0.8);
}

.sectors .ctr > ul li:hover .sectors-thumb::after {
  transform: scale(1);
  opacity: 0.3;
}

.sectors .ctr > ul li img {
  margin: 0;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.sectors .ctr > ul li:hover img {
  transform: scale(1);
}

@media only screen and (min-width: 600px) {
  .sectors .ctr > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3rem;
    width: 100%;
  }
}

@media only screen and (min-width: 1360px) {
  .sectors .ctr > ul {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
