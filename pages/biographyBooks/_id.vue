<template>
  <div class="bwrapper">
    <book-list-template :bookType="bookType" :bookTypeName="bookTypeName" :bookData="bookData"></book-list-template>
  </div>
</template>
<script>
import bookListTemplate from '@/components/book/bookListTemplate.vue'
import bookData from '@/assets/biographyBooks/bookData.js'
export default {
  data(){
    return{
      bookType:'biographyBooks',
      bookTypeName:'成大事必看人物传记',
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

