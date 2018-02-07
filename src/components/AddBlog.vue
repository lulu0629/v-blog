<template>
  <div id="addBlog">
    <form v-if='!submited'>
      <label>主题：</label>
      <input type="text" v-model='blog.title' required>
      <label>内容：</label>
      <textarea v-model='blog.content'></textarea>
      <div id="checkboxes">
        <label>Vue.js</label><input type="checkbox" value='Vue.js' v-model='blog.categories'>
        <label>Angular4</label><input type="checkbox" value='Angular4' v-model='blog.categories'>
        <label>Node.js</label><input type="checkbox" value='Node.js' v-model='blog.categories'>
        <label>React.js</label><input type="checkbox" value='React.js' v-model='blog.categories'>
      </div>
      <label>作者：</label>
      <select v-model='blog.author'>
        <option v-for='author in authors' :key='author'>{{author}}</option>
      </select>
      <button v-on:click='post'>添加博客</button>
    </form>
    <div v-if='submited'>
      <h3>博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for='category in blog.categories' :key='category'>{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addBlog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        categories:[],
        author:''
      },
      authors:['Hemiah','Henry','Bucky'],
      submited:false
    }
  },
  methods:{
    post:function(e){
      e.preventDefault();
      axios.post('/posts.json',this.blog).then((data)=>{
        this.submited = true;
      });
    }
  }
}
</script>

<style scoped>
#add-blog *{box-sizing: border-box;}
#add-blog{margin: 200px auto;max-width: 600px;padding: 20px;}
label{display: block;margin: 40px 0 10px;}
input[type='text'],textarea,select{display: block;width: 100%;padding: 8px;}
textarea{height: 200px;}
#checkboxes label{display: inline-block;margin-top: 0;}
#checkboxes input{display: inline-block;margin-right: 10px;}
button{display: block;margin: 20px 0;background: crimson;color: #fff;border: 0;padding:14px;border-radius: 4px;font-size: 18px;cursor: pointer;}
#preview{padding: 10px 20px;border: 1px dotted #ccc;margin: 30px 0;}
h3{margin-top: 40px;}
</style>
