<!--  -->
<template>
  <div class="tab-contal">
      <div v-for="(item,index) in titles" :key="index" class="tab-contal-item" :class="{active: currentIndex==index}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
  export default {
      name:'Contal',
      props:{
          titles:{
              type:Array,
              default(){
                  return [];
              }
          }
      },
      data () {
          return {
              currentIndex:0,
          }
      },
      methods: {
          itemClick(index){
              this.currentIndex = index;
              this.$emit('clickEven',index)
          }
      }
  }
</script>
<style lang='scss' scoped>
.tab-contal{
    width: 100%;
    display: flex;
    text-align: center;
    background-color: #eee;
    z-index: 99;
    .tab-contal-item{
        flex:1;
        height: 40px;
        line-height: 40px;
    }
    .active{
        color: var(--color-high-text);
        span{
            border-bottom: 2px solid var(--color-tint);
            padding: 3px;
        }
    }
}
</style>