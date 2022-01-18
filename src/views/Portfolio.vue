<template>
  <div class="bg-gray-800 " >
    <div class="py-4 px-8 text-xl text-white bg-gray-600 bg-opacity-30 shadow-2xl flex flex-row justify-between xl:justify-start">
      <div>
        <button @click="back()" class="bg-green-500 px-8 py-2 rounded-xl xl:mr-12">Back</button>
      </div>
      <div class="self-center">Repositories</div>
    </div>
    <div id="github-project" v-if="!isLoad" class="flex flex-col self-center xl:flex-row xl:flex-wrap xl:justify-center ">
      <div v-for="repo in repos" :key="repo.data" class="self-center">
        <Repository
        :name="repo.name"
        :access="repo.private"
        :language="repo.language"
        :update_at="repo.update_at"
        :isLoad="false"
        />
      </div>
 
    </div>
    <div v-else class="flex flex-col self-center xl:flex-row xl:flex-wrap xl:justify-center ">
      <div v-for="x in 36" :key="x.data" class="self-center">
        <Repository :isLoad="isLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Repository from '../components/repository.vue'
export default {
    name : "Portfolio",
    components : {Repository},
    created () {
      this.getRepos()
    },
    data : () => {
      return {
        repos : [],
        isLoad : true,
      }
    },

    methods : {
      async getRepos() {
        let res = await axios.get(`https://api.github.com/users/KalimaPz/repos`)
        console.log(res.data)
        this.isLoad = false
        this.repos = res.data
      },
      back() {
        this.$router.go(-1)
      }
    }
}
</script>

<style>

</style>