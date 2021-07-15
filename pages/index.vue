<template>
  <div class="container">
    <div class="c-c-des">
      <ul>
        <li>推荐最好用的工具</li>
        <li>推荐最有益的书籍</li>
        <li>推荐最好看的电影</li>
        <li>推荐最有趣的剧集</li>
      </ul>
    </div>
    <div class="c-cont">
      <div class="nav" v-for="(item,index) in indexData" :key="index">
        <h3 class="title">
          {{ item.title }}
        </h3>
        <div class="nav-row">
          <nuxt-link v-for="(child,cIndex) in item.children" :key="'c'+cIndex" :to="{'path':child.url}" class="nav-link">
            <div :span="4" class="nav-item" >
              <div class="icon">
                <img :src="child.icon" alt="" srcset="">
              </div>
              <div class="n-i-title">
                {{ child.title }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 理财书籍
import moneyBooksData from '@/assets/moneyBooks/bookData.js'
let moneyBooksChildRouter = createChildRtouer('理财书籍','moneybooks','money-bag.svg',moneyBooksData)

// 前端书籍
import feBooksData from '@/assets/feBooks/bookData.js'
let feBooksChildRouter = createChildRtouer('前端书籍','febooks','xiniu.svg',feBooksData)


// 程序员必备书籍
import coderBooksData from '@/assets/coderBooks/bookData.js'
let coderBooksChildRouter = createChildRtouer('程序员必备书籍','coderbooks','coder.svg',coderBooksData)

// 知乎推荐最高的50本书
import zhihuBooksData from '@/assets/zhihuBooks/bookData.js'
let zhihuBooksChildRouter = createChildRtouer('知乎推荐最高的50本书','zhihubooks','zhihu.svg',zhihuBooksData)


// 职场人士必读的20本书
import professionBooksData from '@/assets/professionBooks/bookData.js'
let professionBooksChildRouter = createChildRtouer('职场人士必读的20本书','professionBooks','profession.svg',professionBooksData)


//  心理学必读的20本书
import psychologyBooksData from '@/assets/psychologyBooks/bookData.js'
let psychologyBooksChildRouter = createChildRtouer('心理学必读的20本书','psychologyBooks','heart.svg',psychologyBooksData)


// 人生必看的10本书籍
import lifeBooksData from '@/assets/lifeBooks/bookData.js'
let lifeBooksChildRouter = createChildRtouer('人生必看的10本书','lifeBooks','life.svg',lifeBooksData)


// 知乎推荐最多的10本小说
import zhNovelBooksData from '@/assets/zhNovelBooks/bookData.js'
let zhNovelBooksChildRouter = createChildRtouer('知乎推荐最多的10本小说','zhNovelBooks','novel.svg',zhNovelBooksData)


// 逻辑思维必读的10本书
import thinkBooksData from '@/assets/thinkBooks/bookData.js'
let thinkBooksChildRouter = createChildRtouer('逻辑思维必读的10本书','thinkBooks','think.svg',thinkBooksData)


// 成大事者必看的10本传记
import biographyBooksData from '@/assets/biographyBooks/bookData.js'
let biographyBooksChildRouter = createChildRtouer('成大事者必看的10本传记','biographyBooks','biography.svg',biographyBooksData)


//经典的武侠小说10本
import wuxiaBooksData from '@/assets/wuxiaBooks/bookData.js'
let wuxiaBooksChildRouter = createChildRtouer('经典的武侠小说10本','wuxiaBooks','wuxia.svg',wuxiaBooksData)


// 史上最强的50本推理小说
import detecitveBooksData from '@/assets/detecitveBooks/bookData.js'
let detecitveBooksChildRouter = createChildRtouer('史上最强的50本推理小说','detecitveBooks','yandou.svg',detecitveBooksData)

// 豆瓣Top250电影在线下载
import douban250moviesData from '@/assets/douban250movies/data.js'
let douban250moviesChildRouter = createChildRtouer('豆瓣Top250电影在线下载','douban250movies','movie.svg',douban250moviesData)

// 8个为一组，等同于变量，this.$commonData.pageBookNums，直接引用会报错，所以这里直接设置成了8
function createChildRtouer(title,path,icon,bookData){
  let pageBookNums = 8
  let childRouter = []
  bookData.forEach((item,index)=>{
    if(index % pageBookNums === 0){
      if(index + pageBookNums < bookData.length){
        childRouter.push(
          {
            title:`${title}${index + 1}-${index + pageBookNums}`,
            url:`/${path}/${index}`,
            icon:`/index/icon/${icon}`
          },
        )
      }else{
        childRouter.push(
          {
            title:`${title}${index + 1}-${bookData.length}`,
            url:`/${path}/${index}`,
            icon:`/index/icon/${icon}`
          },
        )
      }
    }
  })
  return childRouter
}

export default {
  data(){
    return {
      searchContent:'',
      indexData:[
        {
          title:'办公工具推荐下载',
          children:[
            {
              title:'在线办公工具推荐',
              url:'/onlineTools',
              icon:'/index/icon/onlineTools.svg'
            },
            {
              title:'windows必备工具推荐',
              url:'/winSoftware',
              icon:'/index/icon/computer.svg'
            },
            {
              title:'程序员必备工具推荐',
              url:'/coderSoftware',
              icon:'/index/icon/codersw.svg'
            }
          ]
        },
        {
          title:'理财经典书籍下载',
          children:moneyBooksChildRouter
        },
        {
          title:'前端必备书籍下载',
          children:feBooksChildRouter
        },
        {
          title:'程序员必备书籍下载',
          children:coderBooksChildRouter
        },
        {
          title:'知乎推荐最高的50本书下载',
          children:zhihuBooksChildRouter
        },
        {
          title:'职场人士必读的20本书籍下载',
          children:professionBooksChildRouter
        },
        {
          title:'心理学必读的20本书籍下载',
          children:psychologyBooksChildRouter
        },
        {
          title:'人生必看的10书下载',
          children:lifeBooksChildRouter
        },
        {
          title:'知乎推荐最多的10本小说',
          children:zhNovelBooksChildRouter
        },
        {
          title:'逻辑思维必读的10本书',
          children:thinkBooksChildRouter
        },
        {
          title:'成大事者必看的10本传记',
          children:biographyBooksChildRouter
        },
        {
          title:'最经典的10本武侠小说',
          children:wuxiaBooksChildRouter
        },
        {
          title:'史上最强的50本推理小说',
          children:detecitveBooksChildRouter
        },
        {
          title:'豆瓣Top250电影在线下载',
          children:[
            {
              title:'豆瓣Top250电影在线下载',
              url:'/douban250movies/0',
              icon:'/index/icon/movie.svg'
            }
          ]
        },
      ]
    }
  },
  head(){
    return {
      // 修改3
      title:'墨鱼推荐',
      meta:[
        {
          name: 'description',
          content: '推荐最好用的工具，推荐最有益的书籍，推荐最好看的电影，推荐最有趣的剧集'
        },
        {
          name:'keywords',
          content: this.indexData.map(item=>item.title).join(',')
        }
      ]
    }
  },
  methods:{
    search(){
      if(this.searchContent){
      }else{
        this.$message({
          type:'warning',
          message:'请输入搜索内容'
        })
      }
    },
    goChildPage(url){
      this.$router.push(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  
  .c-c-des{
    font-weight: bold;
    background: linear-gradient(-141deg, #ecca1b, #f39526);
    padding:50px 0px 150px;
    ul{
      width: 100%;
      li{
        text-align: center;
        margin: 15px;
        font-size: 24px;
        color:white;
      }
    }
  }
  .c-cont{
    width: 1200px;
    margin: auto;
    margin-top:-50px; 
    position: relative;
    background: white;
    padding:20px 20px 50px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);
    .nav{
      margin-top:20px;
      .title{
        width: 100%;
        height: 20px;
        font-weight: 18px;
        display: flex;
        align-items: center;
        font-weight: normal;
        &::before{
          content: '';
          width: 5px;
          height: inherit;
          display: inline-block;
          background: gold;
          margin-right: 10px;
        }
      }
      .nav-row{
        width: 100%;
        .nav-link{
          text-decoration: none;
          display: inline-block;
          .nav-item{
            width: 290px;
            background: white;
            margin-top:20px;
            padding:20px;
            box-sizing: border-box;
            border:0.5px solid #eee;
            cursor: pointer;
            &:hover{
              background: #f6f6f8;
            }
            .icon{
              width: 100%;
              text-align: center;
              img{
                width: 60px;
                height: 60px;
              }
            }
            .n-i-title{
              width: 100%;
              height: 20px;
              text-align: center;
              margin-top:10px;
            }
          }
        }
        
      }
      
    }
    
  }
}
</style>
