<template>
  <div class="main">
    <h1 class="m-title">宁缺毋滥，史上最优质的在线办公工具推荐</h1>
    <div class="m-des">
      共收录，{{ toolsData.length }}个分类，
      {{ toolsNum }}个工具，每月更新一次，距离下次更新还有
      <span class="warning">{{ remainDay }}</span>
      天
    </div>
    <div v-for="(item, index) in toolsData" :key="index" class="m-item">
      <h2 :id="item.key">{{ item.title }}</h2>
      <ul class="type-box">
        <li
          v-for="(cItem, cIndex) in item.children"
          :key="cIndex"
          :title="cItem.describe"
        >
          <a target="_blank" :href="cItem.address" class="m-wrap">
            <img :src="cItem.src" class="img-url" />
            <span class="item-content">
              <h3>{{ cItem.title }}</h3>
              <span>{{ cItem.describe }}</span>
            </span>
            <i
              class="el-icon-trophy"
              :style="{ color: trophyColor[cIndex] }"
            ></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="m-step">
      <el-steps direction="vertical">
        <el-step
          v-for="(step, index) in stepItems"
          :key="index"
          :title="step.title"
          @click.native="stepClick(step, index)"
        ></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
import _ from 'loadsh';
export default {
  name: 'tools',
  props: {
    toolsData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      remainDay: 0,
      trophyColor: ['gold', 'silver', '#B87333'],
      activeStep: 0,
      winScrollFn: null,
      itemHeight: 160, // 每一个行工具栏高度为160
      initItemScrollTop: 0,
    };
  },
  head(){
    return {
      title:'在线办公工具推荐',
      meta:[
        {
          hid: 'description',
          name: 'description',
          content: '史上最优质的在线办公工具推荐'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.toolsData.map(item=>{return '免费'+item.title}).join(',')
        }
      ]
    }
  },
  computed: {
    toolsNum() {
      return this.toolsData.reduce((total, item) => {
        return total + item.children.length;
      }, 0);
    },
    stepItems() {
      return this.toolsData.map((item) => {
        return {
          title: item.title,
          key: item.key,
        };
      });
    },
  },
  created() {
    this.remainDay = 31 - new Date().getDate();
  },
  mounted() {
    let header = document.querySelector('.h-header');
    if(header){
      let headerHeight = parseInt(window.getComputedStyle(header).height);
      let itemTop = 130; // 第一个产品块距离顶部的高度为130
      let initItemScroll = headerHeight + itemTop;
      this.initItemScrollTop = initItemScroll;

      this.winScrollFn = _.throttle(() => {
        let nowScrollTop = document.documentElement.scrollTop;
        let diffScrollHeight = nowScrollTop - initItemScroll;
        // 工具被滚到页面以外
        if (diffScrollHeight > 0) {
          this.activeStep = Math.floor(diffScrollHeight / this.itemHeight);
        } else {
          this.activeStep = 0;
        }
      }, 100);

      window.addEventListener('scroll', this.winScrollFn);
    }
    
  },
  methods: {
    stepClick(step, index) {
      document.documentElement.scrollTop = (index + 1) * this.itemHeight;
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.winScrollFn);
  },
};
</script>

<style scoped lang="scss">
.main {
  
  .m-title {
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: normal;
    color: black;
    margin-top: 30px;
  }
  
  .m-des {
    text-align: center;
    margin-bottom: 30px;
    .warning {
      color: red;
    }
  }
  
  .m-item {
    li {
      list-style: none;
    }
    h2 {
      font-size: 16px;
      text-align: left;
      margin: 10px 0 20px;
      padding-top: 20px;
      font-weight: 700;
    }
    .type-box {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      justify-content: space-between;
      li {
        width: 310px;
        background: #fff;
        display: flex;
        box-shadow: 0 1px 5px rgba(180, 195, 255, 0.3);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        -webkit-box-align: center;
        align-items: center;
        padding: 15px 10px;
        margin-bottom: 20px;
        border-radius: 2px;
        border: 1px solid transparent;
        position: relative;
        &:hover {
          box-shadow: 0 2px 10px rgba(180, 195, 255, 0.5);
          border: 1px solid #f4d7dd;
        }
        .m-wrap {
          display: inline-flex;
          align-items: center;
          text-decoration: none;

          .img-url {
            width: 25px;
            height: 25px;
            float: left;
            margin-right: 10px;
            object-fit: contain;
          }
          .item-content {
            width: 230px;
            float: left;
            h3 {
              font-size: 14px;
              line-height: 20px;
              color: #303659;
            }
            span {
              display: block;
              font-size: 12px;
              color: #888ea2;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 100%;
              padding: 3px 0px;
            }
          }
        }
      }
    }
  }
  .m-step {
    position: fixed;
    height: 300px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    // /deep/.el-step {
    //   .el-step__icon {
    //     border-width: 1px;
    //   }
    //   .el-step__title {
    //     font-weight: normal;
    //     cursor: pointer;
    //   }
    // }
  }
  
}
</style>
