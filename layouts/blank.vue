<template>
  <div
    id="app"
    data-nav-status="closed"
    ref="container"
  >
    <Header />
    <NavMobile />
    <!-- content -->
    <div id="app-content">
      <main id="app-main">
        <div id="app-nuxt">
          <canvas id="app-canvas" />
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import * as Three from 'three'
export default {
  data () {
    return {
      preloaderPercent: 0,
      // scene data
      app: null,
      camera: null,
      ambientLight: null,
      directionalLight: null,
      container: null,
      droneCanvas: null,
      renderer: null,
      shouldFadeOut: false,
      initialOpacity: 1,
      // event data
      mouseX: 0,
      mouseY: 0,
      windowCenter: null,
      width: null,
      height: null,
      clockStep: null
    }
  },
  mounted () {
    this.initDom()
    this.initScene()
    this.initRender()
    this.initClock()
    document.addEventListener('mouseenter', this.handleMouseEnter)
    document.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('mousemove', this.updateMousePosition)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.clockStep)
    this.clockStep = undefined
    document.removeEventListener('mouseenter', this.handleMouseEnter)
    document.removeEventListener('mouseleave', this.handleMouseLeave)
  },
  methods: {
    /* INIT DOM */
    initDom () {
      this.container = document.querySelector('#app-canvas')
    },

    /* INIT SCENE */
    initScene () {
      /* Set Sizes */
      this.width = this.container.clientWidth
      this.height = this.container.clientHeight

      /* Renderer */
      this.renderer = new Three.WebGLRenderer({
        canvas: this.container,
        antialias: true,
        alpha: true
      })
      this.renderer.setSize(this.width, this.height, false)

      /* Scene */
      this.scene = new Three.Scene()
      this.scene.rotation.set(0, 0, 0)
      this.scene.fog = new Three.FogExp2('#dedede', 0.14)

      // lights
      this.ambientLight = new Three.AmbientLight('#ccc')
      this.scene.add(this.ambientLight)

      this.directionalLight = new Three.DirectionalLight('#fff', 0.50)
      this.directionalLight.position.set(-0.8, 2, 10)
      this.scene.add(this.directionalLight)

      /* Camera */
      this.camera = new Three.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
      this.camera.position.set(-1.9, 0, 1)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      /* Grid */
      this.gridOne = new Three.GridHelper(64, 240, '#ccc', '#ccc')
      this.gridOne.position.y = -1
      this.gridOne.rotation.x = 0 * Math.PI / 180
      this.scene.add(this.gridOne)

      // Create a plane geometry
      const planeGeometry = new Three.PlaneGeometry(64, 240)
      const planeMaterial = new Three.MeshBasicMaterial({ color: '#fff', side: Three.DoubleSide })
      // planeMaterial.receiveShadow = true

      const planeMesh = new Three.Mesh(planeGeometry, planeMaterial)
      // planeMesh.receiveShadow = true
      planeMesh.rotation.x = -Math.PI / 2
      planeMesh.position.y = -1
      this.scene.add(planeMesh)
    },

    /* MOUSE ENTER */
    handleMouseEnter () {
      this.initClock()
    },

    /* MOUSE LEAVE */
    handleMouseLeave () {
      cancelAnimationFrame(this.clockStep)
    },

    /* MOUSE MOVE */
    updateMousePosition (event) {
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    },

    /* DAMPING */
    damp (value, target, dampingFactor) {
      return value + (target - value) * dampingFactor
    },

    /* RENDER SCENE CAMERA */
    initRender () {
      this.renderer.render(this.scene, this.camera)
    },

    /* INIT CLOCK */
    initClock () {
      // Cancel the previous animation frame request, if any
      cancelAnimationFrame(this.clockStep)

      // Create a new Three.js clock object
      this.clock = new Three.Clock()
      this.tick = () => {
        this.elapsedTime = this.clock.getElapsedTime()

        // Update camera position to react to the mouse
        this.camera.position.x = this.mouseX / 8000
        this.camera.position.y = this.mouseY / 6000

        this.renderer.render(this.scene, this.camera)
        this.clockStep = window.requestAnimationFrame(this.tick)
      }
      this.tick()
    }
  }
}
</script>
