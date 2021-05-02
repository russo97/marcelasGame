<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div
        :style="width"
        class="percentage_bar filled">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'TilesPercentage',

    computed: {
      ...mapState([
        'level'
      ]),

      ...mapGetters([
        'userSequenceCount',
        'computedSequenceCount'
      ]),

      width () {
        const { userSequenceCount, computedSequenceCount } = this;

        return {
          width: `${userSequenceCount / computedSequenceCount * 100}%`
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
      // @extend %flex-center-space-evenly;

      display: flex;
      justify-content: flex-start;

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