<!--  -->
<template>
  <tabBar>
      <tabItem path="/home" activeColor="red">
        <img slot="iconA" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="iconB-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tabItem>
      <tabItem path="/category">
        <img slot="iconA" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="iconB-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tabItem>
       <tabItem path="/cart">
        <img slot="iconA" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="iconB-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tabItem>
       <tabItem path="/profile">
        <img slot="iconA" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="iconB-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tabItem>
    </tabBar>
</template>

<script>
import TabBar from 'common/tabBar/TabBar';
import TabItem from 'common/tabBar/tabBarItem'
export default {
  name: 'app', 
  components: {
    TabBar,
    TabItem
  }
}
</script>
<style lang='scss' scoped>
</style>