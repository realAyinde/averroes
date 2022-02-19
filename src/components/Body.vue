<template>
  <div class="absolute top-16 bottom-4 flex w-full">
    <div class="md:grid md:grid-cols-2 gap-4 h-full w-full px-4 md:pb-4 pb-12">
      <div class="md:block hidden relative h-full">
        <Left />
        <Bottom />
      </div>
      <div class="relative h-full">
        <Right />
      </div>
    </div>
    <Bottom class="md:hidden" />
    <!-- <mobile-menu class="md:hidden"></mobile-menu> -->
    <!-- <search></search> -->
  </div>
</template>
<script>
import Right from "./Right.vue";
import Left from "./Left.vue";
import Bottom from "./Bottom.vue";
import MobileMenu from "./MobileMenu.vue";
import Search from './Search.vue';
export default {
  components: { Right, Left, Bottom, MobileMenu, Search },
};
</script>