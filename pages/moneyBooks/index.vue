<template>
  <div class="main">
    <h1 class="m-title">史上最全的理财书籍库</h1>
    <p class="m-des">共收录理财书籍<span class="warnning">{{ bookData.length }}</span>本，几乎涵盖了理财类所有的经典书籍</p>
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
  </div>
</template>
<script>
import bookData from '@/assets/moneyBooks/bookData.js'
import _ from 'loadsh';
export default {
  data(){
    return {
      bookData:bookData,
      description:''
    }
  },
  created(){
    this.description = this.bookData.map(item=>{
      return item.name
    }).join(',')
  },
  computed:{
    splitedTo4BookData(){
      return _.chunk(this.bookData,4)
    }
  },
  head(){
    return {
      title:'经典理财书籍在线分享',
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
      let bIndex = aIndex * 4 + index
      this.$router.push('/common/downloadBook?bIndex='+bIndex)
      window.uMengTj && window.uMengTj('理财书籍','点击',this.bookData[bIndex].name)
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
}
</style>

