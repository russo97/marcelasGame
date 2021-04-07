<template>
  <div id="app">
    <Splash />

    <PlayingArea />

    <HowToPlay />
  </div>
</template>

<script>
  import Splash from '@components/Splash';
  import HowToPlay from '@components/HowToPlay';
  import PlayingArea from '@components/PlayingArea';

  export default {
    name: 'App',

    components: {
      Splash,
      HowToPlay,
      PlayingArea
    }
  }
</script>

<style scoped lang="scss">
  #app {
    width: 90%;
    height: 400px;
    max-width: 400px;
    position: relative;
    -webkit-perspective: 800px;
            perspective: 800px;
    box-shadow: 0px -2px 5px 2px #b15166;
  }
</style>
