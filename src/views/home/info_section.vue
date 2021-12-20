<template>
  <div class="h-screen w-screen flex flex-col self-center">
    <div class="flex flex-col w-5/6 h-screen shadow mx-auto justify-center">
      <div class="flex flex-col h-1/2 self-center justify-center text-center">
        <div class="mx-auto w-64 h-64 my-12 s">
          <img
            v-if="this.$store.state.profile.avatar != ''"
            class="rounded-full"
            :src="this.$store.state.profile.avatar"
          />
          <div
            class="w-64 h-64 bg-gray-600 rounded-full animate-pulse"
            v-else
          ></div>
        </div>
        <div class="text-3xl my-6">Donnukrit Satirakul</div>
        <div class="text-2xl">Software Engineer</div>
      </div>
      <div class="text-2xl px-12">Specialization</div>
      <div
        class="
          h-1/2
          lg:flex lg:flex-row
          sm:flex sm:flex-col
          justify-between
          px-10
        "
      >
        <Specialization
          class="w-1/3 self-center"
          title="Mobile Applicaion"
          image="user-interface.png"
          :desc="mobile_desc"
        />
        <Specialization
          class="w-1/3 self-center"
          title="Front-End"
          image="website-design.png"
          :desc="front_desc"
        />
        <Specialization
          class="w-1/3 self-center"
          title="Back-End"
          image="backend.png"
          :desc="back_desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Specialization from "../../components/specialization.vue";
export default {
  name: "InfoSection",
  components: {
    Specialization,
  },
  data: () => {
    return {
      mobile_desc:
        "Expert in Flutter Mobile Framework for 3 years. Able to develop both of IOS and Android platform.",
      front_desc:
        "Well-known in Vue Framework for developed web application. Able to use React sometimes including CSS Framework such like Vuetify , Tailwind and Ant Design",
      back_desc:
        "Beginner in FastAPI(Python) , Express (Node.js) well-known CRUD Operation Basic API and No-SQL (MongoDB)",
    };
  },
};
</script>

<style>
</style>