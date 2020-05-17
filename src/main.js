import Vue from 'vue'
import App from './vue/App.vue'

import './vue/global.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMusic, faHeadphonesAlt, faFileAudio } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faUser, faMusic, faHeadphonesAlt, faFileAudio);
 
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(VueSweetalert2, {
	confirmButtonColor: '#107c10',
	cancelButtonColor: '#c33217',
});
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');