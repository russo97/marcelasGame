<template>
  <div class="screen-option" :class="area" :style="backgroundImage">
    <span v-if="clickable" :style="heartBackground" @click="playGame">
      Play
    </span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'GridBlock',

    props: {
      area: {
        type: String,
        required: true
      }
    },

    methods: {
      playGame () {
        const { area, SET_PLAYING } = this;

        SET_PLAYING(area === 'e');
      },

      ...mapMutations([
        'SET_PLAYING'
      ]),
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
    }

    &.c {
      grid-area: C;
      background-position: center 30%;
    }

    &.d {
      grid-area: D;
      background-position: 17% center;
    }

    &.e {
      grid-area: E;
      cursor: pointer;
      background-size: 0rem;
    }

    span {
      width: 100%;
      height: 100%;
      color: transparent;
      font-size: 3.125rem;
      @extend %flex-center;
      background-position: center;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
              background-clip: text;
      font-family: 'Bangers', cursive;
    }
  }
</style>