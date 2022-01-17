<template>
  <div class="flex flex-col p-4 justify-between w-full h-1/2 mx-4">
    <div> 
      <img class="w-16 h-16  mx-auto my-8" :src="require(`../assets/icons/${image}`)" />
      </div>
      <div class="text-center text-gray-700"><strong>{{ role }}</strong></div>
    <div class="text-gray-600">
      {{ desc }}
    </div>
  </div>
 
</template>

<script>
export default {
  name: "Specialization",
  props: ["title", "desc", "image","role"],
};
</script>

<style>
</style>