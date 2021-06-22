
<template>
  <div class="b-main">
    <comHeader></comHeader>
    <Nuxt />
    <comFooter></comFooter>
  </div>
</template>
<script>
import comHeader from '@/components/cHeader'
import comFooter from '@/components/cFooter'
export default {
  name:'default',
  data(){
    return {

    }
  },
  components:{
    comHeader,
    comFooter
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.b-main{
  margin:auto;
}
</style>
