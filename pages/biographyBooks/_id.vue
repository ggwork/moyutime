<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeTitle="bookTypeTitle" :bookData="bookData"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/biographyBooks/bookData.js'
export default {
  data(){
    return{
      bookType:'biographyBooks',
      bookTypeTitle:'成大事者必看的10本传记',
      bookData:bookData,
    }
  },
  components:{
    bookListTemplate
  }
}
</script>
<style lang="scss" scoped>

</style>

