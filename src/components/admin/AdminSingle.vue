<template>
  <div class="absolute top-16 bottom-4 flex w-full">
    <div class="md:grid md:grid-cols-2 gap-2 h-full w-full px-4 pb-4 hidden">
      <div>
        <div>
          <input class="w-full" type="file" name="" id="">
        </div>
      </div>
      <div class="relative h-full">
            <div>
                  <nav class="flex text-center">
                    <div class="basis-1/4 rounded-md hover:bg-gray-200"><a class="block p-1" role="button" href="">About</a></div>
                    <div class="basis-1/4 rounded-md hover:bg-gray-200 bg-gray-200"><a class="block p-1" role="button" href="">Ability</a></div>
                    <div class="basis-1/4 rounded-md hover:bg-gray-200"><a class="block p-1" role="button" href="">Appearance</a></div>
                    <div class="basis-1/4 rounded-md hover:bg-gray-200"><a class="block p-1" role="button" href="">Others</a></div>
                  </nav>
                </div>
        <div class="absolute top-10 left-0 bottom-0 right-0">
          <div
            class="
              relative
              w-full
              h-full
              shadow-sm
              rounded-3xl
              text-lg
            "
          >
            
            <div class="w-full h-full">
              <div class="overflow-auto w-full h-full">
                <AdminTextArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminTextArea from "./AdminTextArea.vue";
export default {
  components: { AdminTextArea },
};
</script>