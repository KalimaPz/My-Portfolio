<template>
<div class="h-screen">
  <div class="xl:h-1/2  flex flex-col xl:flex-row">
        <Specialization
          class="self-center "
          title="Mobile Applicaion"
          image="user-interface.png"
          role="Mobile"
          :desc="mobile_desc"
        />
        <Specialization
          class="self-center "
          title="Front-End"
          image="website-design.png"
          role="Front End"
          :desc="front_desc"
        />
        <Specialization
          class="self-center"
          title="Scrum"
          image="scrum.png"
          role="Workflow Management"
          desc="Experienced in SCRUM Software Project management and bussiness workflow tool like Asana, Trello"
        />
        <Specialization
          class="self-center"
          title="Back-End"
          image="backend.png"
          role="Backend"
          :desc="back_desc"
        />
  </div>
  <div class="mx-8 xl:h-1/2  flex flex-col  xl:flex-row xl:justify-evenly">
        <div class="self-center my-4">
          <img class="skills flutter" src="../../assets/skills/flutter.png" />
        </div>
        <div class="self-center my-4"><img class="skills vue" src="../../assets/skills/vue.png" /></div>
        <div class="self-center my-4">
          <img class="skills react" src="../../assets/skills/react.png" />
        </div>
        <div class="self-center my-4">
          <img class="skills fast" src="../../assets/skills/fastapi.png" />
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

<style scoped>
.skills {

}
.flutter {
  
  height: 75px;
}

.vue {
  height: 75px;
}

.react {

  height:75px;
}

.fast {
  height: 75px;
}
</style>