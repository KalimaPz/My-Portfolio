<template>
  <div
    class="
      flex flex-col
      justify-between
      bg-gray-800
      py-8
      mx-4
      rounded-2xl
      hover:shadow-2xl
      duration-700
    "
  >
    <div class="self-center my-2">
      <img
        class="w-24 rounded-lg shadow-md"
        :src="require(`../assets/${icon}`)"
      />
    </div>
    <div class="flex flex-col text-white">
      <div class="text-center">{{ subtitle }}</div>
      <div class="text-center">{{ title }}</div>
      <div class="text-center">{{ period }}</div>
    </div>
  </div>
  <!-- <div class="flex flex-col h-64 mx-1 shadow educate-card">
    <div class="flex flex-row justify-center h-2/4">
      <img class="my-4" :src="require(`../assets/${icon}`)" />
    </div>
    <div class="h-2/4 flex flex-col justify-center">
      
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Work",
  props: ["icon", "title", "subtitle", "period", "detail"],
};
</script>

<style></style>
