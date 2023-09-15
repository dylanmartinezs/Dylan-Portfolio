<template>
  <div class="primary-pink-button-container" v-bind:class="rootClassName">
    <button class="primary-pink-button-button button ButtonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryPinkButton',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.primary-pink-button-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.primary-pink-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: stretch;
  background: linear-gradient( -310deg ,#7928ca,#ff0080);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.primary-pink-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.primary-pink-button-root-class-name {
  align-self: center;
}
@media(max-width: 479px) {
  .primary-pink-button-root-class-name {
    top: 0px;
    left: 0px;
    position: static;
    align-self: center;
  }
}
</style>
