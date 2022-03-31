<template>
  <div>
    <div class="h-screen relative w-full">
      <Header />
      <Body />
    </div>
  </div>
</template>

<script>
import Body from "./components/Body.vue";
import Header from "./components/Header.vue";
export default {
  components: { Body, Header },
  data() {
    return {
      characters: null,
    };
  },

  created() {
    this.getCharacters();
  },

  methods: {
    async getCharacters() {
      await this.$store.dispatch("getAllCharacters");
      this.characters = this.$store.state.all
      let yeh = this.$store.state.all
      yeh = this.$store.state.current
      // console.log(yeh);
    },
  },

  // watch: {
  //   characters: "getCharacters",
  // },
};
</script>