<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around" @submit="createUserMusic">
                <h2>Create User Music</h2>
                <input type="text" placeholder="user id" v-model="userId">
                <input type="email" placeholder="music id" v-model="musicId">
                <button type="submit">Create</button>
            </form>
        </div>
        <div class="result flex column" id="database-search">
            <h2>Users Musics in database</h2>
            <div class="scroll">
                <div class="unity" v-for="userMusic of userMusics" :key="userMusic">
                    <div class="field">
                        <strong>user name: </strong>
                        {{userMusic.user_name}}
                    </div>
                    <div class="field">
                        <strong>music name: </strong>
                        {{userMusic.music_name}}
                    </div>
                    <div class="field">
                        <strong>music name: </strong>
                        {{userMusic.artist}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BackgroundHandler from '../background_handlers/BackgroundHandler'
    import alert from '../utils/alert';
    const userMusics = new BackgroundHandler('user-musics');

    export default {
        data() {
            return {
                userId: '',
                musicId: '',
                userMusics: []
            }
        },
        computed: {
            userMusic() {
                return {
                    userId: this.userId,
                    musicId: this.musicId
                }
            }
        },
        mounted() {
            this.refreshUserMusics();
        },
        methods: {
            async createUserMusic(evt) {
                evt.preventDefault();
                if (this.userId && this.musicId) {
                    try {
                        await userMusics.create(this.userMusic);
                        this.refreshUserMusics();
                        alert.fire('success', 'User music created successfully');
                    } catch (error) {
                        alert.fire('error', error);
                    }
                } else {
                    alert.fire('error', 'Please insert the values in the fields correctly');
                }
            },
            async refreshUserMusics() {
                this.userMusics = await userMusics.list();
            }   
        }
    }
</script>