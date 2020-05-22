<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around" @submit="createMusic">
                <h2>Create Music</h2>
                <input type="text" placeholder="artist" v-model="artist">
                <input type="text" placeholder="music name" v-model="name">
                <textarea 
                    cols="30" 
                    rows="5" 
                    v-model="lyrics"
                    placeholder="lyrics"
                >
                </textarea>
                <button>Create</button>
            </form>
            <form class="flex column justify-around" @submit="searchMusic">
                <h2>Search Music</h2>
                <input type="text" placeholder="artist" v-model="artistForSearch">
                <input type="text" placeholder="music name" v-model="nameForSearch">
                <button>Search</button>
            </form>
        </div>
        <div class="result flex column" id="database-search">
            <h2>Musics in database</h2>
            <div class="scroll">
                <div class="unity" v-for="music of musics" :key="music.id">
                    <div class="field">
                        <strong>artist: </strong>
                        {{music.artist}}
                    </div>
                    <div class="field">
                        <strong>name: </strong>
                        {{music.name}}
                    </div>
                    <div class="field">
                        <strong>lyrics: </strong>
                        {{truncateString(music.lyrics, 25) + '...'}}
                    </div>
                    <div class="field">
                        <strong>music id: </strong>
                        {{music.id}}
                    </div>
                    <div class="flex justify-center" id="btn-delete" @click="deleteMusic(music.id)">
                        <span>delete</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import alert from '../utils/alert';
    import AdvBackHandler from '../background_handlers/AdvancedBackgroundHandler';
    import truncateString from '../utils/truncateString';

    const musics = new AdvBackHandler('music');

    export default {
        data() {
            return {
                name: '',
                artist: '',
                lyrics: '',
                nameForSearch: '',
                artistForSearch: '',
                musics: []
            }
        },
        computed: {
            music() {
                return {
                    name: this.name,
                    artist: this.artist,
                    lyrics: this.lyrics
                }
            },
            musicForSearch() {
                return {
                    name: this.nameForSearch,
                    artist: this.artistForSearch
                }
            },
        },
        mounted() {
            this.refreshMusics();
            this.truncateString = truncateString;
        },
        methods: {
            async refreshMusics() {
                this.musics = await musics.list();
            },
            async createMusic(evt) {
                evt.preventDefault();
                if (this.artist && this.name && this.lyrics) {
                    try {
                        await musics.create(this.music);
                        this.refreshMusics();
                        alert.fire('success', 'Music created successfully');
                    } catch (error) {
                        alert.fire('error', error);
                    }
                } else {
                    alert.fire('error', 'Please insert the values in the fields correctly');
                }
            },
            async deleteMusic(musicId) {
                try {
                    await musics.delete(musicId);
                    alert.fire('success', 'Music deleted successfully');
                    this.musics = this.musics.filter(music => music.id != musicId);
                } catch (error) {
                    alert.fire('error', 'Sorry, it was not possible to delete the music');
                }
            },
            async searchMusic(evt) {
                evt.preventDefault();
                if (this.nameForSearch && this.artistForSearch) {
                    try {
                        const music = await musics.search(this.musicForSearch);
                        alert.fire('success', `name: ${music.name} - music id: ${music.id}`, true, 'Music found');
                    } catch (error) {
                        alert.fire('error', '', false, 'Music not found');
                    }
                } else {
                    alert.fire('error', 'Please insert the values in the form correctly');
                }
            },
        }
    }
</script>

<style scoped>
    section {
        margin-top: 20px;
    }
</style>