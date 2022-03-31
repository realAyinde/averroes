<template>
  <transition name="modal">
    <div
      v-if="show"
      class="
        transition-opacity
        duration-300
        fixed
        top-0
        bottom-0
        left-0
        right-0
        z-50
        backdrop-blur-2xl
      "
    >
      <div class="h-full w-full bg-gray-200/50">
        <div class="h-full w-full flex items-center justify-center">
          <div
            class="
              modal-container
              transition-all
              duration-300
              relative
              text-center
            "
          >
            <div class="m-4 mb-12">
              <a role="button" @click="setShowMenu(false)">
                <i class="icon-cross"></i>
              </a>
            </div>
            <div class="m-4">
              <a>Averroes </a>
            </div>
            <div class="m-4">
              <a role="button" @click="setShowSearch">
                Search <span><i class="icon-search text-xs"></i></span>
              </a>
            </div>
            <div class="m-4">
              <p>Theme</p>
              <div class="relative p-1">
                <label class="toggle-label relative w-14 h-6">
                  <input type="checkbox" v-model="themeChecked" />
                  <span class="base flex justify-between items-center px-2">
                    <span class="toggle-slider z-40 bg-gray-800"></span>
                    <span class="option1 text-slate-600 z-50">
                      <i class="icon-sun"></i>
                    </span>
                    <span class="option2 text-slate-600 z-50">
                      <i class="icon-moon-stroke"></i>
                    </span>
                  </span>
                </label>
              </div>
            </div>
            <div class="m-4">
              <p>{{ $t('language') }}</p>
              <lang-switch class="p-1"></lang-switch>
            </div>
            <div class="m-4 mt-12 text-xs">
              <p>{{$t('made_by_ayinde_sodiq')}}</p>
            </div>
            <div class="m-4"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
// import { watch } from '@vue/runtime-core';
import { mapMutations, mapState } from "vuex";
import LangSwitch from './switches/LangSwitch.vue';
export default {
  props: {
    show: Boolean,
  },

  components: {LangSwitch},

  data(){
    return {
      themeChecked: Boolean
    }
  },

  methods: {
    ...mapMutations(["setShowMenu", "setShowSearch", "switchTheme"]),
  },

  computed: {
    ...mapState(["theme"]),
  },

  mounted(){
    if(this.theme === "dark"){
      this.themeChecked = true
    } else {
      this.themeChecked = false
    }
  },

  watch: {
    themeChecked(){
      this.switchTheme()
    }
  }
};
</script>