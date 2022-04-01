<template>
  <div>
    <div class="h-screen relative w-full">
      <AdminHeader />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AdminHeader from "../../components/admin/AdminHeader.vue";
export default {
  components: { AdminHeader },
};
</script>