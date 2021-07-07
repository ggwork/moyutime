<template>
  <div class="bwrapper">
     <book-list-template :bookType="bookType" :bookTypeName="bookTypeName" :bookData="bookData"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/psychologyBooks/bookData.js'
import _ from 'loadsh';
export default {
  data(){
    return {
      dataStartIndex:0,
      bookType:'psychologyBooks',
      bookTypeName:'心理学',
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
      title:'心理学必读的20本书',
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

