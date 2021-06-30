<template>
  <div class="main">
    <div class="book">
      <div class="b-cover">
        <img :src="curBook.cover" :alt="curBook.name">
      </div>
      <div class="b-right">
        <h1 class="b-name">{{ curBook.name }}</h1>
        <h1 class="b-author">作者：{{ curBook.author }}</h1>
      </div>
      <div class="recom">
        <div class="re-title">你可以能感兴趣的书籍</div>
        <ul>
          <li v-for="(book,index) in recomBookData" :key="index" @click="goAnotherBook(book)">
            {{ book.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="info">
      <div class="title">作者简介：</div>
      <div class="cont" v-html="curBook.authorDes"></div>
    </div>
    <div class="info">
      <div class="title">书籍信息：</div>
      <div class="cont" v-html="curBook.des"></div>
    </div>
    <div class="info">
      <div class="title">下载地址</div>
      <div class="cont d-btn" @click="downloadFn">点击下载</div>
      <div class="cont d-cont" v-if="hasClickDownLoad">
        <div>下载地址：<a :href="curBook.downloadUrl" target="_blank" rel="noopener noreferrer">{{ curBook.downloadUrl }}</a></div>
        <div class="d-code">验证码：<span >{{ curBook.downloadCode }}</span></div>
      </div>
    </div>
    <!-- 打赏 -->
    <reward :showRewardDialog="showRewardDialog" @hideRewardDialog="hideRewardDialog"></reward>
  </div>
</template>
<script>
import moneyBookData from '@/assets/moneyBooks/bookData.js'
import feBookData from '@/assets/feBooks/bookData.js'
import coderBookData from '@/assets/coderBooks/bookData.js'
import reward from '@/components/common/reward.vue'
import _ from 'loadsh';
export default {
  data(){
    return {
      bookData:moneyBookData,
      curBook:{},
      hasClickDownLoad:false,
      recomBookData:[],
      showRewardDialog:false
    }
  },
  components:{
    reward
  },
  created(){
    this.init()
  },
  head(){
    return {
      title:this.curBook.name,
      meta:[
        {
          name: 'description',
          content: this.curBook.des
        },  
        {
          name:'keywords',
          content:'《' + this.curBook.name + '》pdf免费下载',
        }
      ]
    }
  },
  methods:{
    init(){
      let type = this.$route.query.type
      switch(type){
        case 'moneyBooks':
          this.bookData = moneyBookData
          break
        case 'feBooks':
          this.bookData = feBookData
          break
        case 'coderBooks':
          this.bookData = coderBookData
          break
        default:
          this.bookData = moneyBookData
      }
      let bIndex = this.$route.query.bIndex
      let curBook = this.bookData[bIndex]
      if(!this.curBook){
        this.$alert('您查找的书籍不存在，请从书籍页重新进入！','提示',{
          confirmButtonText: '确定',
          callback: action => {
              this.$router.back()
            }
        })
        return
      }
      // 对作者信息和书籍段落做格式化处理
      curBook.cover = curBook.cover.replace('-min','')
      curBook.authorDes = this.formatContent(curBook.authorDes)
      curBook.des = this.formatContent(curBook.des)
      this.curBook = curBook
      // 从书籍信息中随机选取7个推荐
      this.recomBookData = _.sampleSize(this.bookData,7)
    },
    changeBook(index){
      let curBook = this.bookData[index]
      // 对作者信息和书籍段落做格式化处理
      curBook.cover = curBook.cover.replace('-min','')
      curBook.authorDes = this.formatContent(curBook.authorDes)
      curBook.des = this.formatContent(curBook.des)
      this.curBook = curBook
    },
    downloadFn(){
      window.uMengTj && window.uMengTj('书籍','下载',this.curBook.name)
      this.showRewardDialog = true
    },
    formatContent(val){
      let valArr = val.split('|||')
      valArr = valArr.map(item=>{
        return `<p>${item}</p>`
      })
      return valArr.join('')
    },
    hideRewardDialog(){
      this.showRewardDialog = false
      this.hasClickDownLoad = true
    },
    goAnotherBook(book){
      // 获取book的index
      let index = this.bookData.findIndex(item=>{
        return item.name === book.name
      })
      if(index > -1){
        // this.$router.push('/common/downloadBook?bIndex='+index)
        this.changeBook(index)
      }else{
        this.$confirm('出错了，要查找的书籍不存在！','提示',{
          confirmButtonText: '去首页',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/moneyBooks')
        })
      }
    },
    // beforeRouteEnter(){
    //   console.log('beforeRouteEnter')
    //   this.init()
    // }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: auto;
  padding:30px;
  .book{
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    margin-top:30px;
    .b-cover{
      width: 235px;
      height: 320px;
      text-align: center;

      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .b-right{
      margin-left: 16px;
      height: inherit;
      .b-name{
        font-size: 24px;
        line-height: 32px;
        margin: 16px 0;
      }
      .b-author{
        line-height: 18px;
        font-size: 14px;
        margin: 8px 0;
      }
    }
    .recom{
      width: 270px;
      height: inherit;
      border:1px solid #eee;
      margin-left: auto;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .re-title{
        font-weight: bold;
        text-align: center;
        font-size: 16px;
        height: 40px; 
        line-height: 40px;
        overflow: hidden;  
        border-bottom: 1px solid #eee;   
      }
      ul{
        li{
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          border-bottom:1px solid #eee;
          padding:0px 10px;
          cursor: pointer;
          &:hover{
            color:blue;
          }
        }
      }
    }
  }
  .info{
    margin-top:20px;
    .title{
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #152844;
      height: 16px;
      border-left: 4px solid #4684e2;
      margin: 27px 0 11px;
      padding: 0 0 0 8px;
    }
    .cont{
      color: #484848;
      font-size: 16px;
      line-height: 26px;
      padding-left: 12px;
      margin: 11px 0;
      white-space: pre-wrap;
    }
    .d-btn{
      color:blue;
      text-decoration: underline;
      cursor: pointer;
    }
    .d-con{
      font-weight: bold;
    }
    .d-code{
      margin-top: -20px;
      span{
        color:red;
      }
    }
  }
}
</style>
