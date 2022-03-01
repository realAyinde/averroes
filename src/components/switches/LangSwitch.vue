<template>
  <div class="relative">
    <label class="toggle-label relative w-14 h-6">
      <input type="checkbox" v-model="checked" />
      <span class="base flex justify-between items-center px-2">
        <span class="toggle-slider z-40 bg-gray-800"></span>
        <span class="option1 text-slate-600 z-50"> EN </span>
        <span class="option2 text-slate-600 z-50"> YR </span>
      </span>
    </label>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["lang"]),
    checked: {
      set: function (val) {
        val ? this.changeLocale("yr") : this.changeLocale("en");
      },
      get: function () {
        return this.lang === "en" ? false : true;
      },
    },
  },

  methods: {
    ...mapMutations(["switchLang"]),
    changeLocale(val) {
      this.switchLang(val);
      this.$i18n.locale = this.lang;
    },
  },
};
</script>