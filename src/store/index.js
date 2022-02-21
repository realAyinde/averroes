import averroes from "../api/averroes";
import { createStore } from "vuex";

// Initial state
const state = () => ({
  all: [],
  current: {},
  currentTab: "",
  showSearch: false,
  showMenu: false,
  characterTransitionName: "forward-slide-fade",
  flip: true
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
      context.state.characterTransitionName = "forward-slide-fade"
    }
  },

  previousCharacter(context) {
    var previous_index = context.state.all.indexOf(context.state.current) - 1;
    if (previous_index != -1){
      context.commit("setCharacter", previous_index);
      context.state.characterTransitionName = "backward-slide-fade"
    }
  },
};

// mutations
const mutations = {
  setCharacters(state, characters) {
    state.all = characters;
    state.current = characters[0];
    state.currentTab = "about"
  },

  setCharacter(state, id = 0) {
    state.current = state.all[id];
  },

  displayTabContent(state, tab = "about"){
    state.currentTab = tab
  },

  setShowSearch(state, arg = true) {
    state.showSearch = arg
  },

  setShowMenu(state, arg = true) {
    state.showMenu = arg
  },

  setFlip (state, arg = false) {
    state.flip = arg
  }
};

export default createStore({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
});
