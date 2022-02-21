<template>
  <div class="relative h-full">
    <right-header></right-header>
    <right-box></right-box>
  </div>
</template>
<script>
import RightHeader from "./right/RightHeader.vue";
import RightBox from "./right/RightBox.vue";
export default {
  components: {
    RightHeader,
    RightBox,
  },
};
</script>