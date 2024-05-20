<template>
  <div
    id="app"
    :class="$route.name"
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
          <DroneViewer />
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import * as Three from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { mapState } from 'vuex'
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
      clockStep: null,
      // model manager
      modelManager: null,
      constructionModelGroup: null,
      constructionModel: null,
      dracoLoader: null,
      modelLoading: true,
      modelLoadingText: null,
      constructionModelLoader: null,
      modelLoaded: false,
      // drone camera
      droneModel: null,
      droneCamera: null,
      droneRenderer: null,
      droneCanvasWidth: null,
      droneCanvasHeight: null,
      droneX: 0,
      droneY: 0
    }
  },
  computed: {
    ...mapState(['parts'])
  },
  watch: {
    shouldFadeOut (value) {
      if (this.constructionModelGroup) {
        this.constructionModelGroup.visible = !value
      }
      if (this.droneModelGroup) {
        this.droneModelGroup.visible = !value
      }
    }
  },
  mounted () {
    this.initModelManager()
    this.initDom()
    this.initScene()
    this.constructionModelsInit()
    this.initRender()
    this.droneCamInit()
    this.renderDroneCamera()
    this.initClock()
    this.setupRouteChangeListener()
    document.addEventListener('mouseenter', this.handleMouseEnter)
    document.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('mousemove', this.updateMousePosition)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.clockStep)
    this.clockStep = undefined
    document.removeEventListener('mouseenter', this.handleMouseEnter)
    document.removeEventListener('mouseleave', this.handleMouseLeave)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    /* init model manager */
    initModelManager () {
      this.app = document.getElementById('app')
      this.modelManager = new Three.LoadingManager()
      this.modelManager.onStart = () => {
        this.modelLoading = true
        this.modelLoadingText = 'Loading Asset Library'
      }
      this.modelManager.onProgress = (url, loaded, total) => {
        this.preloaderPercent = Math.round((loaded / total) * 100)
        this.modelLoadingText = `Assets Loading ${this.preloaderPercent}%`
      }
      this.modelManager.onLoad = () => {
        this.modelLoadingText = 'OPTERYX v.1.0.3 - [Initializing]'
        setTimeout(() => {
          this.modelLoading = false
          this.app.setAttribute('data-preload-status', 'preloaded')
        }, 2000)
      }
      this.modelManager.onError = () => {
        this.modelLoadingText = ' error'
      }
    },
    /* INIT DOM */
    initDom () {
      this.container = document.querySelector('#app-canvas')
      this.droneCanvas = document.querySelector('#drone-canvas')
    },

    /* INIT SCENE */
    initScene () {
      /* Set Sizes */
      this.width = this.container.clientWidth
      this.height = this.container.clientHeight
      this.droneCanvasWidth = this.droneCanvas.clientWidth
      this.droneCanvasHeight = this.droneCanvas.clientHeight

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

    /* INIT MODELS */
    constructionModelsInit () {
      this.constructionModelGroup = new Three.Group()
      this.constructionModelGroup.visible = !this.shouldFadeOut

      // LOAD MODELS
      this.constructionModelLoader = new GLTFLoader(this.modelManager)
      this.dracoLoader = new DRACOLoader()
      this.dracoLoader.setDecoderPath('draco/gltf/') // Set the path to the DRACO decoder files
      this.constructionModelLoader.setDRACOLoader(this.dracoLoader)
      this.constructionModelLoader.load('/models/construction-glb-master.glb', (gltf) => {
        this.constructionModel = gltf.scene

        // Set matte white material for construction model
        const constructionMaterial = new Three.MeshStandardMaterial({
          color: '#bababa',
          roughness: 1,
          metalness: 0,
          transparent: true,
          opacity: 1
        })

        // Apply material to drone model
        this.constructionModel.traverse((child) => {
          if (child instanceof Three.Mesh) {
            child.material = constructionMaterial
          }
        })

        // position and scale the model
        this.constructionModel.position.x = -1
        this.constructionModel.position.y = 0.2
        this.constructionModel.position.z = 2
        this.constructionModel.scale.set(0.1, 0.1, 0.1)

        // center obj pivot point
        const constructionModelBounds = new Three.Box3().setFromObject(this.constructionModel)
        constructionModelBounds.getCenter(this.constructionModel.position).negate()

        // add to group
        this.constructionModelGroup.add(this.constructionModel)
      })

      // Add constructionModelGroup to the scene
      this.scene.add(this.constructionModelGroup)
      // this.modelLoaded = true (do this on the last model in the scene)
    },

    /* INIT DRONE CAM */
    droneCamInit () {
      this.droneModelGroup = new Three.Group()

      // load drone model
      this.droneLoader = new GLTFLoader(this.modelManager)
      this.droneLoader.setDRACOLoader(this.dracoLoader)
      this.droneLoader.load('/models/opteryx-drone-master-compressed-v2.glb', (gltf) => {
        this.droneModel = gltf.scene

        // Set material for drone model
        const droneMaterial = new Three.MeshStandardMaterial({
          color: '#fff',
          roughness: 0,
          metalness: 0.3,
          transparent: true,
          opacity: 1
        })

        // Set material for drone rotors
        const rotorMaterial = new Three.MeshStandardMaterial({
          color: '#999',
          roughness: 0.5,
          metalness: 0.3,
          transparent: true,
          opacity: 1
        })

        // Apply material to drone model
        this.droneModel.traverse((child) => {
          if (child instanceof Three.Mesh) {
            child.material = droneMaterial
          }
          if (child instanceof Three.Mesh && child.name.startsWith('prop')) {
            child.material = rotorMaterial
          }
        })

        // Set initial position and rotation for drone model
        this.droneModel.position.set(this.droneX, this.droneY, 1)
        this.droneModel.rotation.set(0, 180 * Math.PI / 180, 0) // Adjust rotation as needed
        this.droneModel.scale.set(0.05, 0.05, 0.05) // Adjust scale as needed

        // center obj pivot point
        const droneModelBounds = new Three.Box3().setFromObject(this.droneModel)
        droneModelBounds.getCenter(this.droneModel.position).negate()

        // Add drone model to the group
        this.droneModelGroup.add(this.droneModel)
        this.modelLoaded = true
      })
      // Create drone camera
      this.droneCamera = new Three.PerspectiveCamera(65, this.droneCanvasWidth / this.droneCanvasHeight, 0.1, 1000)
      this.droneCamera.position.set(this.droneX, this.droneY - 0.125, -1.1) // Adjust position as needed
      this.droneModelGroup.add(this.droneCamera)

      // Add droneModelGroup to the scene
      this.scene.add(this.droneModelGroup)
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

    /* RENDER DRONE CAMERA */
    renderDroneCamera () {
      this.droneRenderer = new Three.WebGLRenderer({
        canvas: this.droneCanvas,
        antialias: true,
        alpha: true
      })
      this.droneRenderer.setSize(this.droneCanvasWidth, this.droneCanvasHeight, false)
      this.droneRenderer.render(this.scene, this.droneCamera)
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

        // Update droneModelGroup position with damping
        this.droneModelGroup.position.x = this.damp(this.droneModelGroup.position.x, this.mouseX / 2000, 0.04)
        this.droneModelGroup.position.y = this.damp(this.droneModelGroup.position.y, this.mouseY / 2000 - 0.66, 0.04)

        // Animate propellers
        if (this.droneModel) {
          this.droneModel.rotation.y = this.mouseX / 1000 * Math.PI / 180
          this.droneModel.traverse((child) => {
            if (child instanceof Three.Mesh && child.name.startsWith('prop')) {
              child.rotation.z += 0.1
            }
          })
        }
        this.renderer.render(this.scene, this.camera)
        this.droneRenderer.render(this.scene, this.droneCamera)
        this.clockStep = window.requestAnimationFrame(this.tick)
      }
      this.tick()
    },
    handleScroll () {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      const startScroll = windowHeight
      const endScroll = 2 * windowHeight
      const opacity = 1 - ((scrollPosition - startScroll) / (endScroll - startScroll))
      const clampedOpacity = Math.max(0, Math.min(1, opacity))
      this.constructionModel.traverse((child) => {
        if (child instanceof Three.Mesh) {
          child.material.opacity = clampedOpacity
        }
      })
      this.droneModel.traverse((child) => {
        if (child instanceof Three.Mesh) {
          child.material.opacity = clampedOpacity
        }
      })
    },
    setupRouteChangeListener () {
      this.$router.afterEach((to, from) => {
        if (to.path === '/') {
          this.shouldFadeOut = false // Update shouldFadeOut to false when navigating to the homepage
          this.fadeModels(false)
        } else {
          this.shouldFadeOut = true // Update shouldFadeOut to true when navigating to other pages
          this.fadeModels(true)
        }
      })
    },
    fadeModels (fadeOut) {
      const duration = 1000
      const startTime = performance.now()
      const startOpacity = this.shouldFadeOut ? 1 : 0 // Set start opacity based on shouldFadeOut
      const targetOpacity = fadeOut ? 0 : 1 // Set target opacity based on fadeOut parameter

      const updateOpacity = () => {
        const currentTime = performance.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(1, elapsed / duration)
        const opacity = startOpacity + (targetOpacity - startOpacity) * progress

        this.constructionModel.traverse((child) => {
          if (child instanceof Three.Mesh) {
            child.material.opacity = opacity
          }
        })
        this.droneModel.traverse((child) => {
          if (child instanceof Three.Mesh) {
            child.material.opacity = opacity
          }
        })

        if (progress < 1) {
          requestAnimationFrame(updateOpacity)
        }
      }

      updateOpacity()
    }
  }
}
</script>
