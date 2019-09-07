<!--  -->
<template>
       <div class="tab-bar-item" @click="toggle">
           <div v-if="!isShow"><slot name="iconA"></slot></div>
           
           <div v-else><slot name="iconB-active"></slot></div>
           
           <div :style="activeStyle"><slot name="text"></slot></div>
       </div>
</template>

<script>
  export default {
      name:'tabBarMain',
      props:{
          path:String,
          activeColor:{
              type:String,
              default:'red',
          }
      },
      data(){
          return {
                // isShow:true
              }
      },
      computed: {
        isShow(){
            //匹配當前路徑下標不為-1時返回true，實際返回false
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isShow ? { color: this.activeColor } : {};
        }  
      },
      methods:{
          toggle(){
              this.$router.replace(this.path).catch(()=>{});
          }
      },
  }
</script>
<style lang='scss' scoped>
 .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        img{
            width: 24px;
            height: 24px;
            margin:3px 0 2px 0;
            vertical-align: middle;
        }
    }
</style>