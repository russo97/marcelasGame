<template>
  <div
    :class="area"
    class="screen-option"
    @click="$emit('play')">
      <span v-if="area === 'e'">
          Play
      </span>
  </div>
</template>

<script>
export default {
    name: 'GridBlock',

    props: ['area']
}
</script>

<style>
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
    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
    -webkit-background-clip: text;
            background-clip: text;
    font-family: 'Bangers', cursive;
    background-image: url('../../assets/images/heartbg.jpg');
  }

  .screen-option.a {
    grid-area: A;
    background-position: center 60%;
    background-image: url('../../assets/images/profile_pic_a.jpg');
  }

  .screen-option.b {
    grid-area: B;
    background-position: 52% center;
    background-image: url('../../assets/images/profile_pic_b.jpg');
  }

  .screen-option.c {
    grid-area: C;
    background-position: center 30%;
    background-image: url('../../assets/images/profile_pic_c.jpg');
  }

  .screen-option.d {
    grid-area: D;
    background-position: 17% center;
    background-image: url('../../assets/images/profile_pic_d.jpg');
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
    background-image: url('../../assets/images/heart_icon.png');
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