<template>
	<div id="app">
		<Sidebar @set-current-screen="setCurrentScreen"/>
		<div id="main-content">
			<Musics v-show="currentScreen == 'Musics'" />
			<Users v-show="currentScreen == 'Users'" />
			<UserMusics v-show="currentScreen == 'UserMusics'" />
		</div>
	</div>
</template>

<script>
	import Musics from './components/Musics';
	import Sidebar from './components/Sidebar';
	import UserMusics from './components/UserMusics';
	import Users from './components/Users';

	export default {
		components: {
			Musics, Sidebar, UserMusics, Users
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