<template>
	<nav id="sidenav">
		<ul>
			<li @click="setCurrentScreen('Users')" :class="isActived('Users')">
				<FontAwesomeIcon icon="user" />
				<span>Users</span>
			</li>
			<li @click="setCurrentScreen('Musics')" :class="isActived('Musics')">
				<FontAwesomeIcon icon="music" />
				<span>Musics</span>
			</li>
			<li @click="setCurrentScreen('UserMusics')" :class="isActived('UserMusics')">
				<FontAwesomeIcon icon="headphones-alt" />
				<span>User Musics</span>
			</li>
			<li @click="setCurrentScreen('ProfileMusics')" :class="isActived('ProfileMusics')">
				<FontAwesomeIcon icon="file-audio" />
				<span>Profile Musics</span>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				currentScreen: 'Users'
			}
		},
		methods: {
			setCurrentScreen(screen) {
				this.currentScreen = screen;
				this.$emit('set-current-screen', screen);
			},
			isActived(option) {
				return {
					active: this.currentScreen === option
				}
			}
		},
	}
</script>

<style scoped>
	#sidenav {
		background-color: rgb(41, 39, 40);
		padding: 25px;
		width: 220px;
		color: rgb(240, 240, 240);
		height: 100vh;
		font-size: 1.5rem;
	}
	#sidenav > ul {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	#sidenav > ul > li {
		cursor: pointer;
		padding: 18px 12px;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		text-align: center;
		user-select: none;
	}
	#sidenav > ul > li:hover, .active {
		color: white;
		background-color: rgba(56, 54, 55, 0.349);
		border-left-style: solid;
		border-left-color: #107c10;
		border-left-width: 8px;
		transition: 0.33s;
		border-top-right-radius: 10%;
		border-bottom-right-radius: 10%;
	}
</style>