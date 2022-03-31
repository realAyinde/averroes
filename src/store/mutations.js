const mutations = {
  setCharacters(state, characters) {
    state.all = characters;
    state.currentTab = "about";
  },

  setCharacter(state, character) {
    state.current = character;
  },

  displayTabContent(state, tab = "about") {
    state.currentTab = tab;
  },

  setShowSearch(state, arg = true) {
    state.showSearch = arg;
  },

  setShowMenu(state, arg = true) {
    state.showMenu = arg;
  },

  setFlip(state, arg = false) {
    state.flip = arg;
  },

  switchTheme(state) {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      state.theme = "";
    } else {
      document.documentElement.classList.add("dark");
      state.theme = "dark";
    }
  },

  switchLang(state, locale = "en") {
    state.lang = locale;
  },
};

export default mutations;
