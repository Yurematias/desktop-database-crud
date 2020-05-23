<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around" @submit="createUserMusic">
                <h2>Create User Music</h2>
                <input placeholder="user id" v-model="userId">
                <input placeholder="music id" v-model="musicId">
                <button type="submit">Create</button>
            </form>
        </div>
        <div class="result flex column" id="database-search">
            <h2>Users Musics in database</h2>
            <div class="scroll">
                <div class="unity" v-for="userMusic of userMusics" :key="userMusic.user_id + userMusic.music_id">
                    <div class="field">
                        <strong>user name: </strong>
                        {{userMusic.user_name}}
                    </div>
                    <div class="field">
                        <strong>music name: </strong>
                        {{userMusic.music_name}}
                    </div>
                    <div class="field">
                        <strong>artist name: </strong>
                        {{userMusic.artist}}
                    </div>
                    <div class="flex justify-center" id="btn-delete" @click="deleteUserMusic(userMusic)">
                        <span>delete</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BackgroundHandler from '../background_handlers/BackgroundHandler'
    import alert from '../utils/alert';
    const userMusics = new BackgroundHandler('user-music');

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
                        alert.fire('error', "One of the id's doesn't not belong to any user or music in the database");
                    }
                } else {
                    alert.fire('error', 'Please insert the values in the fields correctly');
                }
            },
            async refreshUserMusics() {
                this.userMusics = await userMusics.list();
            },
            async deleteUserMusic(userMusic) {
                try {
                    await userMusics.delete({
                        userId: userMusic.user_id,
                        musicId: userMusic.music_id
                    });
                    alert.fire('success', 'User music deleted successfully');
                    this.userMusics = this.userMusics.filter(um => (
                        userMusic.user_id != um.user_id &&
                        userMusic.music_id != um.music_id
                    ));
                } catch (error) {
                    alert.fire('error', 'Sorry, it was not possible to delete the user music');
                }
            }
        }
    }
</script>

<style scoped>
    section > .result .unity {
        height: 80px;
    }
</style>