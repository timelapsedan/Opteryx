<template>
  <!-- This block is a grid with rows containing content on one side and an image on the other with alternating rows -->
  <div class="block_g">
    <div v-for="(item, index) in block_type_g_items" :key="index" class="block_g-cell">
      <div
        class="block_g-thumb"
        :class="item.color"
        :style="{
          background: 'url(' + item.image + ') no-repeat center center',
          'background-size': 'cover',
          'background-attachment': parallax ? 'fixed' : 'scroll'  // Conditional background attachment
        }"
      />
      <div class="block_g-excerpt">
        <h3 class="h-one-d">{{ item.title }}</h3>
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
    block_type_g_items: {
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
  :block_type_g_items="blockTypeGData"
/>

data () {
    return {
      blockTypeGData: [
        {
          title: 'Fly-overs and Fly-throughs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat lacus, ultrices eget eros sed, gravida pharetra lacus. Duis tristique dictum lectus ac efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam purus a metus sollicitudin tempor.',
          image: '/images/temp2.jpg',
          color: 'gradient'
        }
      ]
    }
  }
*/
</script>
<style scoped>
.block_g {
  width: 100%;
}

.block_g > div {
  display: block;
  text-decoration: none;
  margin: 0 0 6rem 0;
  width: 100%;
}

.block_g-thumb {
  position: relative;
  grid-area: block_g-thumb;
  height: 260px;
}

.block_g-thumb::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}

.block_g-excerpt {
  grid-area: block_g-excerpt;
  padding: 1.5rem;
}

.block_g-excerpt p:last-child {
  margin: 0;
}

.block_g > div:nth-child(even) .block_g-thumb {
  grid-area: block_g-excerpt;
}

.block_g > div:nth-child(even) .block_g-excerpt {
  grid-area: block_g-thumb;
}

.block_g > div:last-child {
  margin: 0;
}

.block_g-thumb.gradient::after {
  background: rgb(19, 35, 53);
  background: -moz-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  background: linear-gradient(90deg, rgba(19, 35, 53, 0.84) 0%, rgba(164, 27, 53, 0.8) 100%);
  filter: progid:dximagetransform.microsoft.gradient(startColorstr="#132335", endColorstr="#a41b35", GradientType=1);
}

.block_g-thumb.red::after {
  background: rgba(164, 27, 53, 0.8);
}

.block_g-thumb.blue::after {
  background: rgba(19, 35, 53, 0.8);
}

.block_g .h-two {
  display: block;
  text-transform: uppercase;
}

@media only screen and (min-width: 1024px) {
  .block_g {
    margin: 0 0 9rem 0;
  }

  .block_g > div {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-rows: 1fr;
    grid-template-areas: "block_g-thumb block_g-excerpt";
    margin: 0 0 9rem 0;
  }

  .block_g > div:nth-child(even) {
    grid-template-columns: 0.6fr 0.4fr;
  }

  .block_g-excerpt {
    padding: 3rem 6rem;
  }

  .block_g-thumb {
    height: auto;
  }
}
</style>
