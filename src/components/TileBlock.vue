<template>
  <div class="playingBlock" @click="handleTileClick" :class="{ showing: highlight }">
    <!-- {{ index }} -->
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'TileBlock',

    props: {
      highlight: {
        type: Boolean,
        required: true
      }
    },

    computed: {
      ...mapState([
        'canUserPlay'
      ])
    },

    methods: {
      handleTileClick () {
      }
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