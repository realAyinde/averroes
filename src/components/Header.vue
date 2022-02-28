<template>
  <div class="h-16">
    <header
      class="flex w-full justify-between p-4 py-2 border-b border-gray-700"
    >
      <div class="flex-1">
        <h1 class="text-xl">{{ $t('averroes') }}</h1>
      </div>
      <span class="flex-1 md:hidden text-center"
        ><a role="button" @click="setFlip(!flip)" class=""
          ><i class="icon-eye text-lg"></i></a
      ></span>
      <div class="md:flex gap-4 hidden px-4 items-center">
        <a role="button" class="" @click="setShowSearch"
          ><i class="icon-search text-lg"></i
        ></a>
        <a role="button" @click="switchTheme()" class=""
          ><i class="icon-sun-fill text-xl dark:text-white"></i
        ></a>
        <lang-switch></lang-switch>
      </div>
      <span class="flex-1 md:hidden text-right">
        <a role="button" @click="setShowMenu" class=""
          ><i class="icon-menu text-lg"></i
        ></a>
      </span>
    </header>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Search from "./Search.vue";
import LangSwitch from './switches/LangSwitch.vue';
export default {
  data() {
    return {};
  },

  components: {
    Search,
    LangSwitch,
  },

  methods: {
    ...mapMutations(["setShowSearch", "setShowMenu", "setFlip", "switchTheme"]),
  },

  computed: {
    ...mapState(["flip"]),
  },

  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>
