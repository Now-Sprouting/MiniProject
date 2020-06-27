App({
  onLaunch: function () {
  },

  onShow: function (options) {
    /*  1. 小程序的特定打开场景 */
    // console.log(options.scene);
    /* 2. 获取用户信息,并将获取到的用户信息传递给服务器 */
    wx.getUserInfo({
      success: function (res) {
        // console.log(res);
      }
    })
  },

  onHide: function () {
  },

  onError: function (msg) {
  },
  /* 3. 除了执行特定的生命周期外,还可以在app.js中定义全局数据(所有page都可以拿到全局数据) */
  globalData:{
    name:'Curry',
    num:30
  }

})
