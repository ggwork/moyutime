<template>
  <div class="cfooter">
      <div class="f-t">京ICP备2021006843号</div>
      <div class="f-t">本网站所有内容均来源于网络，本人尽可能的附上了原外网的下载地址。</div>
      <div class="f-t">本网站只做排名和导流，所有内容都是经过本人日日夜夜辛苦整理所得。如有侵犯您版权的问题，请及时与我联系，本人收到信息第一时间删除。</div>
      <div class="f-t">生活不易，本人<span class="warnning">长期接前端外包，钱多的话包我都行</span>，如有需要可以联系我，价格从优。QQ:1159468968，邮箱<a href="mailto:1159468968@qq.com">1159468968@qq.com</a>
      </div>
  </div>
</template>
<script>
export default {
  name:'cFooter'
}
</script>

<style lang="scss" scoped>
.cfooter {
  width: 100%;
  line-height: 20px;
  border-top:1px dotted #888ea2;
  padding:20px 0px;
  color: #888ea2;
  text-align: center;
  margin-top:50px;
  .f-t{
    margin-top: 10px;
    .warnning{
      color:red;
    }
  }
}
</style>

