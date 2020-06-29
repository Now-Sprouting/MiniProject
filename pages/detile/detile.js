// pages/detile/detile.js
Page({

  onLoad: function (options) {
    console.log(options);
  },


  onUnload: function () {
    // 1.获取首页页面对象
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    home.setData({
      title:'呵呵呵'
    })
    // console.log(home);
  },


})