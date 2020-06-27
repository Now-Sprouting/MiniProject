// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleLoad() {
    console.log(1);
  },
  handleChooseImage() {
    const that = this
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFiles[0].path
        console.log(path);
        that.setData({
          imagePath: path
        })
      }
    })
  }
})