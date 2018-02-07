// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'

Vue.use(VueRouter)
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wd2475745729yydvlz.wilddogio.com'

//全局自定义指令
Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value == 'wide'){
			el.style.maxWidth = '1260px';
		}else if(binding.value == 'narrow'){
			el.style.maxWidth = '560px';
		}

		if(binding.arg == 'column'){
			el.style.background = '#6677cc';
			el.style.padding = '20px';
		}
	}
})

//全局自定义过滤器
Vue.filter('snippet',function(value){
	return value.slice(0, 100)+'...';
})

const router = new VueRouter({
	routes:[
		{path:'/',component:ShowBlog},
		{path:'/AddBlog',component:AddBlog},
		{path:'/blog/:id',component:SingleBlog}
	],
	mode:'history'
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
