function install(Vue) {
	// 注册一个全局自定义指令 `v-animate`
	Vue.directive('animate', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function(el, binding) {
			const animateObj = binding.value;
			const animteCls = ` animated ${animateObj.name}`;
			el.className += animteCls;
			el.style.animationDelay = animateObj.delay + 's';
			console.log(binding.value);
		}
	});
}
export default {
	install
};
