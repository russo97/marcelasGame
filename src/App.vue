<template>
  <div id="app">
    <div id="screen">
      <div class="screen-option" :class="grid_areas[index]" :key="index" v-for="(curr_word, index) in containers_words">
        <span v-if="curr_word">{{curr_word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {},

  data() {
    return {
      grid_areas: ['a', 'b', 'c', 'd', 'e'],
      containers_words: ['Marcela', '', 'Acioli', '', 'play']
    };
  },

  methods: {},

  computed: {},

  watch: {}
}
</script>

<style scoped>
  #app {
    width: 90%;
    height: 400px;
    max-width: 400px;
    box-shadow: 0px -2px 5px 2px #b15166;
  }

  #app #screen {
    width: 100%;
    height: 100%;
    padding: 4px;
    width: -moz-available;
    width: -webkit-fill-available;
    display: grid;
    grid-gap: 4px;
    grid-template-areas: 
      'A A A A B B'
      'A A A A B B'
      'D D E E B B'
      'D D E E B B'
      'D D C C C C'
      'D D C C C C';
    grid-auto-columns: minmax(0px, 100%);
    background-color: var(--background-box-color2);
  }

  .screen-option {
    display: flex;
    position: relative;
    align-items: center;
    background-size: cover;
    justify-content: center;
    transition: all 500ms ease;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #b15166;
  }

  .screen-option span {
    width: 100%;
    height: 100%;
    display: flex;
    color: transparent;
    font-size: 5rem;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    background-image: url(https://static.vecteezy.com/system/resources/thumbnails/000/206/354/small/5-07-01.jpg);
    font-family: 'Bangers', cursive;
    -webkit-background-clip: text;
            background-clip: text;
  }

  .screen-option.a {
    grid-area: A;
  }

  .screen-option.b {
    grid-area: B;
    background-position: 52% center;
    background-image: url('assets/images/profile_pic_b.jpg');
  }

  .screen-option.c {
    grid-area: C;
  }

  .screen-option.d {
    grid-area: D;
    background-position: 17% center;
    background-image: url('assets/images/profile_pic_d.jpg');
  }

  .screen-option.e {
    grid-area: E;
    cursor: pointer;
  }

  .screen-option.b::before,
  .screen-option.d::before {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('assets/images/heart_icon.png');
  }

  .screen-option.d::before {
    top: 30px;
    left: -45px;
    transform: rotate(-20deg);
  }

  .screen-option.b::before {
    bottom: 10px;
    right: -35px;
    transform: rotate(20deg);
  }
</style>
