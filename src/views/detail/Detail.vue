<!--  -->
<template>
  <div id="detail">
      <NavBar class="detail-bar"></NavBar>
      <Scroll class="content" ref="scroll">
      <DetailSwiper :banners="imgList"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo @imgLoad="imgLoad" :detailInfo="detailInfo"></DetailGoodsInfo>
       <DetailParamInfo :paramInfo="paramsInfo"></DetailParamInfo>
      </Scroll>
  </div>
</template>

<script>
import NavBar from './detailChild/DetailNavBar';
import DetailSwiper from './detailChild/DetailSwiper';
import DetailBaseInfo from './detailChild/DetailBaseInfo'
import DetailShopInfo from './detailChild/DetailShopInfo'
import Scroll from '../../components/common/scroll/Scroll';
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
import DetailParamInfo from './detailChild/DetailParamInfo';

import {getDetailData,Goods,Shop,GoodsParam} from 'network/detail';
  export default {
      name:'Detail',
      data () {
          return {
              iid:null,  
              imgList:[],   
              goods:{},   
              shop:{},
              detailInfo:{},
              paramsInfo:{},
            
          }
      },
      components: {
          NavBar,
          DetailSwiper,
          DetailBaseInfo,
          DetailShopInfo,
          DetailGoodsInfo,
          DetailParamInfo,
          Scroll,
      },
      created () {
          this.iid = this.$route.params.id;
          getDetailData(this.iid).then(res=>{
              const data = res.result;
              this.imgList =  res.result.itemInfo.topImages;
              this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
              this.shop = new Shop(data.shopInfo);
              this.detailInfo = data.detailInfo;
              this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
              console.log(this.goods);
          });
      },
      methods: {
          imgLoad(){
              this.$refs.scroll.refresh();
          }
      }
  }
</script>
<style lang='scss' scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
    .content{
       height: calc(100% - 44px);
    }
    .detail-bar{
        position: relative;
        top:0;
        z-index:9;
        background-color: #fff;
    }
}
</style>