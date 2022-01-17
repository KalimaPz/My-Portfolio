<template>

  <div class=" flex flex-col bg-gray-800 ">
    <div>
      <div class="text-xl text-center xl:text-left xl:text-2xl text-white m-12 p-4  bg-gray-800 rounded-lg" ><strong>Education</strong></div>
      <div class="flex flex-col xl:flex-row">
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
    <div class="text-center xl:text-left text-xl xl:text-2xl text-white m-4 p-4 bg-gray-800 rounded-lg" ><strong>Work Experiences</strong></div>
    <div class="
    flex 
    flex-col
    xl:flex-row
    xl:justify-center
    ">
      
     <Work
          
          icon="do.jpeg"
          title="Software Engineer"
          subtitle="Digital Organic"
          period="1 October 2021 - Current"
          detail="Bangkok, Thailand"
        />
        <Work
          
          icon="alicorn.png"
          title="Front-End Developer"
          subtitle="Alicorn Tech"
          period="1 January 2021 - 30 September 2021"
          detail="Muang Phuket, Phuket, Thailand"
        />
        <Work
          
          icon="weserve.png"
          title="Mobile Developer"
          subtitle="Weserve"
          period="Aug - Dec 2020"
          detail="Muang Phuket, Phuket, Thailand"
        />
        <Work
         
          icon="weserve.png"
          title="Internship"
          subtitle="Weserve"
          period="May - July 2020"
          detail="Muang Phuket, Phuket, Thailand"
        />
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