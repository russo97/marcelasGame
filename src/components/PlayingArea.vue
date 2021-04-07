<template>
  <div id="playingArea">
    <div class="playingSpacer">
      <TileBlock />
    </div>

    <TilesPercentage />
  </div>
</template>

<script>
  import TileBlock from "@components/TileBlock";
  import TilesPercentage from "@components/TilesPercentage";

  export default {
    name: "PlayingArea",

    components: {
      TileBlock,
      TilesPercentage
    }
  }
</script>

<style lang="scss">
  #playingArea {
    top: 0px;
    left: 0px;
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
      grid-gap: 3px;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      grid-template: repeat(5, 1fr) / repeat(5, 1fr);
    }
  }
</style>