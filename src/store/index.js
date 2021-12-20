import Vue from 'vue'
import Vuex from 'vuex'
import { getProfile } from '../modules/fetch';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      avatar: "",
    }
  },
  mutations: {

  },
  actions: {
    async setAvatar() {
      let avatar = await getProfile();
      this.state.profile.avatar = avatar.data
    }
  },
  modules: {
  }
})
