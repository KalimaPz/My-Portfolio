<template>
  <div class="flex flex-row h-screen w-screen bg-gray-800 relative">
    <Navigator class="absolute w-screen" />
    <div class="w-1/2 flex flex-col justify-center">
      <div
        class="
          profile
          rounded-3xl
          bg-blue-300
          shadow
          w-1/2
          h-1/2
          mx-auto
          my-auto
          bg-cover
        "
      ></div>
    </div>
    <div class="w-1/2 h-1/2 flex flex-col justify-evenly my-auto">
      <div class="text-white text-4xl leading-10">
        Let's Talk About<br />
        Startups That<br />
        People Like
      </div>
      <div class="text-white">
        Morbi eu gravida lectus. Sed id tellus ac risus scelerisque<br />Morbi
        eu gravida lectus. Sed id tellus ac risus scelerisque
      </div>
      <div class="flex flex-row">
        <button class="px-10 py-5 bg-green-400 text-white">Let's Talk</button>
        <button class="px-10 py-5 text-white">View our Work!</button>
      </div>

      <div class="flex flex-row justify-between w-1/2">
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
</template>

<script>
import Navigator from "../components/navigator.vue";

export default {
  name: "LandingPage",
  components: {
    Navigator,
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