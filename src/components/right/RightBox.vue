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
          <h2 class="text-center">Power & Ability</h2>
        </div>
        <div
          class="h-8 bg-gradient-to-b from-gray-200 dark:from-slate-900"
        ></div>
      </div>
      <div class="pt-8 w-full h-full">
        <div class="overflow-auto w-full h-full">
          <section v-html="about" class=""></section>
          <!-- <section v-html="current.about"></section> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    about: "",
    ability: "",
    appearance: "",
    others: "",
  }),

  computed: {
    ...mapState(["current"]),
    about() {
      return this.current.about;
    },
  },
};
</script>