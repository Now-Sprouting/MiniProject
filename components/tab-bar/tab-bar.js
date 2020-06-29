// components/tab-bar/tab-bar.js
Component({
  data: {
    activeNum: 0
  },
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleTap(event) {
      var index = event.target.dataset.index
      this.setData({
        activeNum: index
      })

      this.triggerEvent('itemclick', { index, title: this.properties.titles[index] })
    }

  }
})
