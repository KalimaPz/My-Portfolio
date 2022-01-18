<template>
  <div class="flex flex-col">
    <LandingPage />

      <InfoSection id="element"/>
      <Personal ref="personal" />
      
    
  </div>
</template>

<script>
import InfoSection from "../views/home/info_section.vue";
import LandingPage from "../views/LandingPage.vue";
import Personal from "../views/home/personal.vue";

   var VueScrollTo = require('vue-scrollto');
export default {
  name: "Home",
  components: {
    InfoSection,
    LandingPage,
    Personal,
  },
  methods : {
 scrollTo() {
   console.log('scr')

 
VueScrollTo.scrollTo('#element', 1222 )
 
 }
  }
};
</script>
<style scoped>
</style>