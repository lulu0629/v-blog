<template>
	<div id="singleBlog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类：</p>
		<ul>
			<li v-for='catergory in blog.catergories' :key='catergory'>
				{{catergory}}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'

export default{
	name:'singleBlog',
	data(){
		return{
			id:this.$route.params.id,
			blog:{}
		}
	},
	created:function(){
		axios.get('/posts/'+this.id+'.json').then((data)=>{
			this.blog = data.data;
		});
	}
}
</script>

<style scoped>
#singleBlog{max-width: 960px;margin: 0 auto;padding: 20px;background: #eee;border: 1px dotted #aaa;margin-top: 50px;}
</style>