<template>
  <div class="main">
    <software-list-template :data="softData" :terminalType="terminalType" :terminalTypeName="terminalTypeName"></software-list-template>
  </div>
</template>
<script>
import softwareListTemplate from '@/components/software/softwareListTemplate.vue'
import softData from '@/assets/winSoftware/data'
export default {
  components:{
    softwareListTemplate
  },
  data(){
    return {
      softData,
      terminalType:'windows',
      terminalTypeName:'windows',
      keywords:''
    }
  },
  created(){
    this.keywords = softData.map(item=>{return item.name}).join(' ')
  },
  head(){
    return {
      title:'windows必备软件，windows超强实用工具，windows必备工具',
      meta:[
        {
          name: 'description',
          content: 'windows必备软件，windows超强使用工具，windows必备工具'
        },
        {
          name:'keywords',
          content:this.keywords
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>

</style>

