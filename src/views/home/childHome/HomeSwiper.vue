<template>
    <div class="wrap">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <a href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
          </a>
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
   data () {
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination'
          }
      },
      isLoad:false,
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    imgLoad(){
      if(!this.isLoad){
          this.$emit('swiperImgLoad')
      }
      this.isLoad = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 52%;
  img{
    width:100%;
  }
}
</style>
