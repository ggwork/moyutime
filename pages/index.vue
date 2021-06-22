<template>
  <div class="container">
    <div class="c-c-des">
      <ul>
        <li>推荐最好用的工具</li>
        <li>推荐最有益的书籍</li>
      </ul>
    </div>
    <div class="c-cont">
      <div class="nav" v-for="(item,index) in indexData" :key="index">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="nav-row">
          <nuxt-link v-for="(child,cIndex) in item.children" :key="'c'+cIndex" :to="{'path':child.url}" class="nav-link">
            <div :span="4" class="nav-item" >
              <div class="icon">
                <img :src="child.icon" alt="" srcset="">
              </div>
              <div class="n-i-title">
                {{ child.title }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchContent:'',
      indexData:[
        {
          title:'在线工具推荐',
          children:[
            {
              title:'在线办公工具',
              url:'/onlineTools',
              icon:'/index/icon/onlineTools.svg'
            }
          ]
        },
        {
          title:'电子书籍下载',
          children:[
            {
              title:'理财书籍',
              url:'/moneybooks',
              icon:'/index/icon/money-bag.svg'
            }
          ]
        }
      ]
    }
  },
  methods:{
    search(){
      if(this.searchContent){
      }else{
        this.$message({
          type:'warning',
          message:'请输入搜索内容'
        })
      }
    },
    goChildPage(url){
      this.$router.push(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  
  .c-c-des{
    font-weight: bold;
    background: linear-gradient(-141deg, #ecca1b, #f39526);
    padding:50px 0px 150px;
    ul{
      width: 100%;
      li{
        text-align: center;
        margin: 15px;
        font-size: 24px;
        color:white;
      }
    }
  }
  .c-cont{
    width: 1200px;
    margin: auto;
    margin-top:-50px; 
    position: relative;
    background: white;
    padding:20px 20px 50px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);
    .nav{
      margin-top:20px;
      .title{
        width: 100%;
        height: 20px;
        font-weight: 18px;
        display: flex;
        align-items: center;
        &::before{
          content: '';
          width: 5px;
          height: inherit;
          display: inline-block;
          background: gold;
          margin-right: 10px;
        }
      }
      .nav-row{
        width: 100%;
        .nav-link{
          text-decoration: none;
          width: 240px;
          display: inline-block;
          .nav-item{
            width: 240px;
            background: white;
            margin-top:20px;
            padding:20px;
            box-sizing: border-box;
            border:0.5px solid #eee;
            cursor: pointer;
            &:hover{
              background: #f6f6f8;
            }
            .icon{
              width: 100%;
              text-align: center;
              img{
                width: 60px;
                height: 60px;
              }
            }
            .n-i-title{
              width: 100%;
              height: 20px;
              text-align: center;
              margin-top:10px;
            }
          }
        }
        
      }
      
    }
    
  }
}
</style>
