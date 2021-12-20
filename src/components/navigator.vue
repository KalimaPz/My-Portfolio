<template>
  <div id="navbar" class="flex flex-row px-10 h-16">
    <div class="w-1/2 flex flex-row self-center text-white">My Website</div>
    <div class="w-1/2 flex flex-row justify-between self-center text-white">
      <div class="">Info</div>
      <div class="">Skills</div>
      <div class="">Experience</div>
      <div class="">Showcase</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
};
</script>

<style>
#navbar {
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* backdrop-filter: blur(2px); */
  letter-spacing: 1.45px;
}
</style>
