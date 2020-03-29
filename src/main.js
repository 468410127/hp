import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/styles/index.scss'; // global css
// import '@/styles/header.scss'; // header css
import 'element-ui/lib/theme-chalk/index.css';
import '@/icons'; // icon
import '@/assets/mock';
import '@/permission'; // permission control
import 'lib-flexible'; // 使用lib-flexible来解决移动端适配
// 解决低版本浏animated览器不支持promise问题
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
import animated from 'animate.css'; // Animate.css
import directives from '@/assets/utils/directives';
import 'mv-full-page/lib-dist/mv-full-page.css';
import MvFullPage from 'mv-full-page';

Vue.use(MvFullPage);
Vue.use(directives);
// import 'kute.js';
// import '@/assets/lib/css/kute.css';

Es6Promise.polyfill();

import Api from '@/assets/http/apiUrl';
import Request from '@/assets/http';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
	locale
});
Vue.use(animated);
Vue.prototype.API = Api;
Vue.prototype.$request = Request;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
