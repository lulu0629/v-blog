<template>
  <div id="app">
  	<nav>
  		<ul>
  			<li>
  				<router-link to='/' exact>首页</router-link>
  				<router-link to='/AddBlog' exact>写博客</router-link>
  			</li>
  		</ul>
  		<router-view></router-view>
  	</nav>
  </div>
</template>

<script>
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'

export default {
  name: 'App',
  components: {
    ShowBlog,AddBlog
  }
}
</script>

<style scoped>
ul{list-style-type: none;text-align: center;margin: 0;}
li{display: inline-block;margin: 0 10px;}
a{color: #fff;text-decoration: none;padding: 12px;border-radius: 5px;}
nav{background: crimson;padding: 30px 0;height: 20px;}
.router-link-active{background: rgba(255,255,255,0.8);color: #444;}
</style>
