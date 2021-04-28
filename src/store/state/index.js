
const state = {
  level: 0,
  playing: false,
  userSequence: [],
  timesPerformed: 0,
  canUserPlay: false,
  computedSequence: [],
  lastOperation: null,
  tiles: Array.from({ length: 25 }, (_, i) => i + 1),
};

export default state;
