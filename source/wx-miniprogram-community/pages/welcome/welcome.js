// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:5
  },

  doJump(){
    // 点击跳转到首页
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
    var inst = setInterval(()=>{
      // 先倒计时
      this.setData({
        second: this.data.second - 1
      })
      
      // 再判断是否需要跳转
      if (this.data.second <= 0){
        // 清除定时器
        clearInterval(inst)

        // 跳转
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    }, 1000)
  },


})