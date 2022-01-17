<template>
  <div class="flex flex-col p-4  w-full my-2 mx-2 bg-gray-100 rounded-lg 
  
  
  lg:h-1/2
  xl:h-1/2
  
  ">
    <div> 
      <img class="w-16 h-16  mx-auto my-4" :src="require(`../assets/icons/${image}`)" />
      </div>
      <div class="text-center text-gray-700 p-2"><b>{{ role }}</b></div>
    <div class="text-gray-600 px-4">
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