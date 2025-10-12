// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{
      avatar:"/images/img/b.jpg",
      name : "kn",
      score: "9991"
    },
    servicePhone: '400-123-4567',
    serviceWeChat: 'wx-community'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    return {
      title: '智慧社区应用',
      path: '/pages/index/index'
    }
  }
  ,
  // 税分兑换记录
  goExchange(){
    wx.navigateTo({
      url: '/pages/exchange/exchange'
    })
  },
  // 我参加的活动
  goMyActivity(){
    wx.navigateTo({
      url: '/pages/activity/activity'
    })
  },
  // 分享应用（可额外触发分享菜单）
  shareApp(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  // 联系客服
  contactService(){
    const { servicePhone, serviceWeChat } = this.data
    wx.showActionSheet({
      itemList: ['拨打电话', '复制微信号'],
      success: (res) => {
        if (res.tapIndex === 0) {
          wx.makePhoneCall({ phoneNumber: servicePhone })
        } else if (res.tapIndex === 1) {
          wx.setClipboardData({ data: serviceWeChat })
        }
      }
    })
  }
})