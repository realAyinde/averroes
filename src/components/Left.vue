<template>
  <div class="h-full">
    <div class="relative flex justify-center items-center w-full h-full pb-12">
      <div class="absolute left-4 top-4 right-4 bottom-12 flex justify-center items-center">
        <div class="w-auto max-w-full h-full overflow-clip">
        <img
          class="object-cover w-auto max-h-full"
          :src="img"
          :alt="img_alt"
        />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Bottom from "./Bottom.vue";
export default {
  components: { Bottom },
  computed: {
    ...mapState(["current"]),
    img() {
      return this.current["img_url"];
    },
    img_alt() {
      return this.current["name"]
    }
  },
};
</script>