
const state = {
  playing: false,
  userSequence: [],
  computedSequence: [],
  tiles: Array.from({ length: 25 }, (_, i) => i + 1),
};

export default state;
