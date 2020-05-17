<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around" @submit="createUser">
                <h2>Create User</h2>
                <input type="text" placeholder="name" v-model="name">
                <input type="email" placeholder="email" v-model="email">
                <input type="text" placeholder="password" v-model="password">
                <button type="submit">Create</button>
            </form>
            <form class="flex column justify-around" @submit="searchUser">
                <h2>Search User</h2>
                <input type="email" placeholder="email" v-model="emailForSearch">
                <input type="text" placeholder="password" v-model="passwordForSearch">
                <button type="submit">Search</button>
            </form>
        </div>
        <div class="result">

        </div>
    </section>
</template>

<script>
    import { ipcRenderer } from 'electron'

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                emailForSearch: '',
                passwordForSearch: ''
            }
        },
        computed: {
            user() {
                return {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            }
        },
        created() {
            ipcRenderer.on('user-created', (evt, resp) => alert(resp));
            ipcRenderer.on('user-not-created', (evt, resp) => alert(resp));
        },
        methods: {
            createUser(evt) {
                evt.preventDefault()
                ipcRenderer.send('create-user', this.user);
            },
            searchUser(evt) {
                evt.preventDefault();
            }
        }
    }
</script>