// pages/welcome/welcome.js
const settings = require('../../config/settings.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:3,
    bgImg: "/images/bg/welcome.png"
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
    console.log('welcome页面加载完成')
    
    // 请求后端接口，加载背景图
    wx.request({
      url: settings.welcome_url,
      method: 'GET',
      success: (res) => {
        console.log(res)
        if (res.data.code == 0) {
          this.setData({
            bgImg: res.data.result
          })
        }else {
          wx.showToast({
            title: "请求网络异常",
          })
        }
      }
    })
  
    
    var inst = setInterval(()=>{
      // 先倒计时
      this.setData({
        second: this.data.second - 1
      })
      
      console.log('当前倒计时:', this.data.second)
      
      // 再判断是否需要跳转
      if (this.data.second <= 0){
        console.log('倒计时结束，准备跳转')
        
        // 清除定时器
        clearInterval(inst)

        // 延迟一点再跳转，确保页面状态更新完成
        setTimeout(() => {
          console.log('开始跳转到首页')
          wx.switchTab({
            url: '/pages/index/index',
            success: function(res) {
              console.log('跳转成功', res)
            },
            fail: function(err) {
              console.error('跳转失败', err)
            }
          })
        }, 100)
      }
    }, 1000)
  },


})