// pages/statistics/statistics.js
const settings = require('../../config/settings.js')
Page({
  data: {
    registerCount: 0,
    todayCount: 0
  },

  onLoad() {
    wx.request({
      url: settings.collecton_url,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200 && res.data) {
          const registerCount = Array.isArray(res.data.data) ? res.data.data.length : 0
          const todayCount = res.data.today_count ?? 0
          this.setData({ registerCount, todayCount })
        } else {
          wx.showToast({ title: '数据格式异常', icon: 'none' })
        }
      },
      fail: () => {
        wx.showToast({ title: '网络错误', icon: 'none' })
      }
    })
  }
})