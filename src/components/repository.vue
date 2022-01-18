<template>
 <div>
      <div v-if="!isLoad" class="flex flex-col rounded p-4 m-4 bg-white w-96 h-32">
      <div class="text-center">{{ name }}</div>
      <div v-if="access"
        class=""
      >Private</div>
      <div v-else
        class="self-center 
        my-2 rounded-lg
        w-2/5 
        text-center 
        border-0 
        bg-green-100 
        border-green-300 
        text-green-800
        "
      >Public</div>
      <div class="text-center">{{ language }}</div>
      <div class="text-center">{{ update_at }}</div>
      
  </div>
  <div v-else class="flex flex-col rounded p-4 m-4 bg-gray-600 w-96 h-32 animate-pulse "></div>
 </div>
</template>

<script>
export default {
    name : "Repository",
    props : [
        "isLoad",
        "name",
        "access",
        "language",
        "update_at",
    ]
}
</script>

<style>

</style>