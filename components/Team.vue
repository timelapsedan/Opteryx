<template>
  <div id="screenFive" class="app-team section">
    <div class="ctr">
      <div class="app-team-intro">
        <h3 class="h-one">Meet The Team</h3>
        <h4 class="h-two">Industry Professionals</h4>
        <p><b>Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis faucibus placerat magna eu egestas.</b></p>
      </div>
      <ul>
        <li>
          <nuxt-link to="/test/">
            <div>
              <img src="/images/staff1.jpg" alt="temp" />
              <h5 class="h-four-b">Bill Gates</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/test/">
            <div>
              <img src="/images/staff2.jpg" alt="temp" />
              <h5 class="h-four-b">Elon Musk</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/test/">
            <div>
              <img src="/images/staff3.jpg" alt="temp" />
              <h5 class="h-four-b">Steve Jobs</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/test/">
            <div>
              <img src="/images/staff1.jpg" alt="temp" />
              <h5 class="h-four-b">Joe Rogan</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.app-team {
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.app-team ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.app-team p {
  margin: 0 0 2rem 0;
}

.app-team-intro {
  text-align: center;
}

.app-team .ctr > ul {
  width: 100%;
}

.app-team .ctr > ul li a {
  color: var(--primary);
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
}

.app-team .ctr > ul li img {
  margin: 0 auto;
  width: 70%;
  transform: scale(0.95);
  border-radius: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.app-team .ctr > ul li:hover img {
  transform: scale(1.05);
}

@media only screen and (min-width: 600px) {
  .app-team .ctr > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3rem;
  }
}

@media only screen and (min-width: 1024px) {
  .app-team .ctr > ul {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media only screen and (min-width: 1760px) {
  .app-team .ctr > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
  }
}
</style>
