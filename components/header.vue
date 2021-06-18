<template>
  <div class="c-header">
    <div class="c-h-main">
      <div class="c-h-tlogo">
        <nuxt-link class="title" :to="{'path':'/'}">墨鱼</nuxt-link>
        <!-- <div class="logo"><img src="/index/moyu.png"></div> -->
      </div>
      <div class="search">
        <!-- 搜索现在先不做 -->
        <!-- <el-input v-model="searchContent" placeholder="请输入搜索内容"></el-input> -->
        <!-- <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

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
    .title {
      display: block;
      font-weight: 300;
      font-size: 32px;
      color: #35495e;
      letter-spacing: 1px;
      text-decoration: none;
    }
  }
  
}
</style>

