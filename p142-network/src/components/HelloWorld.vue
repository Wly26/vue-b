<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
  //   get请求
  //   axios({
  //     url: '/api',
  //     method: 'get',
  //     params: {
  //       city: this.ancity[this.ancityindex].value,
  //       str: this.housing
  //     }
  //   }).then(res => {
  //     this.housinglists = res.data.data
  //     console.log(this.housinglists.length);
  //     console.log(this.housinglists);
  //   }).catch(err => {
  //     console.log(err);
  //   }),

  //   post请求
  //   axios({
  //     method:'post',
  //     url:'/form',
  //     data: {
  //       chengshi:this.form.cityname,
  //       mianji:this.form.area,
  //       louceng:this.form.floor,
  //       loucengZong:this.form.floorn,
  //       fenqu:this.form.quwei,
  //       leixingZong:this.form.housingtypes
  //     }
  //   }).then(res=>{
  //     console.log('成功'),
  //     this.danjia = res.data.data.second.danjia,
  //     this.zongjia = res.data.data.second.zongjia
  //   }).catch(err=>{
  //     console.log('失败')
  //   })

  // axios.all([])
  //   axios.all([axios({
  //     url: '/api'
  //   }),axios({
  //     url:'/form'
  //   })]).then(result => {
  //     console.log(result)
  //   })
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
