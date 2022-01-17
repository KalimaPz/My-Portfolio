<template>
  <div class="flex flex-col">
    <LandingPage />
    
      <InfoSection />

      <!-- <Personal /> -->
    
  </div>
</template>

<script>
import InfoSection from "../views/home/info_section.vue";
import LandingPage from "../views/LandingPage.vue";
// import Personal from "../views/home/personal.vue";
export default {
  name: "Home",
  components: {
    InfoSection,
    LandingPage,
    // Personal,
  },
};
</script>
<style scoped>
</style>