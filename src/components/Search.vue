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
      <div class="h-full w-full bg-gray-200/50 dark:bg-gray-700/50">
        <div class="h-full w-full px-4 sm:px-12 py-8 sm:py-12 md:py-24">
          <div
            class="
              modal-container
              transition-all
              duration-300
              rounded-lg
              w-full
              max-h-full max-w-3xl
              mx-auto
              bg-white
              dark:bg-slate-900
              flex flex-col
            "
          >
            <header
              class="
                flex-none
                w-full
                flex
                p-4
                gap-4
                justify-center
                border-b
                dark:border-gray-800
              "
            >
              <div class="flex-1">
                <span class="p-1">
                  <i class="icon-search1 align-middle"></i>
                </span>
              </div>
              <div class="flex-auto w-full">
                <input
                  class="w-full border-none bg-transparent outline-none"
                  type="text"
                  name=""
                  id=""
                  v-model="searchText"
                  placeholder="Search for averroes characters"
                />
              </div>
              <div class="flex-1">
                <a role="button" class="text-xs" @click="setShowSearch(false)">
                  <i class="icon-cross"></i>
                </a>
              </div>
            </header>
            <div class="flex-auto px-4 py-2 overflow-auto">
              <div class="max-h-full">
                <div class="max-h-full">
                  <section v-if="!filteredCharacters">
                    <div class="p-8">
                      <p class="text-center text-slate-400">
                        Search for your lovely characters
                      </p>
                    </div>
                  </section>
                  <section v-else-if="!filteredCharacters.length">
                    <div class="p-8">
                      <p class="text-center text-slate-400">
                        No character name with the search input
                      </p>
                    </div>
                  </section>
                  <section v-else>
                    <a
                      role="button"
                      class="
                        hover:bg-gray-100
                        p-2
                        dark:hover:bg-gray-800
                        rounded-md
                        flex
                      "
                      v-for="(char, index) in filteredCharacters"
                      :key="index"
                      @click="gotoCharacter(char)"
                    >
                      <p class="flex-auto">{{ char.name }}</p>
                      <span>
                        <i class="icon-eye text-sm"></i>
                      </span>
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <footer
              class="flex-none w-full px-4 py-2 border-t dark:border-gray-800"
            >
              <p class="text-right text-xs">{{ $t("made_by_ayinde_sodiq") }}</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {
    show: Boolean,
  },

  data() {
    return {
      searchText: "",
    };
  },

  methods: {
    ...mapMutations(["setShowSearch", "setCharacter", "setShowMenu"]),
    ...mapActions(["getFilterChars"]),
    gotoCharacter(char){
      this.setCharacter(char)
      this.setShowSearch(false)
      this.setShowMenu(false)
    }
  },

  computed: {
    ...mapState(["filteredCharacters"]),
  },

  watch: {
    searchText: function () {
      this.getFilterChars(this.searchText);
    },
  },
};
</script>