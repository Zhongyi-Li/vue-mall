<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
      <img :src="goodsitem.show.img" alt="" @load="loadComplete">
      <div class="item-info">
          <p>{{goodsitem.title}}</p>
          <span class="price">{{goodsitem.price}}</span>
      </div>
  </div>
</template>

<script>
  export default {
      name:'GoodsItem',
      props:{
          goodsitem:{
              type:Object,
              default(){
                  return {};
              }
          }
      },
      methods: {
          loadComplete(){
              this.$bus.$emit('imgComplete');
          },
          itemClick(){
              this.$router.push('/detail/'+this.goodsitem.iid);
          },
      }
  }
</script>
<style lang='scss' scoped>
.goods-item{
    width: 48%;
    position: relative;
    img{
        width: 100%;
        border-radius: 5px;
    }
    .item-info{
            text-align: center;
        .price{
            color: var(--color-high-text);
            margin-right: 20px;
        }
        p{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-bottom: 3px;
            font-size: 12px;
        }
    }
}
</style>