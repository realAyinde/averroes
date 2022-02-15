<template>
  <div>
    <div class="h-screen relative w-full">
        <Header/>
        <Body/>
    </div>
  </div>
</template>

<script>
import Body from './components/Body.vue';
import Header from './components/Header.vue';
export default {
  components: { Body, Header },
  data() {
    return {};
  },
};
</script>