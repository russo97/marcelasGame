
const SET_PLAYING = (state, payload) => {
  state.playing = payload;
};

const SET_LEVEL = (state, payload) => {
  state.level = payload;
};

export default {
  SET_LEVEL,
  SET_PLAYING
}
