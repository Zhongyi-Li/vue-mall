<!--  -->
<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">拼嘻嘻</div></NavBar>
    <TabContal class="tab-contal-two" :titles="['流行','新款','精选']" @clickEven="changeIndex" ref="tabContal" v-show="isFixed" />
    <Scroll class="content" ref="scroll" :probeType="3"
            @scroll="takePosition" :pullUpLoad="true"
            @pullingEnd="loadMore"
            >
    <Banner :banners="banners" @swiperImgLoad="swiperImgLoad"></Banner>
    <RecommendBar :recommends="recommends"></RecommendBar>
    <Feature></Feature>
    <TabContal class="tab-contal" :titles="['流行','新款','精选']" @clickEven="changeIndex" ref="tabContal"/>
    <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="backTo" v-show="isShowBackTop"></BackTop>
  </div>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar';
import TabContal from 'components/content/TabContal';
import GoodsList from 'components/content/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/BackTop';
import {Banner,RecommendBar,Feature} from './childHome/home';
import {getHomeData,getGoodsData} from 'network/home';
  export default {
    name:'Home',
    components: {
      NavBar,
      Banner,
      RecommendBar,
      Feature,
      TabContal,
      GoodsList,
      Scroll,
      BackTop,
    },
    data(){
      return{
        recommends:[],
        banners:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isFixed:false,
        saveY:0,
      }
    },
    created () {
      // 轮播图数据
      this.getHomeData();
      // 商品数据
      this.getGoodsData('pop');
      this.getGoodsData('new');
      this.getGoodsData('sell');
      //监听GoodsItem组件中发送过来的$bus总线
      
    },
    mounted () {
        this.$bus.$on('imgComplete',()=>{
           this.$refs.scroll.refresh();
        });
    },
    activated () {
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },
    deactivated () {
      this.saveY =  this.$refs.scroll.getScrollY();
    },
    methods:{
      // 监听轮播图加载完成，获取tabContal的offsetSet
      swiperImgLoad(){
         this.tabOffsetTop = this.$refs.tabContal.$el.offsetTop;
      },
      loadMore(){
        this.getGoodsData(this.currentType);
        //允许可以触发多次下拉加载更多
        this.$refs.scroll.finishPullUp();
      },
      takePosition(position){
        // y轴大于1000显示回顶按钮
        this.isShowBackTop = (-position.y) > 1000
        this.isFixed = (-position.y) > this.tabOffsetTop;
      },
      backTo(){
        // 回到顶部
        this.$refs.scroll.scrollTo(0,0,500);
      },
      changeIndex(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new' 
            break
          case 2:
            this.currentType = 'sell'  
        }
      },
      getHomeData(){
        getHomeData().then((res)=>{
          this.recommends = res.data.recommend.list;
          this.banners = res.data.banner.list;
         });
       },
       getGoodsData(type){
          const page = this.goods[type].page+1;
          getGoodsData(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1;
         });
       }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list;
      }
    }
  }
</script>
<style lang='scss' scoped>
#home{
  // padding-top:44px;
  height: 100vh;
  position: relative;
.content{
  position: absolute;
  top:44px;
  bottom: 49px;
  left:0;
  right:0;
  // height: calc(100%-93px);
  // overflow: hidden;
  // margin-top:44px;
}  
.home-nav{
  background-color: var(--color-tint);
  color:#ffffff;
  // 原生滾動需要写下面的代码
  // position: fixed;
  // top:0;
  // left: 0;
  // right: 0;
 }

 .tab-contal{
  //  position: sticky;
  //  top:44px;
   background-color: #ffffff;
 }
}
.tab-contal-two{
   background-color: #ffffff;
   position: relative;   
   z-index: 9;
}
</style>