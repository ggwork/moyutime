import Vue from 'vue'
const commonData = {
  install(Vue) {
    Vue.prototype.commonData = {
      val: function(val) {
        return val
      }
    }
  }
}
Vue.use(commonData)