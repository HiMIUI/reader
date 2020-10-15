import { createRouter, createWebHistory } from 'vue-router'
import News from './components/News.vue'
import NewsDetail from './components/NewsDetail.vue'
import Blogs from './components/Blogs.vue'
import Pics from './components/Pics.vue'
import Thinkings from './components/Thinkings.vue'
import Jokes from './components/Jokes.vue'

const routerHistory = createWebHistory()
const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			component: News
		},
		{
			path: '/newsdetail',
			component: NewsDetail
		},
		{
			path: '/blogs',
			component: Blogs
		},
		{
			path: '/pics',
			component: Pics
		},
		{
			path: '/thinkings',
			component: Thinkings
		},
		{
			path: '/jokes',
			component: Jokes
		}
	]
})

/* 导出路由 */
export default router