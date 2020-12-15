<template>
	<h3>NewsDetail</h3>
	<div class="content">
		This page is a detail describe for News.You can see more infomations than News page.
	</div>
</template>

<script>
	export default {
		name: 'NewsDetail',
		data() {
			return {
				newsorder: ""
			}
		},
		mounted() {
			let self = this;
			this.newsorder = self.$route.query.order;
		}
	}
</script>

<style>
</style>
