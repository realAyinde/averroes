<template>
  <div class="px-4 flex leading-8 justify-around">
    <div class="animate-bounce">
      <a role="button" @click="tab('about')" class="animate-underline p-1"
        ><i class="icon-power"></i
      ></a>
    </div>
    <div class="animate-bounce">
      <a role="button" @click="tab('ability')" class="animate-underline p-1"
        ><i class="icon-quill"></i
      ></a>
    </div>
    <div class="animate-bounce">
      <a role="button" @click="tab('appearance')" class="animate-underline p-1"
        ><i class="icon-magic-wand"></i
      ></a>
    </div>
    <div class="animate-bounce">
      <a role="button" @click="tab('others')" class="animate-underline p-1"
        ><i class="icon-droplet"></i
      ></a>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["displayTabContent"]),
    tab(text) {
      this.displayTabContent(text);
    },
  },

  computed: {},
};
</script>