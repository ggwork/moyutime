<template>
  <div class="main">
    <div class="title">史上最全的理财书籍库</div>
    <div class="cont">
      <div class="book" v-for="(book,index) in books" :key="index">
        <div class="cover"><img :src="book.cover" :alt="book.name" srcset=""></div>
        <div class="name">
          {{book.name}}
        </div>
        <div class="author">
          {{book.author}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bookData from '@/assets/moneyBooks/bookData.js'
export default {
  data(){
    return {
      bookData
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  .title{

  }
  .cont{

  }
}
</style>

