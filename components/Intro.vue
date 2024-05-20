<template>
  <div class="app-intro-grid">
    <div class="app-intro-content">
      <div>
        <h1 class="h-one-c">
          <span>
            Compliant
          </span>
          <span>
            CAA registered
          </span>
        </h1>
        <h2 class="h-two">Fully Licensed Drone Operators</h2>
        <p>Whether you're in construction,  property/real estate, agriculture, or film and TV, our drone systems and <strong>highly qualified pilots</strong> deliver the highest quality results that truly set your projects apart.</p>
        <p>Industry specialists fully compliant, <strong>CAA registered</strong> - with a dedicated post-production department and innovative software to support all capture.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.app-intro {
  min-height: 100vh;
}

.app-intro-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  padding: 9rem 0;
}

.app-intro-content {
  display: flex;
  flex: 1;
  text-align: center;
}

.app-intro-content a {
  margin: 0 auto;
}

@media only screen and (min-width: 600px) {
  .app-intro-content {
    padding-right: 6rem;
    text-align: left;
  }

  .app-intro-content a {
    margin: 0;
  }
}

@media only screen and (min-width: 1360px) {
  .app-intro-content {
    padding-left: 3rem;
    padding-right: 33%;
  }
}

@media only screen and (min-width: 1760px) {
  .app-intro-content {
    padding-right: 50%;
  }
}
</style>
