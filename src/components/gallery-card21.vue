<template>
  <div class="gallery-card21-gallery-card" v-bind:class="rootClassName">
    <div class="gallery-card21-container">
      <div class="gallery-card21-container1">
        <h2 class="gallery-card21-text">{{ title }}</h2>
        <span class="gallery-card21-text1">{{ description }}</span>
      </div>
    </div>
    <img :alt="image_alt" :src="image_src" class="gallery-card21-image" />
  </div>
</template>

<script>
export default {
  name: 'GalleryCard21',
  props: {
    rootClassName: String,
    title: {
      type: String,
      default: 'Project Title',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  },
}
</script>

<style scoped>
.gallery-card21-gallery-card {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card21-container {
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  z-index: 1;
  transition: 0.3s;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  flex-direction: column;
  justify-content: center;
  background-color: #00000096;
}
.gallery-card21-container:hover {
  opacity: 1;
}
.gallery-card21-container1 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 32px;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius75);
  flex-direction: column;
  justify-content: center;
}
.gallery-card21-text {
  color: var(--dl-color-gray-white);
  font-style: normal;
  text-align: center;
  font-weight: 500;
  margin-bottom: 24px;
}
.gallery-card21-text1 {
  color: var(--dl-color-gray-white);
  text-align: center;
  margin-bottom: 24px;
}
.gallery-card21-image {
  top: 0px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius75);
}
.gallery-card21-root-class-name {
  flex: 1;
}


.gallery-card21-root-class-name4 {
  flex: 1;
  height: 100%;
}

@media(max-width: 767px) {
  .gallery-card21-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-card21-container {
    max-width: auto;
  }
  .gallery-card21-image {
    top: 0px;
    left: 0px;
    right: auto;
    width: 100%;
    bottom: auto;
    height: 100%;
  }
  .gallery-card21-root-class-name2 {
    flex: 1;
  }
  .gallery-card21-root-class-name3 {
    flex: 1;
  }
  .gallery-card21-root-class-name4 {
    flex: 1;
  }
}
</style>
