<template>
  <div class="flex flex-col">
    <LandingPage />
    <InfoSection />
  </div>
</template>

<script>
import InfoSection from "../views/home/info_section.vue";
import LandingPage from "../views/LandingPage.vue";

export default {
  name: "Home",
  components: {
    InfoSection,
    LandingPage,
  },
};
</script>
<style scoped>
</style>