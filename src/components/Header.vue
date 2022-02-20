<template>
  <div class="h-16">
    <header
      class="flex w-full justify-between p-4 py-2 border-b border-gray-700"
    >
      <div class="flex-1">
        <h1 class="text-xl">Ave<span class="underline">rr</span>oes</h1>
      </div>
      <span class="flex-1 md:hidden text-center"
        ><a href="" class=""><i class="icon-eye text-lg"></i></a
      ></span>
      <div class="md:flex gap-4 hidden px-4 items-center">
        <a role="button" class="" @click="setShowSearch"
          ><i class="icon-search text-lg"></i
        ></a>
        <a href="" class=""
          ><i class="icon-sun-fill text-xl dark:text-white"></i
        ></a>
        <div class="relative">
          <label class="toggle-label relative w-14 h-6">
            <input type="checkbox" />
            <span class="base flex justify-between items-center px-2">
              <span class="toggle-slider z-40 bg-gray-800"></span>
              <span class="option1 text-slate-600 z-50"> EN </span>
              <span class="option2 text-slate-600 z-50"> YR </span>
            </span>
          </label>
        </div>
      </div>
      <span class="flex-1 md:hidden text-right">
        <a role="button" @click="setShowMenu" class=""><i class="icon-menu text-lg"></i></a>
      </span>
    </header>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Search from "./Search.vue";
export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["setShowSearch", "setShowMenu"]),
  },
  components: {
    Search,
  },
};
</script>
