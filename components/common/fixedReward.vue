<template>
  <div class="fix">
    <div class="reward" @click="clickFixedReward">
      <img src="/index/icon/reward.svg" alt="赞赏" srcset="">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    clickFixedReward(){
      this.$emit('clickFixedReward')
    }
  }
}
</script>
<style lang="scss" scoped>
.fix{
  position: fixed;
  right:50%;
  bottom:100px;
  transform: translateX(680px);
  width: 40px;
  height: 40px;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>

