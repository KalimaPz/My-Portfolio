<template>
  <div
    class="
      mx-4
      my-4
      p-4
      flex 
      flex-col
      xl:flex-row
      justify-between
      bg-gray-800
      rounded-2xl
      hover:shadow-2xl
      duration-700
    "
  >
    <div class="self-center my-2">
      <img
        class="w-24 xl:w-20 rounded-lg shadow-md"
        :src="require(`../assets/${icon}`)"
      />
    </div>
    <div class="flex flex-col ml-4 justify-center text-white">
      <div class="text-center xl:text-left">{{ subtitle }}</div>
      <div class="text-center xl:text-left">{{ title }}</div>
      <div class="text-center xl:text-left">{{ period }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Work",
  props: ["icon", "title", "subtitle", "period", "detail"],
};
</script>

<style></style>
