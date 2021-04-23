<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div
        :key="item"
        :style="width"
        class="percentage_bar"
        :class="{ filled: item <= userSequenceCount }"
        v-for="item in computedSequenceCount">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'TilesPercentage',

    computed: {
      ...mapGetters([
        'userSequenceCount',
        'computedSequenceCount'
      ]),

      width () {
        const { computedSequenceCount } = this;

        return {
          width: `${100 / (computedSequenceCount || 1)}%`
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