const baseUrl = "http://localhost:8080/api/characters";

// actions
const actions = {
  getAllCharacters({ commit, dispatch }) {
    return fetch(baseUrl)
      .then(async (response) => await response.json())
      .then((data) => {
        commit("setCharacters", data);
        dispatch("getCharacter", 1);
      })
      .catch((error) => console.error("There was an error!", error));
  },

  getCharacter({ commit }, id) {
    return fetch(baseUrl + `/${id}`)
      .then(async (response) => await response.json())
      .then((data) => {
        commit("setCharacter", data);
      })
      .catch((error) => console.error("There was an error!", error));
  },

  async nextCharacter(context) {
    var next_id = context.state.current.id + 1;
    if (next_id != context.state.all.length + 1) {
      context.state.characterTransitionName = "forward-slide-fade";
      await context.dispatch("getCharacter", next_id);
    }
  },

  async previousCharacter(context) {
    var previous_id = context.state.current.id - 1;
    if (previous_id != 0) {
      context.state.characterTransitionName = "backward-slide-fade";
      await context.dispatch("getCharacter", previous_id);
    }
  },

  getFilterChars(context, searchText) {
    if (searchText != "") {
      var newfilterChars = [];
      context.state.all.forEach((char) => {
        var name = char.name.toLowerCase();
        if (name.search(searchText.toLowerCase()) > -1) {
          newfilterChars.push(char);
        }
      });
      context.state.filteredCharacters = newfilterChars;
    } else {
      context.state.filteredCharacters = null;
    }
  },
};

export default actions;
