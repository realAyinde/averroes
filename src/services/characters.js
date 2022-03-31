const baseUrl = "http://localhost:8080/api/characters"

export default {
  async getAllCharacters() {
    try {
      let response = await fetch(baseUrl);
      let data = await response.json()
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async getCharacter(id) {
    try {
      let response = await fetch(baseUrl + `/${id}`);
      let data = await response.json()
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
