<template>
  <div class="h-screen flex flex-col justify-center align-middle items-center">
    <div class="max-w-md mx-auto pb-8">
      <div class="text-center">
        <p class="text-2xl">Averroes</p>
        <p class="text-xl">Login</p>
      </div>
      <form action="" class="py-2">
          <div class="max-w-xs mx-auto py-1">
            <label for="username">Username:</label>
            <input type="text" name="username" id="" class="w-full p-1 px-3 outline-none bg-gray-200 rounded-md" />
          </div>
          <div class="max-w-xs mx-auto py-1">
            <label for="password">Password:</label>
            <input type="password" name="password" id="" class="w-full p-1 px-3 outline-none bg-gray-200 rounded-md" />
          </div>
          <div class="flex justify-center py-2">
            <router-link class="p-1 px-4 bg-green-600 rounded-md text-white" to="/admin">Go</router-link>
              <!-- <button class="p-1 px-4 bg-green-600 rounded-md text-white">Go<i class="icon-right"></i></button> -->
          </div>
      </form>
    </div>
  </div>
</template>