<template>
  <div id="app">
    <div id="screen" :class="runningClass">
      <GridBlock
        :key="index"
        @play="playGame(index)"
        :area="grid_areas[index]"
        v-for="(curr_word, index) in grid_areas" />
    </div>

    <div
      id="playingArea"
      :class="runningClass">
      <div class="playingSpacer">
        <TileBlock
          :key="div"
          :index="div"
          v-for="div in tiles" />
      </div>

      <TilesPercentage :current="0" :total="tilesCount" />
    </div>

    <HowToPlay :playing="gameRunning" />
  </div>
</template>

<script>
import GridBlock from './components/GridBlock/GridBlock';
import TileBlock from './components/TileBlock/TileBlock';
import HowToPlay from './components/HowToPlay/HowToPlay';
import TilesPercentage from './components/TilesPercentage/TilesPercentage';

export default {
  name: 'App',

  components: {
    GridBlock,
    TileBlock,
    HowToPlay,
    TilesPercentage
  },

  data() {
    return {
      tiles: [],
      tilesCount: 25,
      gameRunning: false,
      grid_areas: ['a', 'b', 'c', 'd', 'e']
    };
  },

  methods: {
    playGame (index) {
      const { grid_areas } = this;

      this.gameRunning = grid_areas[index] === 'e';
    },

    populateTiles () {
      const { tilesCount } = this;

      this.tiles = Array.from({ length: tilesCount }, (_, i) => i);
    }
  },

  computed: {
    runningClass () {
      const { gameRunning } = this;

      return { gameRunning };
    }
  },

  mounted() {
    this.populateTiles();
  },

  watch: {}
}
</script>

<style scoped lang="scss">
  @import '../public/assets/scss/global.scss';

  #app {
    width: 90%;
    height: 400px;
    max-width: 400px;
    position: relative;
    -webkit-perspective: 800px;
            perspective: 800px;
    box-shadow: 0px -2px 5px 2px #b15166;

    #screen {
      width: 100%;
      height: 100%;
      padding: 4px;
      display: grid;
      grid-gap: 4px;
      grid-template-areas: 
        'A A A A B B'
        'A A A A B B'
        'D D E E B B'
        'D D E E B B'
        'D D C C C C'
        'D D C C C C';
      transition: all 400ms ease;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      grid-auto-rows: minmax(0px, 100%);
      grid-auto-columns: minmax(0px, 100%);
      background-color: var(--background-box-color2);

      &.gameRunning {
        transform: rotateY(180deg);
      }
    }

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
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        display: grid;
        grid-gap: 3px;
        grid-template: repeat(5, 1fr) / repeat(5, 1fr);
      }
    }
  }
</style>
