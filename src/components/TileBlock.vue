<template>
  <div class="playingBlock" @click="toggle" :class="{ showing: highlight }">
    <!-- {{ index }} -->
  </div>
</template>

<script>
  export default {
    name: 'TileBlock',

    props: {
      highlight: {
        type: Boolean,
        required: true
      }
    },

    data () {
      return {
        showing: false
      }
    },

    methods: {
      toggle () {
        this.showing = true;

        setTimeout(() => {
          this.showing = false;
        }, 1000);
      }
    },

    watch: {
    }
  }
</script>

<style lang="scss">
	.playingBlock {
    cursor: pointer;
    position: relative;
    transition: .4s ease-in-out;
    background-color: #b15166;
    -webkit-tap-highlight-color: transparent;

    &.showing {
      background-color: var(--background-box-color);
    }
  }
</style>