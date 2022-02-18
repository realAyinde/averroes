import averroes from "../api/averroes";
import { createStore } from "vuex";

// Initial state
const state = () => ({
  all: [],
  current: {},
});

// getters
const getters = {
};

// actions
const actions = {
  async getAllCharacters({ commit, state }) {
    const characters = await averroes.getAllCharacters();
    commit("setCharacters", characters);
  },

  currentCharacter(context) {
    if (context.state.current) {
      return;
    } else {
      async () => {
        await context.dispatch("getAllCharacters").then(() => {
          context.commit("setCharacter");
        });
      };
    }
  },

  nextCharacter(context) {
    var next_index = context.state.all.indexOf(context.state.current) + 1;
    if (next_index != context.state.all.length){
      context.commit("setCharacter", next_index);
    }
  },

  previousCharacter(context) {
    var previous_index = context.state.all.indexOf(context.state.current) - 1;
    if (previous_index != -1){
      context.commit("setCharacter", previous_index);
    }
  },
};

// mutations
const mutations = {
  setCharacters(state, characters) {
    state.all = characters;
    state.current = characters[0];
  },

  setCharacter(state, id = 0) {
    // console.log(state.current["id"]);
    state.current = state.all[id];
    // console.log(state.all[0]);
  },
};

export default createStore({
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
});
