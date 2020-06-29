Page({
  data: {
    num: 0
  },
  handleAdd() {
    this.setData({
      num: this.data.num + 1
    })
  },
  handleItemclick(event) {
    console.log(event);
  },
  handleTap() {
    var select = this.selectComponent('#select')
    select.addNum()
  }
})