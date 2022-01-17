<template>
  <div class="h-screen flex flex-col">
    <div class="h-1/2 flex flex-col">
      <div class="text-2xl px-12 py-8">Specialization</div>
      <div class="flex flex-row justify-evenly">
        <Specialization
          class="w-1/5 self-center"
          title="Mobile Applicaion"
          image="user-interface.png"
          :desc="mobile_desc"
        />
        <Specialization
          class="w-1/5 self-center"
          title="Front-End"
          image="website-design.png"
          :desc="front_desc"
        />
        <Specialization
          class="w-1/5 self-center"
          title="Scrum"
          image="scrum.png"
          desc="Experienced in SCRUM Software Project management and bussiness workflow tool like Asana, Trello"
        />
        <Specialization
          class="w-1/5 self-center"
          title="Back-End"
          image="backend.png"
          :desc="back_desc"
        />
      </div>
    </div>
    <div class="h-1/2 flex flex-col justify-start">
      <div class="text-2xl px-12 py-12">Skills</div>
      <div class="flex flex-row justify-evenly">
        <img class="h-24" src="../../assets/skills/flutter.png" />
        <img class="h-24" src="../../assets/skills/vue.png" />
        <img class="h-24" src="../../assets/skills/react.png" />
        <img class="h-24" src="../../assets/skills/fastapi.png" />
      </div>
      <!-- <div class="text-xl px-16 py-12 flex flex-row justify-end text-blue-700">
        View More
      </div> -->
      <button @click="toggleDialog = !toggleDialog">More</button>
      <div
        class="w-1/2 h-1/2 bg-gray-300 absolute transition-opacity duration-300"
        v-if="toggleDialog"
      >
        s
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
      toggleDialog: false,
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