import Vue from 'vue'
const commonData = {
  install(Vue) {
    Vue.prototype.$commonData = {
      val: function(val) {
        return val
      },
      // 每一页显示书籍的数量
      pageBookNums:8 
    }
  }
}
Vue.use(commonData)