const settings = require('../../config/settings.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayCount: 0,
    activeTab: 'register',
    members: [
      { id: 1, name: '住户A', region: '网络区域 | 2/1', building: '2单元1号楼', avatar: '/images/home/home_1.png' },
      { id: 2, name: '住户B', region: '网络区域 | 2/2', building: '2单元2号楼', avatar: '/images/home/home_2.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 从后端获取采集列表
    wx.request({
      url: settings.collecton_url,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200 && res.data && Array.isArray(res.data.data)) {
          const members = res.data.data.map(item => ({
            id: item.id,
            name: item.name,
            region: `网格区域 | ${item.area || '未分配'}`,
            building: item.area || '未分配',
            avatar: item.avatar,
          }))

          this.setData({
            members,
            todayCount: res.data.today_count ?? members.length,
          })
        } else {
          wx.showToast({ title: '数据格式异常', icon: 'none' })
        }
      },
      fail: () => {
        wx.showToast({ title: '网络错误', icon: 'none' })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  
  goToForm() {
    wx.navigateTo({ url: '/pages/form/form' })
  },
  goToStatistics() {
    wx.navigateTo({ url: '/pages/statistics/statistics' })
  },

  onDelete(e) {
    wx.showModal({
      title: '确认删除',
      content: '确定删除该采集区域吗？',
      success: (res) => {
        if (res.confirm) {
          const id = e.currentTarget.dataset.id
          const next = this.data.members.filter(m => m.id !== id)
          this.setData({ members: next, todayCount: next.length })
        }
      }
    })
  }
})