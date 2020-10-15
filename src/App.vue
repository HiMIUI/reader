<template>
	<HeadNav></HeadNav>
	<div id="body">
		<div id="body-left" class="body-item">
			<RouterView />
		</div>
		<div id="body-right" class="body-item"> </div>
	</div>
</template>
<script>
	import HeadNav from './components/HeadNav.vue'
	
	export default {
		name: 'App',
		components: {
			HeadNav
		}
	}
</script>
<style scoped>
	#body {
		position: relative;
		width: 1190px;
		margin: 0 auto;
	}

	.body-item {
		padding: 20px;
	}

	#body-left {
		float: left;
		width: calc(100% - 222px);
		background-color: #ffffff;
	}

	#body-right {
		float: right;
		width: 220px;
		min-height: 520px;
		background-color: #f8f8f8;
	}
</style>
