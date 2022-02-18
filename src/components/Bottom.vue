<template>
  <div class="absolute bottom-0 right-2 left-2">
    <div class="flex justify-between px-4">
      <div class="">
        <a
          role="button"
          @click="previousCharacter()"
          class="rounded-full p-2 border border-gray-600"
          ><i class="icon-undo2 text-lg"></i
        ></a>
      </div>
      <transition>
        <h1 class="text-2xl font-bold text-center">
          <span>{{ id }} | </span
          ><span :key="id" class="underline">{{ name }}</span>
        </h1>
      </transition>
      <div class="">
        <a
          role="button"
          @click="nextCharacter()"
          class="rounded-full p-2 border border-gray-600 hover:bg-gray-300"
          ><i class="icon-redo2 text-lg"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["previousCharacter", "nextCharacter"]),
  },

  computed: {
    ...mapState(["current"]),
    name() {
      return this.current.name;
    },
    id() {
      return this.current.id;
    },
  },
};
</script>