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

<style lang="scss">
 .playingBlock {
    cursor: pointer;
    background: #b15166;
  }
</style>