<template>
  <div class="online">
    <data-template :toolsData="onlineData"></data-template>
  </div>
</template>
<script>
import dataTemplate from '@/components/onlineTools/data-template'
import onlineData from '@/assets/onlineTools/onlineData'
export default {
  name: 'onlineTools',
  data() {
    return {
      onlineData: onlineData
    }
  },
  components: {
    dataTemplate,
  }
}
</script>
<style lang="scss" scoped>
.online{
  width: 1200px;
  margin:auto;
}
</style>
