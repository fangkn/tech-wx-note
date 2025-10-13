// index.js
Page({
  data: {
    date: '',
    show: false,
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
