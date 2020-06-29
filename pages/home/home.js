Page({
  handleShowToast(){
   wx.showToast({
     title: '成功',
     icon:'',
     image:"../../icon/fenlei.png"
   })
   },
  onShareAppMessage(options){
    return{
      title:'hello',
      path:'/pages/home/home.wxml',
      imageUrl:'../../icon/foot1-copy.png'
    }
  }
  
})