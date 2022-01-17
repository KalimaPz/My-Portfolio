<template>
  <div class="h-screen flex flex-col">
    <div class="h-1/2 px-12 flex flex-col justify-evenly">
      <div class="text-2xl">Education</div>
      <div class="flex flex-row xs:flex-col sm:">
        <Educate
          icon="education.png"
          title="Prince of Songkhla University"
          subtitle="Phuket, Thailand"
          period="2016 - 2020"
          :detail="faculty"
          faculty="(Computer Engineering)"
        />
        <Educate
          icon="school.png"
          title="Pakphanang School"
          subtitle="Nakorn Sri Thammarat, Thailand"
          period="2010 - 2016"
          detail="Sci-Math Program"
        />
      </div>
    </div>
    <div class="h-1/2 flex flex-col px-12 justify-evenly">
      <div class="text-2xl">Work Experience</div>
      <div class="flex flex-row">
        <Work
          class="w-1/4"
          icon="do.jpeg"
          title="Software Engineer"
          subtitle="Digital Organic"
          period="1 October 2021 - Current"
          detail="Bangkok, Thailand"
        />
        <Work
          class="w-1/4"
          icon="alicorn.png"
          title="Front-End Developer"
          subtitle="Alicorn Tech"
          period="1 January 2021 - 30 September 2021"
          detail="Muang Phuket, Phuket, Thailand"
        />
        <Work
          class="w-1/4"
          icon="weserve.png"
          title="Mobile Developer"
          subtitle="Weserve"
          period="Aug - Dec 2020"
          detail="Muang Phuket, Phuket, Thailand"
        />
        <Work
          class="w-1/4"
          icon="weserve.png"
          title="Internship"
          subtitle="Weserve"
          period="May - July 2020"
          detail="Muang Phuket, Phuket, Thailand"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Educate from "../../components/educate.vue";
import Work from "../../components/work.vue";

export default {
  name: "Personal",
  components: {
    Educate,
    Work,
  },
  data: () => {
    return {
      faculty: "Bachelor of Engineering\n",
    };
  },
};
</script>

<style>
</style>