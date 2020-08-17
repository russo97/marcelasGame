<template>
  <div id="app">
    <div id="screen">
      <div class="screen-option" :class="grid_areas[index]" :key="index" v-for="(curr_word, index) in containers_words">
        <span>{{curr_word}}</span>
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

  mwthods: {},

  computed: {},

  watch: {}
}
</script>

<style scoped>
  #app {
    width: 90%;
    height: 400px;
    max-width: 400px;
    padding: 2px;
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
    align-items: center;
    background-size: cover;
    /* mix-blend-mode: darken; */
    justify-content: center;
    transition: all 500ms ease;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #b15166;
  }

  .screen-option span {
    width: 100%;
    text-align:  center;
    font-family: Consolas;
  }

  .screen-option.b,
  .screen-option.d {
    background-size: cover;
    background-blend-mode: multiply;
    /* background-image: url(https://instagram.frec36-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/58409452_2174875615914463_5390018402187845561_n.jpg?_nc_ht=instagram.frec36-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2s_mrz9uJL4AX_6v_xm&oh=2666f50938f4c71cacf3ca5c255ae7c3&oe=5F650BF1); */
  }

  .screen-option.b span,
  .screen-option.d span {
    width: 1px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-family: Consolas, monospace;
  }

  .screen-option:hover,
  .screen-option:active {
    background-blend-mode: unset;
  }

  .screen-option.a {
    grid-area: A;
  }

  .screen-option.b {
    grid-area: B;
  }

  .screen-option.c {
    grid-area: C;
  }

  .screen-option.d {
    grid-area: D;
  }

  .screen-option.e {
    grid-area: E;
  }
</style>
