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
      <div class="title">免责声明:</div>
      <div class="cont cont-red">本网站是非盈利性网站，所有内容均来源于网络，经本人日夜辛苦整理所得。本网站所有内容均不得用于商业。请积极支持正版，请下载24小时内自觉删除。</div>
    </div>
    <div class="info">
      <div class="title">下载地址:</div>
      <div class="cont d-cont">本站所有内容均来源于网络，本站尽可能提供原外网下载地址。如若外网下载地址失效，可以使用本站下载。如若本站下载地址失效，可以联系本人。联系方式见最下方。</div>
      <div class="cont d-btn" @click="outerDownloadFn" v-if="curBook.outerDownloadUrl">原外网下载</div>
      <div class="cont d-cont" v-if="curBook.outerDownloadUrl && outerDownloadClicked">
        <div>下载地址：<a :href="curBook.outerDownloadUrl" target="_blank">{{ curBook.outerDownloadUrl }}</a></div>
      </div>

      <div class="cont d-btn" @click="downloadFn" v-if="curBook.downloadUrl">本站下载</div>
      <div class="cont d-cont" v-if="curBook.downloadUrl && hasClickDownLoad">
        <div>下载地址：<a :href="curBook.downloadUrl" target="_blank">{{ curBook.downloadUrl }}</a></div>
        <div class="d-code">验证码：<span >{{ curBook.downloadCode }}</span></div>
      </div>
    </div>
    <!-- 打赏 -->
    <reward :showRewardDialog="showRewardDialog" @hideRewardDialog="hideRewardDialog"></reward>
  </div>
</template>
<script>
import moneyBooksData from '@/assets/moneyBooks/bookData.js'
import feBooksData from '@/assets/feBooks/bookData.js'
import coderBooksData from '@/assets/coderBooks/bookData.js'
// 知乎推荐
import zhihuBooksData from '@/assets/zhihuBooks/bookData.js'
// 职场人士必读的20本书
import professionBooksData from '@/assets/professionBooks/bookData.js'
//  心理学必读的20本书
import psychologyBooksData from '@/assets/psychologyBooks/bookData.js'
// 人生必看的10本书籍
import lifeBooksData from '@/assets/lifeBooks/bookData.js'
// 知乎推荐最多的10本小说
import zhNovelBooksData from '@/assets/zhNovelBooks/bookData.js'
// 逻辑思维必读的10本书
import thinkBooksData from '@/assets/thinkBooks/bookData.js'
// 成大事者必看的10本传记
import biographyBooksData from '@/assets/biographyBooks/bookData.js'
// 经典武侠小说
import wuxiaBooksData from '@/assets/wuxiaBooks/bookData.js'


import reward from '@/components/common/reward.vue'
import _ from 'loadsh';
export default {
  data(){
    return {
      bookData:moneyBooksData,
      curBook:{},
      hasClickDownLoad:false,
      outerDownloadClicked :false, // 是否显示外网下载地址
      recomBookData:[],
      showRewardDialog:false,
      clickType:''
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
      title:this.curBook.name + 'pdf在线下载',
      meta:[
        {
          name: 'description',
          content: this.curBook.des
        },  
        {
          name:'keywords',
          content:'《' + this.curBook.name + '》pdf在线下载',
        }
      ]
    }
  },
  methods:{
    init(){
      let type = this.$route.query.type
      switch(type){
        case 'moneyBooks':
          this.bookData = moneyBooksData
          break
        case 'feBooks':
          this.bookData = feBooksData
          break
        case 'coderBooks':
          this.bookData = coderBooksData
          break
        case 'zhihuBooks':
          this.bookData = zhihuBooksData
          break
        case 'professionBooks':
          this.bookData = professionBooksData
          break
        case 'psychologyBooks':
          this.bookData = psychologyBooksData
          break
        case 'lifeBooks':
          this.bookData = lifeBooksData
          break
        case 'zhNovelBooks':
          this.bookData = zhNovelBooksData
          break
        case 'thinkBooks':
          this.bookData = thinkBooksData
          break
        case 'biographyBooks':
          this.bookData = biographyBooksData
          break
        case 'wuxiaBooks':
          this.bookData = wuxiaBooksData
          break
        
        default:
          this.bookData = moneyBooksData
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
    outerDownloadFn(){
      window.uMengTj && window.uMengTj('书籍','下载',this.curBook.name)
      this.showRewardDialog = true
      this.outerDownloadClicked = true
    },
    downloadFn(){
      window.uMengTj && window.uMengTj('书籍','下载',this.curBook.name)
      this.showRewardDialog = true
      this.hasClickDownLoad = true
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
      // this.hasClickDownLoad = true
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
    .cont-red{
      color:red;
      font-weight: bold;
    }
    .d-btn{
      color:blue;
      text-decoration: underline;
      cursor: pointer;
      width: 100px;
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
