<template>
	<div id="headnav">
		<div id="nav-left" class="nav-lr">
			<a class="nav-l-item" v-for="(nav, index) in navs" @click="menuclick(index), linkroute(index)" :href="nav.href" :class="{'active': idx == index}">{{nav.title}}</a>
		</div>
		<div id="nav-right" class="nav-lr">
			<showDateTime></showDateTime>
		</div>
	</div>
</template>
<script>
	import showDateTime from './showDateTime.vue'
	
	export default {
		name: 'HeadNav',
		props: {},
		components: { showDateTime },
		data() {
			return {
				idx: 0,//默认0
				navs: [
					{title: 'news',href: '#'},
					{title: 'blogs',href: '#'},
					{title: 'pics',href: '#'},
					{title: 'thinkings',href: '#'},
					{title: 'jokes',href: '#'}
				],
				nowDate: ""
			}
		},
		methods: {
			menuclick(index) {
				this.idx = index
			},
			linkroute(index) {
				if(index == 0){
					this.$router.push('/')
				}else if(index == 1) {
					this.$router.push('/blogs')
				}else if(index == 2) {
					this.$router.push('/pics')
				}else if(index == 3) {
					this.$router.push('/thinkings')
				}else if(index == 4) {
					this.$router.push('/jokes')
				}
			}
		}
	}
</script>
<style scoped>
	#headnav {
		position: relative;
		width: 1190px;
		height: 60px;
		overflow: hidden;
		margin: 0 auto;
		background: rgba(0,0,0,.5);
	}

	.nav-lr {
		height: 60px;
		line-height: 60px;
		text-align: left;
	}

	#nav-left {
		float: left;
		width: 790px;
		padding: 0 15px;
	}

	#nav-right {
		float: right;
		width: 400px;
		text-align: right;
		padding-right: 15px;
		color: #ffffff;
	}
	.nav-l-item {
		padding: 0 10px;
		color: #ffffff;
		font-size: 18px;
		letter-spacing: 1px;
		text-decoration: line-through;
	}
	.nav-l-item:hover {
		background-color: #ffffff;
		color: rgba(0,0,0,.5);
	}
	.nav-l-item.active {
		background-color: #ffffff;
		color: rgba(0,0,0,.5);
	}
</style>
