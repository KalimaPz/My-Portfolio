<template>
  <div class="bg-gray-800 relative w-screen h-screen">
    <div class="h-screen flex flex-col justify-center xl:flex-row ">
      <div
        class="
          self-center
          justify-between
          profile
          rounded-3xl
          bg-blue-300
          shadow
          h-64
          w-64
          bg-cover
          xl:h-96
           xl:w-72
        "
      ></div>

      <div class="my-8  mx-12 self-center">
        <div class="text-white  mx-auto text-center text-3xl xl:text-4xl">
          Donnukrit Satirakul<br />
          <div class="text-xl py-2 xl:3xl">Software Engineer</div>
        </div>
        <div class="text-white text-center">
          {{ personalStatement }}
        </div>
        <div class="flex flex-row justify-evenly my-4">
          <button class="bg-green-500 px-4 py-3 rounded text-white">Get Started</button>
          <button class="text-white">View My Work</button>
        </div>

        <div class="flex flex-row justify-between mx-8 my-8">
          <font-awesome-icon
            class="social-icon"
            size="3x"
            :icon="['fab', 'linkedin']"
          />
          <font-awesome-icon
            class="social-icon"
            size="3x"
            :icon="['fab', 'github']"
          />
          <font-awesome-icon
            class="social-icon"
            size="3x"
            :icon="['fab', 'medium']"
          />
          <font-awesome-icon
            class="social-icon"
            size="3x"
            :icon="['fab', 'instagram-square']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigator from "../components/navigator.vue";

export default {
  name: "LandingPage",
  components: {
    // Navigator,
  },
  data: () => {
    return {
      personalStatement: "Seize the Day. Never Stop to Learn",
    };
  },
};
</script>

<style scoped>
.social:hover {
  color: white;
}
.profile {
  background-image: url("../assets/profile.png");
}
</style>