// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: 'normal',
    devicePosition: 'back',
    flash: 'auto',
    photo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 申请摄像头权限
    wx.getSetting({
      success: (res) => {
        const auth = res.authSetting || {}
        if (!auth['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            fail: () => {
              wx.showModal({
                title: '权限申请',
                content: '请允许使用摄像头以拍照',
                success: (r) => { if (r.confirm) wx.openSetting({}) }
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.ctx = wx.createCameraContext()
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



  onInitDone(e) {
    // e.detail.maxZoom 从 2.10.0 起可用
    // 这里不做处理，仅保证事件绑定
  },

  onCameraError(e) {
    wx.showToast({ title: '摄像头错误', icon: 'none' })
  },

  onTakePhoto() {
    if (this.data.mode !== 'normal') {
      console.warn('[camera] takePhoto blocked: current mode is scanCode')
      wx.showToast({ title: '当前为扫码模式，不能拍照', icon: 'none' })
      return
    }
    if (!this.ctx) this.ctx = wx.createCameraContext()
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({ photo: res.tempImagePath })
        // 如需把拍照结果写回上一页，也可以在此处设置上一页的 photo 字段
        const pages = getCurrentPages()
        if (pages.length > 1) {
          const prevPage = pages[pages.length - 2]
          if (prevPage && typeof prevPage.setData === 'function') {
            prevPage.setData({ photo: res.tempImagePath })
          }
        }
      },
      fail: (err) => {
        console.error('[camera] takePhoto failed:', err)
        wx.showToast({ title: '拍照失败', icon: 'none' })
      }
    })
  },
  // 扫码成功后，把结果写回上一页的 phone 字段并返回
  onScanCode(e) {
    const result = (e && e.detail && e.detail.result) || ''
    const match = result.match(/1[3-9]\d{9}/)
    const phone = match ? match[0] : result
    const pages = getCurrentPages()
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 2]
      if (prevPage && typeof prevPage.setData === 'function') {
        prevPage.setData({ phone })
      }
    }
    wx.showToast({ title: '已写入手机号', icon: 'success' })
    wx.navigateBack({ delta: 1 })
  },
  onToggleDevice() {
    this.setData({ devicePosition: this.data.devicePosition === 'back' ? 'front' : 'back' })
  },

  onToggleFlash() {
    const seq = ['auto', 'on', 'off']
    const idx = seq.indexOf(this.data.flash)
    this.setData({ flash: seq[(idx + 1) % seq.length] })
  },

  onClearPhoto() {
    this.setData({ photo: '' })
  },

})