import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2, {
	confirmButtonColor: '#107c10',
	cancelButtonColor: '#c33217',
});

export default new Vue({
    methods: {
        fire(type, text, infinite, title) {
            if (!title) {
                if (type == 'error') {
                    title = 'Error';
                } else {
                    title = 'Success'
                }
            }
            const config = {
                title: title,
                icon: type,
                text,
            }
            if (!infinite) {
                config.timer = 3500;
            }
            this.$swal(config);
        },
    }
})