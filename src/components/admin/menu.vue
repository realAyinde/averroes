<template>
  <nav class="absolute top-12 bottom-0 w-[14rem] z-10 bg-gray-100">
  <!-- <nav class="h-full w-[14rem]"> -->
    <div class="border-r max-w-[14rem] h-full">
      <div class="flex flex-col justify-between p-3 text-xl h-full">
        <div class="flex flex-col gap-4">
          <div><router-link class="p-2 px-4 rounded-full hover:bg-gray-200 w-fit flex gap-2 align-middle" to="/admin"><span><i class="w-8 icon-fire"></i></span><span>Dashboard</span></router-link></div>
          <div><a class="p-2 px-4 rounded-full hover:bg-gray-200 w-fit flex gap-2 align-middle" href=""><span><i class="w-8 icon-bullhorn"></i></span><span>Characters</span></a></div>
        </div>
        <div class="py-4"><router-link class="block p-2 px-4 rounded-full hover:bg-blue-500 text-center bg-blue-400 text-white" to="/admin/new">Add</router-link></div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>