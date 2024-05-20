<template>
  <!-- ui heat -->
  <div id="socials">
    <ul>
      <li>
        <a href="/" target="_blank">
          <img src="~/assets/icons/twitter.svg" alt="Follow Us" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank">
          <img src="~/assets/icons/facebook.svg" alt="Follow Us" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank">
          <img src="~/assets/icons/youtube.svg" alt="Follow Us" />
        </a>
      </li>
    </ul>
  </div>
  <!-- ui heat end -->
</template>
<style scoped>
#socials {
  display: block;
  height: auto;
  bottom: 12px;
  left: 9px;
  position: fixed;
  z-index: 10000;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100px;
}

#socials ul {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#socials li {
  display: inline-block;
  margin: 0 0.5rem 0 0;
  opacity: 0.5;
  transition: opacity ease 0.3s;
}

#socials li:hover {
  opacity: 1;
}

#socials li:last-child {
  margin: 0;
}

#socials li img {
  height: 20px;
  width: auto;
}

@media only screen and (min-width: 1200px) {
  #socials {
    left: 2rem;
    bottom: 2rem;
  }
}

@media only screen and (min-width: 1920px) {
  #socials {
    left: 4rem;
  }
}
</style>
