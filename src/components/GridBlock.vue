<template>
  <div
    :class="area"
    class="screen-option"
    @click="$emit('play')"
    :style="backgroundImage">
    <span v-if="area === 'e'" :style="heartBackground">
      Play
    </span>
  </div>
</template>

<script>
export default {
    name: 'GridBlock',

    props: {
      area: {
        type: String,
        required: true
      }
    },

    computed: {
      backgroundImage () {
        return {
          backgroundImage: `url(${require('@images/profile_pic_' + this.area + '.jpg')})`
        }
      },

      heartBackground () {
        return {
          backgroundImage: `url(${require('@images/heartbg.jpg')})`
        }
      }
    }
}
</script>

<style lang="scss">
  .screen-option {
    position: relative;
    background-size: cover;
    transition: all 500ms ease;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #b15166;
    @extend %flex-center;

    &.a {
      grid-area: A;
      background-position: center 60%;
    }

    &.b {
      grid-area: B;
      background-position: 52% center;

      // &::before {
      //   bottom: 10px;
      //   right: -35px;
      //   transform: rotate(20deg);
      // }
    }

    &.c {
      grid-area: C;
      background-position: center 30%;
    }

    &.d {
      grid-area: D;
      background-position: 17% center;

      // &::before {
      //   top: 30px;
      //   left: -45px;
      //   transform: rotate(-20deg);
      // }
    }

    &.e {
      grid-area: E;
      cursor: pointer;
      background-size: 0px;
    }

    // &.b::before,
    // &.d::before {
    //   content: '';
    //   width: 50px;
    //   height: 50px;
    //   position: absolute;
    //   background-size: cover;
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   // background-image: url('../../assets/images/heart_icon.png');
    // }

    span {
      width: 100%;
      height: 100%;
      font-size: 5rem;
      color: transparent;
      @extend %flex-center;
      background-position: center;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
              background-clip: text;
      font-family: 'Bangers', cursive;
    }
  }
</style>