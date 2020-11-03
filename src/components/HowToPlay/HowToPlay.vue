<template>
  <div id="howtoplay" :class="{ hide: !playing }">
    <fieldset>
      <legend>Como jogar</legend>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "HowToPlay",

  props: ['playing']
}
</script>

<style scoped lang="scss">
  @import '../../../public/assets/scss/global.scss';

  #howtoplay {
    top: 0px;
    left: 0px;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %flex-center;
    transition: top 600ms ease-in 300ms;
    background-color: rgba(0, 0, 0, .3);

    &.hide {
      top: 100%;
    }

    fieldset {
      width: 90%;
      height: 50%;
      border: solid 1px white;

      legend {
        font-size: 15pt;
        font-family: 'Open Sans';
        text-transform: uppercase;
      }
    }
  }
</style>