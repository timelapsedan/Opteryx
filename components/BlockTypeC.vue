<template>
  <!-- This block is a full width centered text block made for page intros -->
  <div class="block_c" :class="{ 'ctr': center }">
    <div>
      <h1 class="h-one" v-if="titleLineOne">
        <span>{{ titleLineOne }}</span>
        <span v-if="titleLineTwo">{{ titleLineTwo }}</span>
      </h1>
      <h2 class="h-two" v-if="subtitle">{{ subtitle }}</h2>
      <p v-if="excerpt">{{ excerpt }}</p>
      <p v-if="excerptTwo">{{ excerptTwo }}</p>
      <p v-if="excerptThree">{{ excerptThree }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titleLineOne: {
      type: String,
      required: true
    },
    titleLineTwo: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    excerptTwo: {
      type: String,
      required: true
    },
    excerptThree: {
      type: String,
      required: true
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
/*
Example usage

<BlockTypeC
  titleLineOne="Opteryx"
  titleLineTwo="Drone Services"
  subtitle="Cutting-Edge UAV Specialists"
  excerpt="Lorem ipsum dolor sit amet."
  excerptTwo="Lorem ipsum dolor sit amet."
  excerptThree="Lorem ipsum dolor sit amet."
/>

*/
</script>
<style scoped>
.block_c {
  text-align: center;
  padding: 0 0 6rem 0;
}

.ctr {
  text-align: center;
}
</style>
