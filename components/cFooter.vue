<template>
  <div class="cfooter">
      <div class="f-t">京ICP备2021006843号</div>
      <div class="f-t">我向星星许了个愿。我并不是真的相信它，但是反正也是免费的，而且也没有证据证明它不灵。</div>
      <div class="f-t">
        如有任何问题，请随时联系我，另外本人<span class="warnning">长期接外包</span>，如有需要可以联系我。QQ:1159468968，邮箱<a href="mailto:1159468968@qq.com">1159468968@qq.com</a>
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

