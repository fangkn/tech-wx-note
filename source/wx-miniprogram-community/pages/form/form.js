// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : '',
    address : '',
    phone : '',
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

  }
  ,

  goToCamera() {
    wx.navigateTo({ url: '/pages/camera/camera' })
  },

  onInputName(e) {
    this.setData({ name: e.detail.value })
  },

  onInputAddress(e) {
    this.setData({ address: e.detail.value })
  },

  onSubmit() {
    if (!this.data.photo) {
      wx.showToast({ title: '请先拍照或上传图片', icon: 'none' })
      return
    }
    if (!this.data.name) {
      wx.showToast({ title: '请输入居民姓名', icon: 'none' })
      return
    }
    if (!this.data.address) {
      wx.showToast({ title: '请输入居民地址', icon: 'none' })
      return
    }
    wx.showToast({ title: '提交成功', icon: 'success' })
  }
})