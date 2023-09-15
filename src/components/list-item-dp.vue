<template>
  <div class="list-item-dp-container" v-bind:class="rootClassName">
    <h5 class="list-item-dp-text HeadingThree">{{ new_prop }}</h5>
    <span class="list-item-dp-text1">{{ description }}</span>
    <span>{{ description1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItemDP',
  props: {
    description1: {
      type: String,
      default:
        'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
    },
    new_prop: {
      type: String,
      default: '1. Listen to Social Conversations',
    },
    rootClassName: String,
    description: {
      type: String,
      default:
        'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
    },
  },
}
</script>

<style scoped>
.list-item-dp-container {
  flex: 0 0 auto;
  display: flex;
  padding: 1rem;
  max-width: 500px;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-dp-text {
  color: #6893e2;
  margin-bottom: var(--dl-space-space-halfunit);
}
.list-item-dp-text1 {
  margin-bottom: var(--dl-space-space-halfunit);
}

</style>
