<template>
  <div class="main">
    <h1 class="m-title">史上最全的{{ terminalTypeName }}必备软件</h1>
    <p class="m-des">共收录{{ terminalTypeName }}必备软件<span class="warnning">{{ data.length }}</span>款，几乎涵盖了{{ terminalTypeName }}常用的好软件</p>
    <div class="info">
      <div class="soft" v-for="(soft,index) in data" :key="index">
        <h2 class="s-name">{{(index + 1) + '.' + soft.name }}</h2>
        <div class="s-cont">
          <div class="s-c-title">软件简介：</div>
          <div class="s-c-detail">
            {{ soft.brief }}
          </div>
        </div>
        <div class="s-cont">
          <span class="s-c-detail">
            <a :href="soft.directions" target="_blank" title="使用教程" @click="checkJc(soft)">使用教程</a>
          </span>
        </div>
          
        <div class="s-cont">
          <span class="s-c-detail" click="checkDownload(soft)">
            <a :href="soft.downloadLink" target="_blank" title="下载地址" @click="checkDownload(soft)">下载地址</a>
          </span>
        </div>
      </div>
    </div>
    <!-- 赞赏按钮 -->
    <reward :showRewardDialog="showRewardDialog" @hideRewardDialog="hideRewardDialog"></reward>
  </div>
</template>
<script>
import reward from '@/components/common/reward.vue'
import { setTimeout } from 'timers';
export default {
  props:{
    terminalType:{
      type:String,
      required: true
    },
    terminalTypeName:{
      type: String,
      required: true
    },
    data:{
      type: Array,
      required: true
    }
  },
  components:{
    reward
  },
  data(){
    return {
      showRewardDialog:false
    }
  },
  created(){
    // 3s
    setTimeout(()=>{
      this.showRewardDialog = true
    },3000)
  },
  methods:{
    checkJc(soft){
      window.uMengTj && window.uMengTj(this.terminalTypeName+'必备软件','使用教程',soft.name)
    },
    checkDownload(soft){
      window.uMengTj && window.uMengTj(this.terminalTypeName+'必备软件','下载地址',soft.name)
    },
    hideRewardDialog(){
      this.showRewardDialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
$marTop:10px;
.main{
  width: 1200px;
  margin:auto; 
  .m-title{
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: normal;
    color: black;
    margin-top: 30px;
  }
  .m-des{
    text-align: center;
    margin-bottom: 30px;
    .warnning{
      color:red;
    }
  }
  .info{
    .soft{
      margin-bottom: 30px;
      .s-name{

      }
      .s-cont{
        .s-c-title{
          font-weight: 600;
          font-size: 16px;
          line-height: 18px;
          color: #152844;
          height: 16px;
          border-left: 4px solid #4684e2;
          margin: 27px 0 11px;
          padding: 0 0 0 8px;
        }
        .s-c-detail{
          color: #484848;
          font-size: 16px;
          line-height: 26px;
          margin: 11px 0;
        }
      }
    }
  }
}
</style>

