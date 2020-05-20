import Vue from 'vue'
import App from './vue/App.vue'
import './vue/global.css';
 
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');