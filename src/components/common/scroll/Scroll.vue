<!--  -->
<template>
  <div class="wrapper" ref='wrapper'>
     <div class="content">
         <slot></slot>
     </div> 
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
      name:'Bscroll',
      props:{
          probeType:{
              type:Number,
              default(){
                  return 0;
              }
          },
          pullUpLoad:{
              type:Boolean,
              default(){
                  return false;
              }
          }
      },
      data () {
          return {
              scroll:null,
              message:'Hi',
          }
      },
      mounted () {
          this.scroll = new BScroll(this.$refs.wrapper,{
            //   被scroll包裹的组件要被点击必须设置click为 true
              click:true,
              probeType:this.probeType,
              pullUpLoad:this.pullUpLoad,
          })
          //监听滚动的位置
          if(this.probeType == 2 || this.probeType == 3){
              this.scroll.on('scroll',(position)=>{
              this.$emit('scroll',position);
          });
          }
          
          //上拉加载更多
          if(this.pullUpLoad){
              this.scroll.on('pullingUp',()=>{
              this.$emit('pullingEnd');
            })
          }
      },
      methods: {
          scrollTo(x,y,time){
              this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
          },
          finishPullUp(){
              this.scroll && this.scroll.scrollTo && this.scroll.finishPullUp(); 
          },
          refresh(){
              this.scroll && this.scroll.scrollTo && this.scroll.refresh();
          },
           getScrollY(){
               return this.scroll ? this.scroll.y : 0;
          }  
      },
     
  }
</script>
<style lang='scss' scoped>
</style>