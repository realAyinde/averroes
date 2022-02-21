<template>
  <div class="absolute top-16 bottom-4 flex w-full">
    <div class="md:grid md:grid-cols-2 gap-4 h-full w-full px-4 pb-4 hidden">
      <Left />
      <Right />
    </div>
    <div class="block h-full w-full px-4 pb-12 md:hidden">
      <Transition name="flip" mode="out-in">
        <Left v-if="flip" />
        <Right v-else />
      </Transition>
    </div>

    <Bottom class="md:hidden" />
    <mobile-menu :show="showMenu" class="md:hidden"></mobile-menu>
    <search :show="showSearch"></search>
  </div>
</template>
<script>
import Right from "./Right.vue";
import Left from "./Left.vue";
import Bottom from "./Bottom.vue";
import MobileMenu from "./MobileMenu.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";
export default {
  components: { Right, Left, Bottom, MobileMenu, Search },
  computed: {
    ...mapState(["showSearch", "showMenu", "flip"]),
  },
};
</script>