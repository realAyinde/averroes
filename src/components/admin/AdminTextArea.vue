<template>
  <div>
    <div class="">
      <div class="bg-gray-200 rounded-lg p-1">
        <ul class="flex gap-1">
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">B</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">I</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">#</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">@</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">O</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">"</span>
            </button>
          </li>
          <li>
            <button class="p-1 px-3 rounded-md hover:bg-gray-500 border border-gray-500">
              <span class="block">+</span>
            </button>
          </li>
        </ul>
      </div>
      <textarea
        class="w-full h-auto bg-gray-200 p-3 rounded-md outline-none my-2"
        name=""
        id=""
        cols="30"
        rows="12"
      ></textarea>
      <div class="flex justify-between">
          <button class="p-1 px-4 rounded-md duration-300 text-white hover:bg-green-600 bg-green-400">Save</button>
          <button class="p-1 px-4 rounded-md duration-300 text-white hover:bg-blue-600 bg-blue-400">Preview</button>
          <button class="p-1 px-4 rounded-md duration-300 text-white hover:bg-red-600 bg-red-400">Published</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>