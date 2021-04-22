<template>
  <div id="howtoplay" :class="{ hide: !playing || !visible }">
    <fieldset>
      <legend>Como jogar</legend>

      <p>
        Visualize a sequência que será exibida e refaça na mesma ordem, desafie
        sua mente e chegue o mais longe que puder.
      </p>

      <button @click="startGame">estou pronto &gt;</button>
    </fieldset>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import delay from '../utils/delay';

  export default {
    name: "HowToPlay",

    computed: {
      ...mapState([
        'level',
        'playing'
      ]),

      visible () {
        return this.level === 0;
      }
    },

    methods: {
      ...mapActions([
        'incrementLevel'
      ]),

      toggleVisibility () {
        this.visible = !this.visible;
      },

      async startGame () {
        const { incrementLevel } = this;

        await delay(500).then(incrementLevel);
      }
    }
  }
</script>

<style scoped lang="scss">
  #howtoplay {
    top: 0rem;
    left: 0rem;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %flex-center;
    backface-visibility: hidden;
    transition: transform 400ms ease;
    background-color: rgba(0, 0, 0, 0.7);

    &.hide {
      transform: rotateY(-180deg);
    }

    fieldset {
      width: 90%;
      height: 50%;
      border: none;

      legend {
        color: #fff;
        font-size: 20pt;
        letter-spacing: .1875rem;
        padding: .3125rem .625rem;
        text-transform: uppercase;
        font-family: "Amatic SC", cursive;
      }

      p {
        color: #fff;
        font-size: 12pt;
        text-indent: 1em;
        line-height: 1.5em;
        text-align: justify;
        margin-top: .9375rem;
        padding: .9375rem .3125rem;
        font-family: 'Overlock', cursive;
      }

      button {
        width: auto;
        border: none;
        float: right;
        color: #fff;
        cursor: pointer;
        font-size: 13pt;
        background: none;
        margin-top: .9375rem;
        letter-spacing: .0625rem;
        font-family: "Amatic SC", cursive;
      }
    }
  }
</style>