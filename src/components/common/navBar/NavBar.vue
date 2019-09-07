<!--  -->
<template>
  <div class="nav-bar">
      <div class="left"><slot name="iconA"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="iconB"></slot></div>
  </div>
</template>

<script>
  export default {
  }
</script>
<style lang='scss' scoped>
.nav-bar{
    display: flex;    
    line-height: 44px;
    height: 44px;
    position: relative;
    z-index: 10;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
}
</style>