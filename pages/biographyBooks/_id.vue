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
      description:''
    }
  },
  components:{
    bookListTemplate
  },
  created(){
    this.description = this.bookData.map(item=>{
      return item.name
    }).join(',')
  },
  head(){
    return {
      title:'成大事者必看的10本传记',
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

