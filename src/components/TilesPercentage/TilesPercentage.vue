<template>
  <div class="user_percentage">
    <div class="percentage_box">
      <div class="percentage_bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TilesPercentage',

  data () {
    return {};
  }
}
</script>

<style lang="scss">
  @import '../../../public/assets/scss/global.scss';

  .user_percentage {
    width: 100%;
    height: 15px;
    bottom: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    .percentage_box {
      width: 97%;
      height: 5px;
      position: relative;
      background: #bd6772;
      @include border-radius(3px);
    }
  }
</style>