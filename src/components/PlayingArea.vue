<template>
  <div id="playingArea" :class="{ gameRunning: playing }">
    <div class="playingSpacer">
      <TileBlock
        :key="tile"
        :tile="tile"
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
        'incrementLevel',
        'clearUserSequence',
        'setUserCanPlayProperty',
        'populateComputedSequence'
      ]),

      async computedAnimation (index = 0, sequence) {
        this.highlightIndex = sequence[index].tile;

        await delay(600).then(() => {
          delay(250).then(() => {
            const nextIndex = index + 1;

            if (sequence[nextIndex]) {
              return this.computedAnimation(nextIndex, sequence);
            }

            this.setUserCanPlayProperty(!0);
          });
        });
      }
    },

    computed: {
      ...mapState([
        'tiles',
        'level',
        'playing',
        'userSequence',
        'computedSequence'
      ]),

      entriesAreTheSameLength () {
        const { userSequence, computedSequence } = this;

        return userSequence.length === computedSequence.length && userSequence.length > 0;
      },

      entriesAreTheSame () {
        const { userSequence, computedSequence } = this;

        return userSequence.join('') === computedSequence.map(computed => computed.tile).join('');
      }
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
          delay(1000).then(() => this.computedAnimation(0, computed) );
        }
      },

      highlightIndex (value) {
        if (value) {
          delay(600).then(() => this.highlightIndex = null);
        }
      },

      async entriesAreTheSameLength (length) {
        const { entriesAreTheSame, clearUserSequence } = this;

        if (length > 0 && entriesAreTheSame) {
          delay(2000)
            .then(clearUserSequence)
            .then(this.incrementLevel);
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