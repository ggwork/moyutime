<template>
  <div class="c-header">
    <div class="c-h-main">
      <div class="c-h-tlogo">
        <nuxt-link class="title" :to="{'path':'/'}">墨鱼推荐</nuxt-link>
        <!-- <div class="logo"><img src="/index/moyu.png"></div> -->
      </div>
      <div class="search">
        <!-- 搜索现在先不做 -->
        <el-input class="s-input" v-model="searchContent" placeholder="请输入搜索内容" @change="search"></el-input>
        <el-button class="s-btn" type="primary" icon="el-icon-search" @click="search"></el-button>
      </div>
    </div>
  </div>
</template>
<script>
import allData from '@/assets/allData.js'
export default {
  data(){
    return{
      searchContent:''
    }
  },
  methods:{
    search(){
      if(!!this.searchContent){
        let result = []
        let hasSetToResultName= []
        let keys = Object.keys(allData)
        for(let key of keys){
          let data = allData[key].data
          for(let i=0; i<data.length; i++){
            if(data[i].name.includes(this.searchContent) && !hasSetToResultName.includes(data[i].name)){
              result.push({
                type:key,
                index:i,
                ...data[i]
              })
              hasSetToResultName.push(data[i].name)
            }
          }
        }
        // 将搜索结果存储在localStorage中
        localStorage.setItem('searchResult',JSON.stringify(result))
        this.$router.push('/searchResult')
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom:1px solid #eee;
  .c-h-main{
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      display: block;
      font-weight: 300;
      font-size: 32px;
      color: #35495e;
      letter-spacing: 1px;
      text-decoration: none;
    }
    .search{
      width: 360px;
      display: flex;
      align-items: center;
      .s-input{
        margin-right: 10px;
      }
    }
  }
  
}
</style>

