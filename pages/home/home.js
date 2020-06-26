Page({
  data: {
    name: '丁同学',
    star: [
      { num: 30, name: 'Curry' },
      { num: 11, name: 'Thompson' },
      { num: 30, name: 'Durante' }
    ],
    count: 0
  },
  handleAddClick() {
    this.setData({
      count: this.data.count + 1
    })
  }
})