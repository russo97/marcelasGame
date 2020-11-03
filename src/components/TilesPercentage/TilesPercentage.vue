<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div
        :key="index"
        class="percentage_bar"
        :style="percentageWidth"
        :class="{ filled: item <= current }"
        v-for="(item, index) in total"></div>
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
      const { total } = this;

      return { width: `${100 / total}%` };
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
      background: #51213f;
      @include border-radius(3px);
      @extend %flex-center-space-evenly;

      .percentage_bar {
        top: 0px;
        left: 0px;
        height: 100%;
        transition: all 400ms ease-in;

        &.filled {
          background-color: #b15166;
        }
      }
    }
  }
</style>