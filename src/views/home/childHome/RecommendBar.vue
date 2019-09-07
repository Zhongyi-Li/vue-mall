<!--  -->
<template>
  <div class="recomm-bar">
      <div class="bar-item" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
  export default {
      name:'recommednBar',
      props:{
          recommends:{
               type:Array,
               default(){
                 return [];
             }
          }
         
      },
  }
</script>
<style lang='scss' scoped>
.recomm-bar{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
    .bar-item{
        flex:1;
        a{
            display: block;
            font-size: 12px;
            img{
                width: 70px;
                height: 70px;
                margin-bottom: 6px;
            }
        }
    }
}
</style>