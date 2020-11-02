<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div class="percentage_bar" :style="percentageWidth"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TilesPercentage',

  props: ['total', 'current'],

  data () {
    return {};
  },

  computed: {
    percentageWidth () {
      const { total, current } = this;

      return {
        width: `${current * 100 / total}%`
      };
    }
  }
}
</script>

<style lang="scss">
  @import '../../../public/assets/scss/global.scss';

  .user_percentage {
    width: 100%;
    height: 15px;
    bottom: -20px;
    position: absolute;
    @extend %flex-center;

    .percentage_box {
      width: 97%;
      height: 5px;
      position: relative;
      background: #bd6772;
      @include border-radius(3px);

      .percentage_bar {
        top: 0px;
        left: 0px;
        height: 100%;
        position: absolute;
        background: purple;
        transition: width 200ms ease-in;
      }
    }
  }
</style>