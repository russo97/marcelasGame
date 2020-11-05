<template>
  <div class="playingBlock" :class="{ showing }" @click="showing = !showing">
    <!-- {{ index }} -->
  </div>
</template>

<script>
export default {
  name: 'TileBlock',

  props: ['index', 'active'],

  data () {
    return {
      showing: false
    }
  },

  watch: {
    showing (curr) {
      if (curr) {
        setTimeout(() => this.showing = false, 500);
      }
    },

    active (curr) {
      if (curr) {
        this.showing = curr;
        
        this.$emit('input', 0);
      }
    }
  }
}
</script>

<style lang="scss">
	@import '../../../public/assets/scss/global.scss';

	.playingBlock {
  cursor: pointer;
  position: relative;
  background: #b15166;
  -webkit-tap-highlight-color: transparent;

  &.showing {
    z-index: 10;

    &::before {
      top: -50%;
      left: -50%;
      opacity: .3;
      width: 200%;
      height: 200%;
      animation: 500ms colorchange forwards;
    }

    &::after {
      top: 50%;
      left: 50%;
      opacity: .3;
      width: 0%;
      height: 0%;
      animation: 800ms colorchange forwards;
    }
  }

  &::before,
  &::after {
    content: "";
    opacity: 0;
    position: absolute;
    pointer-events: none;
    background-color: #fff;
    transition: all 300ms ease;
    border-radius: 50%;
  }

  &::before {
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
  }

  &::after {
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }
  }

  @include keyframes (colorchange) {
    100% { opacity: 0; }
  }
</style>