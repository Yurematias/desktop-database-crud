<template>
	<div id="app">
		<Sidebar @set-current-screen="setCurrentScreen"/>
		<Musics v-if="currentScreen == 'Musics'" />
		<ProfileMusics v-else-if="currentScreen == 'ProfileMusics'" />
		<Users v-else-if="currentScreen == 'Users'" />
		<UserMusics v-else />
	</div>
</template>

<script>
	import Musics from './components/Musics';
	import ProfileMusics from './components/ProfileMusics';
	import Sidebar from './components/Sidebar';
	import UserMusics from './components/UserMusics';
	import Users from './components/Users';

	export default {
		components: {
			Musics, Sidebar, ProfileMusics, UserMusics, Users
		},
		data() {
			return {
				currentScreen: 'Users',
			}
		},
		methods: {
			setCurrentScreen(screen) {
				this.currentScreen = screen;
			}
		}
	}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: 'Abel', sans-serif;
	}
	#app {
		display: flex;
	}
</style>