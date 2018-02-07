<template>
	<div v-theme:column="'narrow'" id="showBlog">
		<h1>博客总览</h1>
		<input type="text" v-model='search' placeholder="搜索">
		<div class="single-blog" v-for='blog in filteredBlogs' :key='blog.id'>
			<router-link v-bind:to="'/blog/'+blog.id">
				<h2 v-rainbow>{{blog.title | touppercase}}</h2>
			</router-link>
			<article>{{blog.content | snippet}}</article>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default{
	name:'showBlog',
	data(){
		return{
			blogs:[],
			search:''
		}
	},
	created:function(){
		axios.get('/posts.json').then((data)=>{
			var blogArray = [];
			for(var key in data.data){
				data.data[key].id = key;
				blogArray.push(data.data[key]);
			}
			this.blogs = blogArray;
		});
	},
	computed:{
		filteredBlogs:function(){
			return this.blogs.filter((blog)=>{
				return blog.title.match(this.search);
			});
		}
	},
	// 局部自定义指令
	directives:{
		'rainbow':{
			bind(el,binding,vnode){
				el.style.color = '#'+Math.random().toString(16).slice(2, 8);
			}
		}
	},
	// 局部自定义过滤器
	filters:{
		'touppercase':function(value) {
			return value.toUpperCase();
		}
	}
}
</script>

<style scoped>
#showBlog{max-width: 800px;margin: 50px auto;}
.single-blog{padding: 20px;margin: 20px 0;box-sizing: border-box;background: #eee;border: 1px dotted #aaa;}
#showBlog a{color: #444;text-decoration: none;outline: none;}
input[type='text']{padding: 8px;width: 100%;box-sizing: border-box;}
</style>