<!--  -->
<template>
  <div>
      <NavBar>
          <div slot="iconA" class="back" @click="backPage">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div class="title" slot="center">
              <div @click="titleClick(index)" class="title-item"
                   :class="{active: currentIndex === index }" 
                   v-for="(item,index) in titles" :key="index">
                   {{item}}</div>
          </div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar';
  export default {
      name:'DetailNavBar',
      data () {
          return {
              titles:['商品','参数','评论','推荐'],
              currentIndex:0,
          }
      },
      methods:{
         titleClick(index){
           this.currentIndex = index;
         },
         backPage(){
             this.$router.back();
         },
      },
      
      components: {
          NavBar,
      }
  }
</script>
<style lang='scss' scoped>
.title{
    display: flex;
    .title-item{
        flex:1;
    }
    .active{
        color:var(--color-high-text);
    }
}
.back{
    img{
        margin-top:12px;
    }
}
</style>