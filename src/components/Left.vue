<template>
  <div class="md:block relative h-full">
    <div class="h-full">
      <div class="relative flex justify-center items-center w-full h-full">
        <div
          class="
            absolute
            md:left-4 md:right-4
            top-4
            bottom-4
            md:bottom-12
            right-0
            left-0
            flex
            overflow-clip
          "
        >
          <transition :name="characterTransitionName" mode="out-in">
            <div
              :key="img"
              class="
                flex-none
                relative
                transition-all
                duration-300
                w-full
                h-full
                flex
                justify-center
                items-center
              "
            >
              <img
                class="object-cover w-auto max-h-full"
                :src="img"
                :alt="img_alt"
              />
            </div>
          </transition>
        </div>
      </div>
      <Bottom class="md:block hidden" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Bottom from "./Bottom.vue";
export default {
  components: { Bottom },
  computed: {
    ...mapState(["current", "characterTransitionName"]),
    img() {
      return this.current["img_url"];
    },
    img_alt() {
      return this.current["name"];
    },
  },
};
</script>