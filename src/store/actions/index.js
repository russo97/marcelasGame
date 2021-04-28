
import random from '../../utils/random';

const incrementLevel = ({ commit, state }) => {
  commit('SET_LEVEL', state.level + 1);
};

const setUserCanPlayProperty = ({ commit }, payload) => {
  commit('SET_USER_CAN_PLAY_PROPERTY', payload);
};

const setLastOperation = ({ commit }, payload) => {
  commit('SET_LAST_OPERATION', payload);
};

const populateComputedSequence = ({ commit, state }) => {
  const { level } = state;

  commit('POPULATE_COMPUTED_SEQUENCE', Array.from({ length: level }, () => {
    return ({
      timer: 500,
      tile: random(1, 25)
    });
  }));
};

export default {
  incrementLevel,
  setLastOperation,
  setUserCanPlayProperty,
  populateComputedSequence
};
