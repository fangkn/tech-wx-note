// index.js
const settings = require('../../config/settings.js')

Page({
  data: {
    
    banner_list: [{"img":"/images/banner/banner001.png","order": 100}],
    notice_list:[{"title":"通知标题","content":"这是一条本地通知！","img":"","order": 100}],
    bottom_list:[{"img":"/images/home/home_1.png","order": 100}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    console.log('加载index 数据')
    
    //请求后端接口，加载主页数据
    wx.request({
      url: settings.index_url,
      method: 'GET',
      success: (res) => {
        console.log(res)
        if (res.data.code == 0) {
          var banners = res.data.data.banner_list
          
          // 对list 排序
          banners.sort((a, b) => {
            return b.sort - a.sort
          })
          
          var notices = res.data.data.notice_list
          // 对list 排序
          notices.sort((a, b) => {
            return b.sort - a.sort
          })

          var bottoms = res.data.data.bottom_list
          // 对list 排序
          bottoms.sort((a, b) => {
            return b.sort - a.sort
          })
      
          this.setData({
            banner_list: banners,
            notice_list: notices,
            bottom_list: bottoms
          })
        }else {
          console.log('请求失败:'+res.data.msg)
          wx.showToast({
            title: "请求网络异常",
          })
        }
      } 
    })
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },

  gotoCollection(){
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  gotoActvity(){
    wx.switchTab({
      url: '/pages/activity/activity',
    })
  },
  gotoFace(){
    wx.navigateTo({
      url: '/pages/face/face',
    })
  },
  gotoVoice(){
    wx.navigateTo({
      url: '/pages/voice/voice',
    })
  },
  gotoHeart(){
    wx.navigateTo({
      url: '/pages/heart/heart',
    })
  },
  gotoGoods(){
    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  }
});
