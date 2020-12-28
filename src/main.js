import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbtack)
library.add(faBriefcase)
library.add(faLightbulb)
library.add(faEnvelopeOpenText)
library.add(faLinkedin)
library.add(faLinkedinIn)
library.add(faFileDownload)
library.add(faLink)
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon);

import AOS from 'aos';
import "aos/dist/aos.css";

new Vue({
  render: h => h(App),
}).$mount('#app').AOS = new AOS.init({});
