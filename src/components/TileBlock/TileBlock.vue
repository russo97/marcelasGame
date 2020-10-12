<template>
  <div class="playingBlock">
      {{ index }}
  </div>
</template>

<script>
export default {
    name: 'TileBlock',

    props: ['index']
}
</script>

<style>
 .playingBlock {
    cursor: pointer;
    background: purple;
  }
</style>