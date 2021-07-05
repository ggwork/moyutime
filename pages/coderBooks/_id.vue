<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeName="bookTypeName" :bookData="bookData" :dataStartIndex="dataStartIndex"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/coderBooks/bookData.js'
export default {
  data(){
    return{
      bookType:'coderBooks',
      bookTypeName:'程序员',
      bookData:bookData,
      description:''
    }
  },
  components:{
    bookListTemplate
  },
  created(){
    let dataStartIndex = Math.floor(Number(this.$route.params.id) / 8) || 0
    this.dataStartIndex = dataStartIndex
    this.description = this.bookData.map(item=>{
      return item.name
    }).join(',')
  },
  head(){
    return {
      title:'程序员必备书籍在线分享附下载链接',
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

</style>

