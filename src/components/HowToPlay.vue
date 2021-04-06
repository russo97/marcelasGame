<template>
  <div id="howtoplay" :class="{ hide: !playing }">
    <fieldset>
      <legend>Como jogar</legend>

      <p>
        Visualize a sequência que será exibida e refaça na mesma ordem, desafie
        sua mente e chegue o mais longe que puder.
      </p>

      <button
        @click="readyToPlay">estou pronto &gt;</button>
    </fieldset>
  </div>
</template>

<script>
  export default {
    name: "HowToPlay",

    props: ["playing"],

    methods: {
      readyToPlay () {
        this.$emit('readytoplay');
      }
    }
  }
</script>

<style scoped lang="scss">
  #howtoplay {
    top: 0px;
    left: 0px;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %flex-center;
    transition: transform 400ms ease;
    background-color: rgba(0, 0, 0, 0.7);
    backface-visibility: hidden;

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
        padding: 5px 10px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: "Amatic SC", cursive;
      }

      p {
        color: #fff;
        font-size: 12pt;
        text-indent: 1em;
        margin-top: 15px;
        padding: 15px 5px;
        line-height: 1.5em;
        text-align: justify;
        // text-transform: uppercase;
        font-family: 'Overlock', cursive;
      }

      button {
        width: auto;
        border: none;
        float: right;
        color: #fff;
        cursor: pointer;
        background: none;
        font-size: 13pt;
        margin-top: 15px;
        letter-spacing: 1px;
        font-family: "Amatic SC", cursive;
      }
    }
  }
</style>