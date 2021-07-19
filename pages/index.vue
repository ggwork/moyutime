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
import allData from '@/assets/allData.js'
// console.log('allData:',allData)
// 理财书籍
let moneyBooksChildRouter = createChildRtouer('理财书籍','moneyBooks','money-bag.png')
// 前端书籍
let feBooksChildRouter = createChildRtouer('前端书籍','feBooks','xiniu.png')
// 程序员必备书籍
let coderBooksChildRouter = createChildRtouer('程序员必备书籍','coderBooks','coder.png')
// 知乎推荐最高的50本书
let zhihuBooksChildRouter = createChildRtouer('知乎推荐最高的50本书','zhihuBooks','zhihu.png')
// 职场人士必读的20本书
let professionBooksChildRouter = createChildRtouer('职场人士必读的20本书','professionBooks','profession.png')
//  心理学必读的20本书
let psychologyBooksChildRouter = createChildRtouer('心理学必读的20本书','psychologyBooks','heart.png')
// 人生必看的10本书籍
let lifeBooksChildRouter = createChildRtouer('人生必看的10本书','lifeBooks','life.png')
// 知乎推荐最多的10本小说
let zhNovelBooksChildRouter = createChildRtouer('知乎推荐最多的10本小说','zhNovelBooks','novel.png')
// 逻辑思维必读的10本书
let thinkBooksChildRouter = createChildRtouer('逻辑思维必读的10本书','thinkBooks','think.png')
// 成大事者必看的10本传记
let biographyBooksChildRouter = createChildRtouer('成大事者必看的10本传记','biographyBooks','biography.png')
//经典的武侠小说10本
let wuxiaBooksChildRouter = createChildRtouer('经典的武侠小说10本','wuxiaBooks','wuxia.png')
// 史上最强的50本推理小说
let detecitveBooksChildRouter = createChildRtouer('史上最强的50本推理小说','detecitveBooks','yandou.png')
// 豆瓣Top250电影在线下载
let douban250moviesChildRouter = createChildRtouer('豆瓣Top250电影在线下载','douban250movies','movie.png')

// 豆瓣评分最高的10部日剧
let douban10JanTvsChildRouter = createChildRtouer('豆瓣评分最高的10部日剧','douban10JanTvs','rj.png')

// 豆瓣9分以上超好看的日剧
let doubanGrade9JanTvsChildRouter = createChildRtouer('豆瓣9分以上超好看的日剧','doubanGrade9JanTvs','ta.png')

// 生成下载路由
// http://www.boya888.xyz/common/downloadBook?type=moneyBooks&bIndex=0
function createDownloadUrl(){
  let keys = Object.keys(allData)
  let downloadUrls = []
  for(let key of keys){
    let data = allData[key].data
    for(let i = 0; i < data.length; i++){
      downloadUrls.push(`http://www.boya888.xyz/common/downloadBook?type=${key}&bIndex=${i}`)
    }
  }
  return downloadUrls
}
// 向百度提交页面链接，便于百度收录页面地址
function getAllWebsiteUrl(){
    // 一级页面路由
    let l1Urls = ['http://www.boya888.xyz','http://boya888.xyz']
    // 二级路由
    let tempL2Urls = [].concat(moneyBooksChildRouter,feBooksChildRouter,coderBooksChildRouter,zhihuBooksChildRouter,professionBooksChildRouter,psychologyBooksChildRouter,lifeBooksChildRouter,zhNovelBooksChildRouter,thinkBooksChildRouter,biographyBooksChildRouter,wuxiaBooksChildRouter,detecitveBooksChildRouter,douban250moviesChildRouter,douban10JanTvsChildRouter,doubanGrade9JanTvs)
    let l2Urls = tempL2Urls.map((cur)=>{
      return 'http://www.boya888.xyz' + cur.url
    }).concat('http://www.boya888.xyz/onlineTools','http://www.boya888.xyz/winSoftware','http://www.boya888.xyz/coderSoftware')
    let downloadUrls = createDownloadUrl()
    let allUrl = l1Urls.concat(l2Urls,downloadUrls)
    // console.log('allUrl:',allUrl.join('\n'))
}

getAllWebsiteUrl()

// 8个为一组，等同于变量，this.$commonData.pageBookNums，直接引用会报错，所以这里直接设置成了8
function createChildRtouer(title,path,icon){
  let pageBookNums = 8
  let childRouter = []
  let bookData = allData[path].data
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
              icon:'/index/icon/onlineTools.png'
            },
            {
              title:'windows必备工具推荐',
              url:'/winSoftware',
              icon:'/index/icon/computer.png'
            },
            {
              title:'程序员必备工具推荐',
              url:'/coderSoftware',
              icon:'/index/icon/codersw.png'
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
          title:'电影',
          children:[
            {
              title:'豆瓣Top250电影在线下载',
              url:'/douban250movies/0',
              icon:'/index/icon/movie.png'
            }
          ]
        },
        {
          title:'剧集',
          children:[
            {
              title:'豆瓣评分最高的10部日剧',
              url:'/douban10JanTvs/0',
              icon:'/index/icon/rj.png'
            },
            {
              title:'豆瓣9分以上超好看的日剧',
              url:'/doubanGrade9JanTvs/0',
              icon:'/index/icon/ta.png'
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
  },
  created(){
    
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
