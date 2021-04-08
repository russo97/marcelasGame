<template>
  <div id="screen" class="screen">
    <GridBlock
      :key="curr_word"
      @play="playGame(index)"
      :area="grid_areas[index]"
      v-for="(curr_word, index) in grid_areas" />
    
    <div class="screen__heart heart1" :style="heartIcon"></div>
    <div class="screen__heart heart2" :style="heartIcon"></div>
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

    computed: {
      heartIcon () {
        return {
          backgroundImage: `url(${require('@images/heart_icon.png')})`
        }
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
    display: grid;
    padding: .25rem;
    grid-gap: .25rem;
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
    grid-auto-rows: minmax(0rem, 100%);
    grid-auto-columns: minmax(0rem, 100%);
    background-color: var(--background-box-color2);

    &.gameRunning {
      transform: rotateY(180deg);
    }

    .screen__heart {
      z-index: 2;
      content: '';
      width: 3.125rem;
      height: 3.125rem;
      position: absolute;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &.heart1 {
        top: 6.4rem;
        left: 1.3rem;
        transform: rotate(-20deg);
      }

      &.heart2 {
        right: 4.4rem;
        bottom: 6.6rem;
        transform: rotate(20deg);
      }
    }
  }
</style>