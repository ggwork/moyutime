<template>
  <div class="cfooter">
      <div class="f-t"><a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021006843号</a></div>
      <div class="f-t">本网站所有内容均来源于网络,如有侵犯您版权的问题，请及时与我联系，本人收到信息第一时间删除。</div>
      <!-- <div class="f-t">本网站只做排名和导流，所有内容都是经过本人日日夜夜辛苦整理所得。如有侵犯您版权的问题，请及时与我联系，本人收到信息第一时间删除。</div> -->
      <div class="f-t">本人<span class="warnning">长期接前端外包</span>，钱多的话包我都行。微信:guo330504，邮箱<a href="mailto:1159468968@qq.com">1159468968@qq.com</a>
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

