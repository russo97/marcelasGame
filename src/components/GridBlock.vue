<template>
  <div class="screen-option" :class="area" :style="backgroundImage">
    <span v-if="clickable" :style="heartBackground">
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
        const area = this.area == 'e' ? 'd' : this.area;

        return {
          backgroundImage: `url(${require('@images/profile_pic_' + area + '.jpg')})`
        }
      },

      heartBackground () {
        return {
          backgroundImage: `url(${require('@images/heartbg.jpg')})`
        }
      },

      clickable () {
        return this.area === 'e';
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

      &::before {
        right: 3.75rem;
        bottom: -1.25rem;
        transform: rotate(20deg);
      }
    }

    &.c {
      grid-area: C;
      background-position: center 30%;
    }

    &.d {
      grid-area: D;
      background-position: 17% center;

      &::before {
        top: -25px;
        left: 15px;
        transform: rotate(-20deg);
      }
    }

    &.e {
      grid-area: E;
      cursor: pointer;
      background-size: 0rem;
    }

    &.b::before,
    &.d::before {
      z-index: 2;
      content: '';
      width: 3.125rem;
      height: 3.125rem;
      position: absolute;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('../assets/images/heart_icon.png');
    }

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