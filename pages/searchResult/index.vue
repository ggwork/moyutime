<template>
  <div class="main">
    <h1 class="m-title">搜索结果如下</h1>
    <div class="cont">
      <el-row type="flex" v-for="(bookArr,aIndex) in splitedTo4BookData" :key="aIndex" >
        <el-col :span="6" v-for="(book,index) in bookArr" :key="index" class="book">
          <div @click="goDownload(book)">
            <div class="cover"><img :src="book.cover" :alt="book.name" srcset=""></div>
            <div class="b-des">
              <h3 class="name">
                {{book.name}} 
              </h3>
              <div class="author">
                {{book.author}}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import _ from 'loadsh';

export default {
  data(){
    return {
      searchResult:[],
      startIndex:0,
      description:''
    }
  },
  computed:{
    splitedTo4BookData(){
      return _.chunk(this.searchResult,4)
    }
  },
  head(){
    return {
      title:this.bookTypeTitle,
      meta:[
        {
          name:'keywords',
          content:'豆瓣 知乎 电影 书籍 在线下载 pdf 种子 torrent bt 排行榜'
        },
        {
          name: 'description',
          content: this.description
        }
        
      ]
    }
  },
  mounted(){
    let searchResultStr = window.localStorage.getItem('searchResult')
    try{
      this.searchResult = JSON.parse(searchResultStr)
      console.log('searchResult:',this.searchResult)
    }catch(e){
      this.$alert('搜索结果不存在','警告',{
        confirmButtonText:'回首页',
        callback:action=>{
          this.$router.push('/')
        }
      })
    }
  },
  methods:{
    goDownload(book){
      this.$router.push(`/common/downloadBook?type=${book.type}&bIndex=${book.index}`)
      window.uMengTj && window.uMengTj(book.type,'点击',book.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: auto;
  .m-title{
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: normal;
    color: black;
    margin-top: 30px;
  }
  .m-des{
    text-align: center;
    margin-bottom: 30px;
    .warnning{
      color:red;
    }
  }
  .cont{
    .el-row{
      
    }
    .book{
      width: 270px;
      height: 264px;
      margin-top:50px;
      flex-grow: 0;
      flex-shrink: 0;
      border-radius: 8px;
      overflow: hidden;
      margin-right: 40px;
      cursor: pointer;
      &:last-child{
        margin-right: 0px;
      }
      .cover{
        height: 156px;
        padding:8px 0px;
        text-align: center;
        background: #eaf1f5;
        font-size: 0;
        
        img{
          width: 108px;
          height: 140px;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
      .b-des{
        background: #f6f9fb;
        text-align: center;
        height: 108px;
        overflow: hidden;
        padding: 0 16px;
        .name{
          color: #1c355a;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 12px 0 8px;
        }
        .author{
          color: #6f6f6f;
          font-size: 12px;
          line-height: 14px;
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .m-page{
    margin-top:20px;
    display: flex;
    justify-content: flex-end;
    .m-p-btn{
      color:blue;
      cursor: pointer;
      margin-left: 10px;
    }
    
  }
}
</style>

