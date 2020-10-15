<template>
	<div class="news" v-for="(newinfo, index) in news">
		<div class="news-title">
			<div class="title">{{newinfo.title}}</div>
			<div class="date">{{newinfo.pubDate}}</div>
		</div>
		<div class="news-content">{{newinfo.content.substr(0,100)}}..<span class="news-more" @click="newsMore()">查看更多</span></div>
		<div class="news-records">
			<span>view(100)</span><span>star(10)</span>
		</div>
	</div>
	<StepPages></StepPages>
</template>
<script>
	import StepPages from './StepPages.vue'

	export default {
		name: 'news',
		components: {
			StepPages
		},
		data() {
			return {
				news: [
					{title: 'JavaScript', pubDate: '2020-10-14', content: 'Content for descriptions, here\'s some useful suggestions for you.'},
					{title: 'Java', pubDate: '2020-10-14', content: 'Content for descriptions.No hard work, No get.'},
					{title: 'Python', pubDate: '2020-10-14', content: 'Content for descriptions.Life like a boat, take us to anywhere we don not kown.'},
					{title: 'Go', pubDate: '2020-10-14', content: 'Content for descriptions.You must be happiness.'},
					{title: 'PHP', pubDate: '2020-10-14', content: 'Content for descriptions.Hahaha, i just laugh myself.'}
				]
			}
		},
		methods: {
			newsMore() {
				this.$router.push('/newsdetail')
			}
		}
	}
</script>
<style scoped>
	.news {
		padding: 15px;
		border: 1px solid #ffffff;
	}
	.news:hover {
		border: 1px solid rgba(0,0,0,.7);
	}
	.news-title {
		position: relative;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.title {
		float: left;
		font-size: 20px;
		font-weight: bold;
		color: #555555;
	}
	.date{
		float: left;
		font-size: 12px;
		margin-left: 30px;
	}
	.news-content {
		font-size: 14px;
		text-align: left;
		line-height: 30px;
	}
	.news-more {
		margin-left: 5px;
		color: cornflowerblue;
		cursor: pointer;
	}
	.news-records {
		color: #D3D3D3;
		text-align: left;
		font-size: 12px;
	}
	.news-records span {
		margin-right: 10px;
		height: 30px;
		line-height: 30px;
	}
	.news-records span:hover {
		cursor: pointer;
		color: #fc4209;
	}
</style>
