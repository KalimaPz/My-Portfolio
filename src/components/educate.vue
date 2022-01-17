<template>
  <div
    class="flex flex-row h-64 mx-4 educate-card hover:shadow-2xl rounded-2xl"
  >
    <div class="w-2/5 flex flex-row justify-center">
      <img class="w-2/5 self-center" :src="require(`../assets/${icon}`)" />
    </div>
    <div class="w-3/5 flex flex-col my-auto">
      <div class="self-center text-xl">{{ title }}</div>
      <div class="self-center">{{ subtitle }}</div>
      <div class="self-center">{{ period }}</div>
      <div class="self-center">{{ detail }}</div>
      <div class="self-center">{{ faculty }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Educate",
  props: ["icon", "title", "subtitle", "period", "detail", "faculty"],
};
</script>

<style></style>
