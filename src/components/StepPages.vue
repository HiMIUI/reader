<!-- 分页 -->
<template>
	<div class="stepPages">
		<span>首页</span>
		<span>上一页</span>
		<span>下一页</span>
		<span>末页</span>
		<input class="" name="" type="text" >
		<span class="topage">跳转到该页</span>
	</div>
</template>

<script>
	export default {
		name: 'StepPages'
	}
</script>

<style scoped>
	.stepPages {
		position: relative;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.stepPages span {
		display: inline-block;
		padding: 2px 3px;
		cursor: pointer;
	}
	.stepPages span:hover {
		color: cornflowerblue;
	}
	.stepPages input {
		width: 50px;
		height: 26px;
		padding: 0 5px;
		border: 1px solid #d2d2d2;
		outline: none;
		border-radius: 4px;
		margin-left: 10px;
	}
	.stepPages span input:focus {
		border: none;
		box-shadow: 0 0 10px rgba(0,0,0,.5);
	}
	.topage {
		text-decoration: underline;
		margin-left: 5px;
	}
</style>
