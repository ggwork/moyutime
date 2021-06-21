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
      onlineData: onlineData,
      headDescription: onlineData.map(item => {
        return '最好用的，免费的' + item.title + '推荐'
      }).join(',')
    }
  },
  created() {
    console.log('headDescription:',this.headDescription)
  },
  head(){
    return {
      title:'在线办公工具推荐',
      meta:[
        {
          hid:'description',
          name:'description',
          conent:this.headDescription
        }
      ]
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
