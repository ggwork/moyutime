<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeTitle="bookTypeTitle" :bookData="bookData"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/coderBooks/bookData.js'
export default {
  data(){
    return{
      bookType:'coderBooks',
      bookTypeTitle:'史上最经典的程序员必备书籍推荐',
      bookData:bookData,
    }
  },
  components:{
    bookListTemplate
  }
}
</script>

