<template>
  <div class="cfooter">
      <div class="f-t">京ICP备2021006843号</div>
      <div class="f-t">本网站所有书籍均来源于网络，本人只是将其整理集中在了一个网站。如有版权问题，请及时与我联系，本人收到信息第一时间删除。</div>
      <div class="f-t">生活不易，本人<span class="warnning">长期接前端外包</span>，如有需要可以联系我，价格从优。QQ:1159468968，邮箱<a href="mailto:1159468968@qq.com">1159468968@qq.com</a>
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

