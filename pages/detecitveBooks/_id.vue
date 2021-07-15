<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeTitle="bookTypeTitle" :bookData="bookData"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/detecitveBooks/bookData.js'
export default {
  data(){
    return{
      bookType:'detecitveBooks',
      bookTypeTitle:'史上最强的50本推理小说',
      bookData:bookData,
    }
  },
  components:{
    bookListTemplate
  }
}
</script>

