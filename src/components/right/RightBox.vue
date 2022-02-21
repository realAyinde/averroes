<template>
  <div class="md:px-4 absolute top-10 left-0 bottom-0 right-0">
    <div
      class="
        relative
        w-full
        h-full
        shadow-sm
        rounded-3xl
        p-3
        bg-gray-200
        text-lg
      "
    >
      <div class="absolute top-0 p-1 left-0 right-0">
        <div class="border-b border-gray-700">
          <h2 class="text-center">{{ title_text }}</h2>
        </div>
        <div
          class="h-8 bg-gradient-to-b from-gray-200 dark:from-slate-900"
        ></div>
      </div>
      <div class="pt-8 w-full h-full">
        <div class="overflow-auto w-full h-full">
          <transition name="fade" mode="out-in">
            <section :key="text" v-html="text"></section>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tabs: {
        about: "About the Character",
        ability: "Ability and Power",
        appearance: "Appearance in TV Shows and Movies",
        others: "Other details",
      },
    };
  },
  computed: {
    ...mapState(["current", "currentTab"]),
    text() {
      return this.current[this.currentTab];
    },

    title_text() {
      try {
        return this.tabs[this.currentTab];
      } catch (error) {
        return "---I'm sorry! I left this--";
      }
    },
  },
};
</script>