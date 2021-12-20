<template>
  <div class="flex flex-col h-2/3">
    <div class="flex flex-row justify-center">
      <img class="w-16 h-16 my-5" :src="require(`../assets/icons/${image}`)" />
    </div>
    <div class="flex flex-row justify-center">{{ title }}</div>
    <div class="flex flex-row px-4 py-4 text-center text-gray-500">
      {{ desc }}
    </div>
    <div>{{ imagePath }}</div>
  </div>
</template>

<script>
export default {
  name: "Specialization",
  props: ["title", "desc", "image"],
};
</script>

<style>
</style>