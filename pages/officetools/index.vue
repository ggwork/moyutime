<template>
  <div class="online">
    <data-template :toolsData="onlineData"></data-template>
    <comFooter></comFooter>
  </div>
</template>
<script>
import comFooter from '@/components/footer'
import dataTemplate from '@/components/officetools/data-template'
import onlineData from '@/assets/officetools/onlineData'
export default {
  name: 'officetools',
  data() {
    return {
      onlineData: onlineData
    }
  },
  components: {
    dataTemplate,
    comFooter
  }
}
</script>