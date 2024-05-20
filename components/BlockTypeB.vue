<template>
  <!-- This block is a grid with rows containing content on one side and an image on the other with alternating rows -->
  <div class="block_b">
    <div v-for="(item, index) in block_type_b_items" :key="index" class="block_b-cell">
      <div
        class="block_b-thumb"
        :class="item.color"
        :style="{
          background: 'url(' + item.image + ') no-repeat center center',
          'background-size': 'cover',
          'background-attachment': parallax ? 'fixed' : 'scroll'  // Conditional background attachment
        }"
      ></div>
      <div class="block_b-excerpt">
        <h4 class="h-one-d">{{ item.title }}</h4>
        <span class="h-two">{{ item.subtitle }}</span>
        <p>{{ item.description }}</p>
        <p v-if="item.descriptionTwo">{{ item.descriptionTwo }}</p>
        <p v-if="item.descriptionThree">{{ item.descriptionThree }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    block_type_b_items: {
      type: Array,
      required: true
    },
    parallax: {
      type: Boolean,
      default: false
    }
  }
}
/*
example usage

<BlockTypeB
  :block_type_b_items="blockTypeBData"
/>

data () {
    return {
      blockTypeBData: [
        {
          title: 'Fly-overs and Fly-throughs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp2.jpg'
        },
        {
          title: 'Drone Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp3.jpg'
        },
        {
          title: 'Drone Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp4.jpg'
        }
      ]
    }
  }
*/
</script>
<style scoped>
.block_b {
  margin: 0 0 3rem 0;
  width: 100%;
}

.block_b > div {
  display: block;
  text-decoration: none;
  margin: 0 0 3rem 0;
  width: 100%;
}

.block_b-thumb {
  position: relative;
  grid-area: block_b-thumb;
  height: 260px;
}

.block_b-thumb::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.75;
}

.block_b-excerpt {
  grid-area: block_b-excerpt;
  padding: 1.5rem;
}

.block_b-excerpt p:last-child {
  margin: 0;
}

.block_b > div:nth-child(even) .block_b-thumb {
  grid-area: block_b-excerpt;
}

.block_b > div:nth-child(even) .block_b-excerpt {
  grid-area: block_b-thumb;
}

.block_b > div:last-child,
.block_b p:last-child {
  margin: 0;
}

.block_b-thumb.gradient::after {
  background: rgb(19, 35, 53);
  background: -moz-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  filter: progid:dximagetransform.microsoft.gradient(startColorstr="#132335", endColorstr="#a41b35", GradientType=1);
}

.block_b-thumb.red::after {
  background: rgba(164, 27, 53, 0.8);
}

.block_b-thumb.blue::after {
  background: rgba(19, 35, 53, 0.8);
}

.block_b .h-two {
  display: block;
  line-height: 1.3;
  text-transform: uppercase;
}

.block_b .h-two-c {
  display: block;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
}

@media only screen and (min-width: 1024px) {
  .block_b {
    margin: 0 0 9rem 0;
  }

  .block_b > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "block_b-thumb block_b-excerpt";
    margin: 0 0 9rem 0;
  }

  .block_b-excerpt {
    padding: 3rem;
  }

  .block_b-thumb {
    height: auto;
  }
}
</style>
