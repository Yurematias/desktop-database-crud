import Vue from 'vue'
import App from './vue/App.vue'

import './vue/global.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMusic, faHeadphonesAlt, faFileAudio } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUser, faMusic, faHeadphonesAlt, faFileAudio);
 
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
