import Vue from 'vue'

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