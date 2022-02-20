<template>
  <transition name="modal">
    <div v-if="show" class="transition-opacity duration-300 fixed top-0 bottom-0 left-0 right-0 z-50 backdrop-blur-2xl">
      <div class="h-full w-full bg-gray-200/50">
        <div class="h-full w-full px-4 sm:px-12 pt-8 md:pt-24 md:pb-24">
          <div
            class="
            modal-container
            transition-all duration-300
              rounded-lg
              w-full
              max-h-full max-w-3xl
              mx-auto
              bg-white
              flex flex-col
            "
          >
            <header
              class="flex-none w-full flex p-4 gap-4 justify-center border-b"
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
                  placeholder="Search Averroes"
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
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Medusa</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Kakanfo</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Medusa</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Kakanfo</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Thor</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span> </a
                  ><a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Zaria</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Elemosho</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Ogunmola</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Balogun</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Elemosho</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Ogunmola</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                  <a
                    role="button"
                    class="hover:bg-gray-100 p-2 rounded-md flex"
                  >
                    <p class="flex-auto">Balogun</p>
                    <span>
                      <i class="icon-eye text-sm"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <footer class="flex-none w-full px-4 py-2 border-t">
              <p class="text-right text-xs">Made by Ayinde Sodiq</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    show: Boolean,
  },

  methods: {
    ...mapMutations(["setShowSearch"])
  }
};
</script>