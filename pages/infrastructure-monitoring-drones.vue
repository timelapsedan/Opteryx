<template>
  <div id="app-html">
    <span class="headspace"></span>
    <!-- hero -->
    <BlockTypeD
      :show="true"
      :showButton="true"
      videoSrc="/video/construction-comp-2.mp4"
      color="blue"
      title="Infrastructure"
      subtitle="Monitoring Drones"
      description="Explore aerial photography and video solutions for your projects with our cutting-edge technology and expert piloting."
    />

    <!-- grid -->
    <div class="app-post">
      <div class="ctr">
        <div>
          <BlockTypeG
            :block_type_g_items="flyThroughData"
            :parallax="true"
          />
        </div>
      </div>
    </div>

    <!-- banner -->
    <BlockTypeE
      :show="true"
      imageSrc="/images/temp11.jpg"
      altData="Background Image Alt Text"
      color="blue"
      title="Advanced Drone Imagery"
      subtitle="Fully Licensed Drone Operators"
      description="Explore aerial photography and video solutions for your projects with our cutting-edge technology and expert piloting."
    />

    <!-- content + sidebar -->
    <div class="app-post">
      <div class="ctr">
        <div class="app-post-columns">
          <div>
            <!-- grid -->
            <BlockTypeB
              :block_type_b_items="flyOverData"
              :parallax="false"
            />
          </div>
          <!-- sidebar -->
          <div class="app-post-sidebar">
            <ServicesSideBar />
          </div>
        </div>
      </div>
    </div>
    <Contact />

  </div>
</template>
<script>
export default {
  name: 'Test',
  layout: 'blank',
  head () {
    return {
      title: 'Opteryx Drone Systems | Infrastructure Monitoring Drones',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Opteryx Drone Systems'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: ''
        }
      ]
    }
  },
  data () {
    return {
      flyOverData: [
        {
          title: 'Drone Services',
          subtitle: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp11.jpg',
          color: 'blue'
        },
        {
          title: 'Industry Sectors',
          subtitle: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp13.jpg',
          color: 'blue'
        },
        {
          title: 'Other Services',
          subtitle: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp14.jpg',
          color: 'blue'
        }
      ],
      flyThroughData: [
        {
          title: 'consectetur adipiscing',
          subtitle: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp11.jpg',
          color: 'blue'
        },
        {
          title: 'consectetur adipiscing',
          subtitle: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp12.jpg',
          color: 'blue'
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('closeNav')
  }
}
</script>
<style scoped>
.app-post h2 {
  margin: 0 0 6rem 0;
}

.app-post-columns {
  width: 100%;
}

@media only screen and (min-width: 1240px) {
  .app-post-columns {
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    grid-template-rows: auto;
    gap: 3rem;
  }
}
</style>
