<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link="/home">
        <img src="~assets/tabbar/home.svg" slot="icon" alt="">
        <img src="~assets/tabbar/home_active.svg" slot="active-icon">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/tabbar/category.svg" slot="icon" alt="">
        <img src="~assets/tabbar/category_active.svg" slot="active-icon">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img src="~assets/tabbar/shopcart.svg" slot="icon" alt="">
        <img src="~assets/tabbar/shopcart_active.svg" slot="active-icon">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="profile">
        <img src="~assets/tabbar/profile.svg" slot="icon" alt="">
        <img src="~assets/tabbar/profile_active.svg" slot="active-icon">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: 'app',
    components: {
    	TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "assets/style.css";
</style>
