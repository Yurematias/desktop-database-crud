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
        <div class="result flex column" id="database-search">
            <h2>Users in database</h2>
            <div class="scroll">
                <div class="unity" v-for="user of users" :key="user.id">
                    <div class="field">
                        <strong>name: </strong>
                        {{user.name}}
                    </div>
                    <div class="field">
                        <strong>email: </strong>
                        {{user.email}}
                    </div>
                    <div class="field">
                        <strong>password: </strong>
                        {{user.password}}
                    </div>
                    <div class="field">
                        <strong>user id: </strong>
                        {{user.id}}
                    </div>
                    <div class="flex justify-center" id="btn-delete" @click="deleteUser(user.id)">
                        <span>delete</span>
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
            },
            userForSearch() {
                return {
                    email: this.emailForSearch,
                    password: this.passwordForSearch
                }
            }
        },
        mounted() {
            this.refreshUsers();
        },
        methods: {
            sweetAlert(type, text, infinite, title) {
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
            async deleteUser(userId) {
                try {
                    await users.delete(userId);
                    this.sweetAlert('success', 'User deleted successfully');
                    this.users = this.users.filter(user => user.id != userId);
                } catch (error) {
                    this.sweetAlert('error', 'Sorry, it was not possible to delete the user');
                }
            },
            async refreshUsers() {
                this.users = await users.list();
            },
            async createUser(evt) {
                evt.preventDefault();
                if (this.email && this.name && this.password) {
                    try {
                        await users.create(this.user);
                        this.refreshUsers();
                        this.sweetAlert('success', 'User created successfully');
                    } catch (error) {
                        this.sweetAlert('error', error);
                    }
                } else {
                    this.sweetAlert('error', 'Please insert the values in the fields correclty')
                }
            },
            async searchUser(evt) {
                evt.preventDefault();
                if (this.emailForSearch && this.passwordForSearch) {
                    try {
                        const user = await users.search(this.userForSearch);
                        this.sweetAlert('success', `name: ${user.name} - user id: ${user.id}`, true, 'User found');
                    } catch (error) {
                        this.sweetAlert('error', '', false, 'User not found');
                    }
                } else {
                    this.sweetAlert('error', 'Please insert the values in the form correctyl');
                }
            },
        }
    }
</script>