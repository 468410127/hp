import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRoutes = [
	// {
	// 	path: '/redirect',
	// 	component: () => import('@/layout'),
	// 	hidden: true,
	// 	children: [
	// 		{
	// 			path: '/redirect/:path*',
	// 			component: (resolve) => void require([ '@/views/redirect/index' ], resolve)
	// 		}
	// 	]
	// },
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/login',
		name: 'Login',
		component: (resolve) => void require([ '@/views/login/index' ], resolve),
		hidden: true
	},
	{
		path: '/index',
		name: 'Index',
		component: (resolve) => void require([ '@/views/login/index1' ], resolve),
		hidden: true
	},
	{
		path: '/allCase',
		name: 'AllCase',
		label: '案件概要',
		component: (resolve) => void require([ '@/views/allCase' ], resolve),
		hidden: true
	},
	{
		path: '/service',
		name: 'Service',
		label: '解决方案，商业服务',
		component: (resolve) => void require([ '@/views/service' ], resolve),
		hidden: true
	},
	{
		path: '/index1',
		name: 'Index1',
		component: (resolve) => void require([ '@/views/login/index2' ], resolve),
		hidden: true
	},
	{
		path: '/product',
		name: 'Product',
		component: (resolve) => void require([ '@/views/product/index' ], resolve),
		hidden: true
	},
	{
		path: '/news',
		name: 'News',
		label: '咨讯',
		component: (resolve) => void require([ '@/views/news/index' ], resolve),
		hidden: true
	},
	{
		path: '/join',
		name: 'Join',
		component: (resolve) => void require([ '@/views/join/index' ], resolve),
		hidden: true
	},
	{
		path: '/detail',
		name: 'Detail',
		component: (resolve) => void require([ '@/views/allCase/detail' ], resolve),
		hidden: true
	},
	{
		path: '/recruit',
		name: 'Recruit',
		label: '采用情报',
		component: (resolve) => void require([ '@/views/recruit/index' ], resolve),
		hidden: true
	},
	{
		path: '/company',
		name: 'Company',
		label: '企业情报',
		component: (resolve) => void require([ '@/views/company/index' ], resolve),
		hidden: true
	},
	{
		path: '/resetPsw',
		name: 'ResetPsw',
		component: (resolve) => void require([ '@/views/login/resetPsw' ], resolve),
		hidden: true
	},

	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true
	},
	{
		path: '/home',
		component: () => import('@/layout'),
		hidden: true,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: (resolve) => void require([ '@/views/homepage/index' ], resolve),
				meta: {
					title: '主页',
					keepAlive: false, // 该字段表示该页面需要缓存
					isBack: false // 用于判断上一个页面是哪个
				}
			}
		]
	}
];

/**
 * 异步挂载的路由
 * 动态需要根据权限加载的路由表
 */
const modulesFiles = require.context('./modules', true, /\.js$/);
const routesModules = [];
// 自动引入modules目录下的所有模块
modulesFiles.keys().reduce((modules, modulePath) => {
	const value = modulesFiles(modulePath);
	routesModules.push(value.default);
}, {});
export const asyncRoutes = routesModules;

/**
 * 最终无法匹配到相应路由，重定向到404
 * 异步加载路由时，在生成完异步路由准备挂载时，需要将重定向404的匹配规则定义在最后面，否则刷新会出错。
 */
export const notFoundRoutes = [
	{
		path: '*',
		redirect: '/404',
		hidden: true,
		meta: {
			title: '404'
		}
	}
];

const createRouter = () =>
	new Router({
		mode: 'history', // require service support
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes
	});
const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher; // reset router
}

export default router;
