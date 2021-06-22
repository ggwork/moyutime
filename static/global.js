// 友盟统计代码

window._czc = window._czc_ || []
window._czc.push(['_setAccount', '1279994399'])
// 友盟统计
// category 表示事件发生在谁身上，如视频，小说等
// action 表示访客跟元素的交互行为，如播放、收藏
// label 更详细的时间描述
function uMengTj(category,action,label) {
  window._czc.push(['_trackEvent',category,action,label])
}
window.uMengTj = uMengTj