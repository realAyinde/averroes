<template>
  <div>
    <div class="h-screen relative w-full">
      <AdminHeader />
      <div class="relative h-full pt-12">
        <Menu />
        <div class="h-full md:pl-60 p-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../../components/admin/menu.vue";
import AdminHeader from "../../components/admin/AdminHeader.vue";
export default {
  components: { AdminHeader, Menu },
};
</script>