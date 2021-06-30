<template>
  <el-dialog
    :visible="showRewardDialog"
    width="30%"
    center
    custom-class="bdDialog"
    @close="hideRewardDialog"
    >
    <div class="bd-title">整理不易，打赏下好不好  (/≧▽≦)/</div>
    <div class="bd-money">
      <img src="/index/money.jpg" alt="微信赞赏码"/>
    </div>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="hideRewardDialog">确 定</el-button>
    </span> -->
  </el-dialog>
</template>
<script>
export default {
  props:{
    showRewardDialog:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    hideRewardDialog(){
      this.$emit('hideRewardDialog')
    },
  }
}
</script>

<style lang="scss">
.bdDialog{
  border-radius: 12px;
  .bd-title{
    font-weight:bold;
    text-align:center;
    font-size:18px;
  }
  .bd-money{
    width: 200px;
    height: 200px;
    margin:auto;
    margin-top:30px;
    margin-bottom:30px;
    text-align:center;
    img{
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>