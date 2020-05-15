<template>
	<nav id="sidenav">
		<ul>
			<li>
				<FontAwesomeIcon icon="user" />
				<span>Users</span>
			</li>
			<li>
				<FontAwesomeIcon icon="music" />
				Musics
			</li>
			<li>
				<FontAwesomeIcon icon="" />
				ProfileMusics
			</li>
			<li>
				<FontAwesomeIcon icon="" />
				UserMusics
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
			
	}
</script>

<style scoped>
	#sidenav {
		background-color: rgb(41, 39, 40);
		padding: 25px;
		width: 220px;
		color: rgb(240, 240, 240);
		height: 100vh;
		font-size: 1.6rem;
	}
	#sidenav > ul {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	#sidenav > ul > li {
		cursor: pointer;
		padding: 15px;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	#sidenav > ul > li:hover {
		color: white;
		background-color: rgba(56, 54, 55, 0.349);
		border-left-style: solid;
		border-left-color: brown;
		border-left-width: 8px;
		transition: 0.3s;
		border-top-right-radius: 10%;
		border-bottom-right-radius: 10%;
	}
</style>