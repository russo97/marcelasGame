<template>
  <div id="screen">
    <GridBlock
      :key="curr_word"
      @play="playGame(index)"
      :area="grid_areas[index]"
      v-for="(curr_word, index) in grid_areas" />
  </div>
</template>

<script>
  import GridBlock from "@components/GridBlock";

  export default {
    name: "Splash",

    data () {
      return {
        grid_areas: [
          'a', 'b', 'c', 'd', 'e'
        ]
      }
    },

    components: {
      GridBlock
    }
  }
</script>

<style lang="scss">
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
</style>