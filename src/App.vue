<template>
  <div id="app">
    <div id="screen" :class="{ 'gameRunning': gameRunning }">
      <!-- <div
        :key="index"
        class="screen-option"
        :class="grid_areas[index]"
        @click="handleGameToggle(grid_areas[index])"
        v-for="(curr_word, index) in containers_words">
        <span v-if="curr_word">
          {{curr_word}}
        </span>
      </div> -->
      <GridBlock
        :key="curr_word"
        :label="curr_word"
        :class="grid_areas[index]"
        v-for="(curr_word, index) in containers_words" />
    </div>

    <div
      id="canvasContainer"
      :class="{ 'gameRunning': gameRunning }">
      <canvas  id="canvasScreen" ref="screen"></canvas>
    </div>
  </div>
</template>

<script>
import GridBlock from './components/GridBlock/GridBlock';

export default {
  name: 'App',

  components: {
    GridBlock
  },

  data() {
    return {
      context: null,
      gameRunning: false,
      grid_areas: ['a', 'b', 'c', 'd', 'e'],
      containers_words: ['Marcela', '', 'Acioli', '', 'play']
    };
  },

  methods: {
    handleGameToggle (area) {
      if (area !== 'e') return;

      this.gameRunning = !this.gameRunning;
    }
  },

  computed: {},

  mounted() {
    this.context = this.$refs.screen.getContext('2d');
  },

  watch: {}
}
</script>

<style scoped>
  #app {
    width: 90%;
    height: 400px;
    max-width: 400px;
    position: relative;
    -webkit-perspective: 800px;
            perspective: 800px;
    box-shadow: 0px -2px 5px 2px #b15166;
  }

  #app #screen {
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
    width: -moz-available;
    width: -webkit-fill-available;
    transform-style: preserve-3d;
    grid-auto-columns: minmax(0px, 100%);
    transition: all 400ms ease;
    backface-visibility: hidden;
    background-color: var(--background-box-color2);
  }

  #app #screen.gameRunning {
    transform: rotateY(180deg);
  }




  #canvasContainer {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    transition: all 400ms ease;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }

  #canvasContainer canvas {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #canvasContainer.gameRunning {
    transform: rotateY(360deg);
  }
</style>
