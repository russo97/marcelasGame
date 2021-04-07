<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div
        :key="item"
        :style="width"
        class="percentage_bar"
        :class="{ filled: item <= current }"
        v-for="item in total">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TilesPercentage',

    computed: {
      width () {
        const { total } = this;

        return {
          width: `${100 / total}%`
        };
      }
    }
  }
</script>

<style lang="scss">
  .user_percentage {
    width: 100%;
    height: .9375rem;
    bottom: -1.25rem;
    position: absolute;
    @extend %flex-center;

    .percentage_box {
      width: 97%;
      height: .3125rem;
      position: relative;
      background: #51213f;
      @include border-radius(.1875rem);
      @extend %flex-center-space-evenly;

      .percentage_bar {
        top: 0rem;
        left: 0rem;
        height: 100%;
        transition: all 400ms ease-in;

        &.filled {
          background-color: #b15166;
        }
      }
    }
  }
</style>