<template>
	<div id="app">
		<Sidebar @set-current-screen="setCurrentScreen"/>
		<div id="main-content">
			<Musics v-if="currentScreen == 'Musics'" />
			<ProfileMusics v-else-if="currentScreen == 'ProfileMusics'" />
			<Users v-else-if="currentScreen == 'Users'" />
			<UserMusics v-else />
		</div>
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

<style scoped>
	#app > #main-content {
		padding-left: 220px;
		width: 100%;
	}
</style>