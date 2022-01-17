<template>
  <div
    class="
    flex 
    flex-col 
   
   justify-center
    h-64 
    xl:flex-row 
    xl:w-1/2 
    xl:justify-evenly
    mx-4 
    my-4 educate-card hover:shadow-2xl rounded-2xl"
  >
    <div class="
    flex 
    flex-row
    w-12 
    self-center
    xl:w-24 m-4  
     ">
      <img  :src="require(`../assets/${icon}`)" />
    </div>
    <div class="flex xl:my-auto flex-col ">
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
