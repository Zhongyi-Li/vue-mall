<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './components/content/TabBarMain'
export default {
  name: 'app',
  components: {
    TabBar,
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
