<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeName="bookTypeName" :bookData="bookData"></book-list-template>
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
    }
  },
  components:{
    bookListTemplate
  }
}
</script>

