
const incrementLevel = ({ commit, state }) => {
  commit('SET_LEVEL', state.level + 1);
};

export default {
  incrementLevel
};
