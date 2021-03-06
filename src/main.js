import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './assets/tailwind.css'
import './index.css';
import store from './store'
import router from './router'
import VueTailwind from 'vue-tailwind'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {

  TButton,


} from 'vue-tailwind/dist/components';
import { faMedium, faLinkedin, faGithub, faInstagramSquare, } from '@fortawesome/free-brands-svg-icons'
library.add(faMedium, faLinkedin, faGithub, faInstagramSquare)
var VueScrollTo = require('vue-scrollto');

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  container: "body",
  duration: 800,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueTailwind, { TButton })
new Vue({

  store,
  router,
  render: h => h(App)
}).$mount('#app')
