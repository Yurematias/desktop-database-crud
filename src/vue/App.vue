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
	.flex {
		display: flex;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-around {
		justify-content: space-around;
	}
	.justify-evenly {
		justify-content: space-evenly;
	}
	.column {
		flex-direction: column;
	}
	.align-center {
		align-items: center;
	}
	.align-around {
		align-items: space-around;
	}
	section {
        width: 100%;
    }
    section > .result {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        width: 200px;
        height: 300px;
    }
    section > .forms-div {
        height: 430px;
		user-select: none;
    }
    section > div > form > input {
        border-radius: 5px;
        margin: 2px;
        border-style: solid;
        border-width: 1px;
        border-color: #777;
		font-size: 1.2rem;
        padding: 5px 10px;
        width: 240px;
    }
	section > div > form > button {
		background-color: #107c10;
		font-size: 1.2rem;
        padding: 5px 10px;
        width: 240px;
        margin: 2px;
        border-radius: 5px;
		color: white;
		cursor: pointer;
	}
	section > div > form > button:hover {
		filter: brightness(1.2);
		transition: 0.3s;
	}
</style>