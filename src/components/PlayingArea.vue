<template>
  <div id="playingArea" :class="{ gameRunning: playing }">
    <div class="playingSpacer">
      <TileBlock
        :key="tile"
        :highlight="highlightIndex === tile"
        v-for="tile in tiles" />
    </div>

    <TilesPercentage />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import delay from '../utils/delay';

  import TileBlock from "@components/TileBlock";
  import TilesPercentage from "@components/TilesPercentage";

  export default {
    name: "PlayingArea",

    data () {
      return {
        highlightIndex: null
      }
    },

    methods: {
      ...mapActions([
        'populateComputedSequence'
      ]),

      async computedAnimation (index = 0) {
        const { computedSequence, computedAnimation } = this;

        const currentTile = computedSequence[index];

        this.highlightIndex = currentTile.tile;

        await delay(600).then(() => {
          this.highlightIndex = null;

          delay(250).then(() => {
            computedSequence[index + 1] && computedAnimation(index + 1);
          });
        });
      }
    },

    computed: {
      ...mapState([
        'tiles',
        'level',
        'playing',
        'computedSequence'
      ])
    },

    components: {
      TileBlock,
      TilesPercentage
    },

    watch: {
      level (val) {
        const { populateComputedSequence } = this;

        val > 0
          ? populateComputedSequence()
          : null;
      },

      computedSequence (computed) {
        if (computed.length > 0) {
          delay(1000).then(() => this.computedAnimation() );
        }
      }
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