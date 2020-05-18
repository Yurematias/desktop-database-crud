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
        <div class="result flex column">
            <h2>Users in database</h2>
            <div class="scroll">
                <div class="unity" v-for="user of users" :key="user.id">
                    <div>
                        <strong>name: </strong>
                        {{user.name}}
                    </div>
                    <div>
                        <strong>email: </strong>
                        {{user.email}}
                    </div>
                    <div>
                        <strong>password: </strong>
                        {{user.password}}
                    </div>
                    <div>
                        <strong>user id: </strong>
                        {{user.id}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { users } from '../services/bridgeToDesktop';

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                emailForSearch: '',
                passwordForSearch: '',
                users: []
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
        async mounted() {
            this.refreshUsers();
        },
        methods: {
            async refreshUsers() {
                this.users = await users.list();
            },
            async createUser(evt) {
                evt.preventDefault();
                if (this.email && this.name && this.password) {
                    try {
                        await users.create(this.user);
                        this.refreshUsers();
                        this.$swal({
                            title: 'Success',
                            icon: 'success',
                            text: 'User Created Sucefully',
                            timer: 3500
                        });
                    } catch (error) {
                        this.$swal({
                            title: 'Error',
                            icon: 'error',
                            text: error,
                            timer: 3500
                        });
                    }
                } else {
                    this.$swal({
                        title: 'Error',
                        icon: 'error',
                        text: 'Please insert the values in the form correctly',
                        timer: 3500
                    });
                }
            },
            searchUser(evt) {
                evt.preventDefault();
            }
        }
    }
</script>