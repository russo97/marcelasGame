
const SET_PLAYING = (state, payload) => {
  state.playing = payload;
};

const SET_LEVEL = (state, payload) => {
  state.level = payload;
};

const POPULATE_COMPUTED_SEQUENCE = (state, payload) => {
  state.computedSequence = payload;
};

const SET_LAST_OPERATION = (state, payload) => {
  state.lastOperation = payload;
};

const SET_USER_CAN_PLAY_PROPERTY = (state, payload) => {
  state.canUserPlay = payload;
};

const HANDLE_TILE_BLOCK_CLICK = (state, payload) => {
  state.userSequence = payload;
};

export default {
  SET_LEVEL,
  SET_PLAYING,
  SET_LAST_OPERATION,
  HANDLE_TILE_BLOCK_CLICK,
  SET_USER_CAN_PLAY_PROPERTY,
  POPULATE_COMPUTED_SEQUENCE
}
