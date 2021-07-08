<template>
  <div class="main">
    <h1 class="m-title">史上最全的{{ bookTypeName }}必备书籍库</h1>
    <p class="m-des">共收录{{ bookTypeName }}必备书籍<span class="warnning">{{ bookData.length }}</span>本，几乎涵盖了{{ bookTypeName }}所有的经典书籍</p>
    <div class="cont">
      <el-row type="flex" v-for="(bookArr,aIndex) in splitedTo4BookData" :key="aIndex" >
        <el-col :span="6" v-for="(book,index) in bookArr" :key="index" class="book">
          <div @click="goDownload(aIndex,index)">
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
    <div class="m-page">
      <div class="m-p-btn m-p-prev" @click="goPrevPage" v-if="showPrevPageBtn">上一页</div>
      <div class="m-p-btn m-p-next" @click="goNextPage" v-if="showNextPageBtn" >下一页</div>
      <div class="m-p-btn m-p-next" @click="goIndex">首页</div>
    </div>
  </div>
</template>
<script>

import _ from 'loadsh';
export default {
  props:{
    bookType:{
      type:String,
      required: true
    },
    bookTypeName:{
      type: String,
      required: true
    },
    bookData:{
      type: Array,
      required: true
    }
  },
  data(){
    return {
      startIndex:0,
      description:''
    }
  },
  created(){
    let pageIndex = Math.floor(Number(this.$route.params.id) / 8) * 8
    if(pageIndex > this.bookData.length){
      pageIndex = Math.floor(Number(this.bookData.length) / 8) * 8
    }
    this.startIndex =  pageIndex || 0
    this.description = this.bookData.map(item=>{
      return item.name+'pdf在线下载'
    }).join(',')
  },
  
  computed:{
    slicedBookData(){
      return this.bookData.slice(this.startIndex, this.startIndex + this.$commonData.pageBookNums)
    },
    splitedTo4BookData(){
      return _.chunk(this.slicedBookData,4)
    },
    showPrevPageBtn(){
      return this.startIndex >= 8
    },
    showNextPageBtn(){
      return this.startIndex + 8 < this.bookData.length
    }
  },
  head(){
    return {
      title:`${this.bookTypeName}必备书籍在线分享`,
      meta:[
        {
          name: 'description',
          content: this.description
        },
        {
          name:'keywords',
          content:this.description
        }
      ]
    }
  },
  methods:{
    goDownload(aIndex,index){
      let bIndex = this.startIndex + aIndex * 4 + index
      this.$router.push(`/common/downloadBook?type=${this.bookType}&bIndex=${bIndex}`)
      window.uMengTj && window.uMengTj(this.bookTypeName,'点击',this.bookData[bIndex].name)
    },
    goPrevPage(){
      // this.$route.path    /febooks/12/  
      let basePath = this.$route.path.match(/(\/.+?\/)/)[0]  // 得到/febooks/
      let goIndex = this.startIndex - 8
      this.$router.push(basePath+goIndex)
      
    },
    goNextPage(){
      // this.$route.path    /febooks/12/  
      let basePath = this.$route.path.match(/(\/.+?\/)/)[0]  // 得到/febooks/
      let goIndex = this.startIndex + 8
      this.$router.push(basePath+goIndex)
    },
    goIndex(){
      this.$router.push('/')
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

