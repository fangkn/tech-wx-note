// index.js
Page({
  data: {
    //date: '',
    bannerList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    console.log('加载banner数据')
    
    // 请求后端接口，加载banner数据
    wx.request({
      url: 'http://127.0.0.1:8000/community/banner',
      method: 'GET',
      success: (res) => {
        console.log(res)
        if (res.data.code == 0) {
          list = res.data.result

          // 对list 排序
          list.sort((a, b) => {
            return b.sort - a.sort
          })
          // 取出 list 中的  img 字段
          imgList = list.map(item => item.img)
          this.setData({
            bannerList: imgList
          })
        }else {
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
