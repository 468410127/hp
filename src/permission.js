import router from '@/router';
// import store from '@/store';
// import { Message } from 'element-ui';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import getPageTitle from '@/assets/utils/get-page-title';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = [ '/index', '/register', '/resetPsw' ]; // 不重定向白名单

router.beforeEach(async (to, from, next) => {
	NProgress.start();

	// set page title
	document.title = getPageTitle(to.meta.title);

	// 有无token判断
	const token = localStorage.getItem('ADMIN_TOKEN');
	if (token) {
		if (whiteList.includes(to.path)) {
			next();
			NProgress.done();
		} else {
			next();
		}
	} else {
		// 没有token
		if (whiteList.indexOf(to.path) !== -1) {
			next();
		} else {
			next();
			NProgress.done();
		}
	}
});

router.afterEach(() => {
	NProgress.done(); // 结束Progress
});
