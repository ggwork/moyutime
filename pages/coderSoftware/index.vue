<template>
  <div class="main">
    <software-list-template :data="softData" :terminalType="terminalType" :terminalTypeName="terminalTypeName"></software-list-template>
  </div>
</template>
<script>
import softwareListTemplate from '@/components/software/softwareListTemplate.vue'
import softData from '@/assets/coderSoftware/data'
export default {
  components:{
    softwareListTemplate
  },
  data(){
    return {
      softData,
      terminalType:'coder',
      terminalTypeName:'程序员',
      keywords:''
    }
  },
  created(){
    this.keywords = softData.map(item=>{return item.name}).join(' ')
  },
  head(){
    return {
      title:'程序员必备软件，程序员超强实用工具，程序员必备工具',
      meta:[
        {
          name: 'description',
          content: 'w程序员必备软件，程序员超强实用工具，程序员必备工具'
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

