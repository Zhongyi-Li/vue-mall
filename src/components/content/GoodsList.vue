<!--  -->
<template>
  <div class="goods">
          <GoodsItem v-for="(item,index) in goods" :key="index" :goodsitem="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem';
  export default {
      name:'GoodsList',
      props:{
          goods:{
              type:Array,
              default(){
                  return [];
              }
          }
      },
      components: {
          GoodsItem,
      }
  }
</script>
<style lang='scss' scoped>
.goods{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 3px;
    margin-bottom: 3px;
}
</style>