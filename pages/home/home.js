const app = getApp()
const name = app.globalData.name
const num = app.globalData.num
// console.log(name,num);

Page({
  /* 1. 初始化数据 */
  data: {
    message: 'hello'
  },
  /* 2. 生命周期 */
  onLoad() {

  },
  onShow() {

  },
  onHide() {

  },
  onReady() {

  },
  /* 3.监听wxml中的事件 */
  handleGetUserIfon(event) {
    console.log(event.detail);
  },
  /* 4. 监听其他事件 */
  onPullDownRefresh() {
    console.log('页面下拉');
  }
})