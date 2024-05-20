<template>
  <div id="screenFour" class="app-related section">
    <div class="ctr">
      <div class="app-related-intro">
        <h3 class="h-one-b">Related Services</h3>
        <h4 class="h-two-c">Our other Services</h4>
      </div>
      <ul>
        <li>
          <nuxt-link to="/timelapse/">
            <div>
              <div class="app-related-thumb blue">
                <img src="/images/temp2.jpg" alt="temp" />
              </div>
              <h5 class="h-four-c">Timelapse</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/interactive-tours/">
            <div>
              <div class="app-related-thumb blue">
                <img src="/images/temp3.jpg" alt="temp" />
              </div>
              <h5 class="h-four-c">3D Interactive Tours</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portal/">
            <div>
              <div class="app-related-thumb blue">
                <img src="/images/temp4.jpg" alt="temp" />
              </div>
              <h5 class="h-four-c">Online Portal</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/masts-towers-posts/">
            <div>
              <div class="app-related-thumb blue">
                <img src="/images/temp5.jpg" alt="temp" />
              </div>
              <h5 class="h-four-c">Mast, Towers &amp; Posts</h5>
              <p class="p-two">Lorem ipsum elit duis faucibus dolor sit amet, consectetur adipiscing elit duis</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.app-related {
  background: var(--secondary) url('/images/temp16.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  width: 100%;
}

.app-related ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.app-related .h-two-c {
  margin: 0 0 6rem 0;
}

.app-related p {
  color: #fff;
}

.app-related-intro {
  text-align: center;
}

.app-related .ctr > ul {
  width: 100%;
}

.app-related .ctr > ul li a {
  color: var(--primary);
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
}

.app-related-thumb {
  position: relative;
}

.app-related-thumb::after {
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

.app-related-thumb.gradient::after {
  background: rgb(19, 35, 53);
  background: -moz-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  filter: progid:dximagetransform.microsoft.gradient(startColorstr="#132335", endColorstr="#a41b35", GradientType=1);
}

.app-related-thumb.red::after {
  background: rgba(164, 27, 53, 0.8);
}

.app-related-thumb.blue::after {
  background: rgba(19, 35, 53, 0.8);
}

.app-related .ctr > ul li:hover .app-related-thumb::after {
  transform: scale(1);
  opacity: 0.3;
}

.app-related .ctr > ul li img {
  margin: 0;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.app-related .ctr > ul li:hover img {
  transform: scale(1);
}

@media only screen and (min-width: 600px) {
  .app-related .ctr > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
  }
}

@media only screen and (min-width: 1360px) {
  .app-related .ctr > ul {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
