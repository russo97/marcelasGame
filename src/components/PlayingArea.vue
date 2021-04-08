<template>
  <div id="playingArea" :class="{ gameRunning: playing }">
    <div class="playingSpacer">
      <TileBlock />
    </div>

    <TilesPercentage />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import TileBlock from "@components/TileBlock";
  import TilesPercentage from "@components/TilesPercentage";

  export default {
    name: "PlayingArea",

    computed: {
      ...mapState([
        'playing'
      ])
    },

    components: {
      TileBlock,
      TilesPercentage
    }
  }
</script>

<style lang="scss">
  #playingArea {
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %flex-center;
    transition: all 400ms ease;
    transform: rotateY(180deg);
    backface-visibility: hidden;

    &.gameRunning {
      transform: rotateY(360deg);
    }

    .playingSpacer {
      display: grid;
      grid-gap: .1875rem;
      width: calc(100% - .375rem);
      height: calc(100% - .375rem);
      grid-template: repeat(5, 1fr) / repeat(5, 1fr);
    }
  }
</style>