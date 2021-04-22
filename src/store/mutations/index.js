
const SET_PLAYING = (state, payload) => {
  state.playing = payload;
};

const SET_LEVEL = (state, payload) => {
  state.level = payload;
};

const POPULATE_COMPUTED_SEQUENCE = (state, payload) => {
  state.computedSequence = payload;
};

export default {
  SET_LEVEL,
  SET_PLAYING,
  POPULATE_COMPUTED_SEQUENCE
}
