// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notices: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadNotices();
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
    this.loadNotices();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 可以在这里实现分页加载
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '社区通知',
      path: '/pages/notice/notice'
    };
  },

  /**
   * 加载通知列表
   */
  loadNotices() {
    this.setData({
      loading: true
    });

    // 模拟网络请求
    setTimeout(() => {
      const mockNotices = [
        {
          id: 1,
          type: 'announcement',
          typeIcon: '📢',
          typeName: '公告',
          title: '社区停水通知',
          summary: '因管道维修，明日上午8:00-12:00将停水，请提前储水。给您带来不便，敬请谅解。',
          publishTime: '2024-01-15 09:30',
          publisher: '物业管理处',
          priority: 'high',
          isRead: false
        },
        {
          id: 2,
          type: 'activity',
          typeIcon: '🎉',
          typeName: '活动',
          title: '春节联欢晚会报名开始',
          summary: '社区春节联欢晚会将于1月28日举行，现开始接受节目报名，欢迎大家踊跃参与。',
          publishTime: '2024-01-14 16:20',
          publisher: '社区文化中心',
          priority: 'normal',
          isRead: true
        },
        {
          id: 3,
          type: 'maintenance',
          typeIcon: '🔧',
          typeName: '维修',
          title: '电梯维保通知',
          summary: '1号楼电梯将于本周六进行定期维保，维保期间请使用楼梯或2号楼电梯。',
          publishTime: '2024-01-13 14:15',
          publisher: '设备维护部',
          priority: 'normal',
          isRead: false
        },
        {
          id: 4,
          type: 'security',
          typeIcon: '🛡️',
          typeName: '安全',
          title: '加强门禁管理通知',
          summary: '近期发现有外来人员随意进出，请各位业主配合门禁管理，不要随意为陌生人开门。',
          publishTime: '2024-01-12 11:45',
          publisher: '安保部',
          priority: 'high',
          isRead: true
        },
        {
          id: 5,
          type: 'service',
          typeIcon: '🏥',
          typeName: '服务',
          title: '社区义诊活动预告',
          summary: '本月20日将邀请市医院专家来社区进行免费义诊，请有需要的居民提前预约。',
          publishTime: '2024-01-11 10:30',
          publisher: '社区服务中心',
          priority: 'normal',
          isRead: false
        },
        {
          id: 6,
          type: 'payment',
          typeIcon: '💰',
          typeName: '缴费',
          title: '物业费缴费提醒',
          summary: '2024年第一季度物业费已开始收取，请各位业主及时缴费，可通过线上或线下方式缴纳。',
          publishTime: '2024-01-10 08:00',
          publisher: '财务部',
          priority: 'normal',
          isRead: true
        }
      ];

      this.setData({
        notices: mockNotices,
        loading: false
      });

      // 停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  },

  /**
   * 点击通知卡片
   */
  onNoticeTap(e) {
    const notice = e.currentTarget.dataset.notice;
    
    // 标记为已读
    if (!notice.isRead) {
      this.markAsRead(notice.id);
    }

    // 跳转到通知详情页
    wx.navigateTo({
      url: `/pages/notice-detail/notice-detail?id=${notice.id}`,
      fail: () => {
        wx.showToast({
          title: '通知详情页开发中',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 标记单个通知为已读
   */
  markAsRead(noticeId) {
    const notices = this.data.notices.map(notice => {
      if (notice.id === noticeId) {
        return { ...notice, isRead: true };
      }
      return notice;
    });

    this.setData({
      notices
    });
  },

  /**
   * 标记全部为已读
   */
  onMarkAllRead() {
    const notices = this.data.notices.map(notice => ({
      ...notice,
      isRead: true
    }));

    this.setData({
      notices
    });

    wx.showToast({
      title: '已全部标记为已读',
      icon: 'success'
    });
  },

  /**
   * 刷新通知列表
   */
  onRefresh() {
    this.loadNotices();
  }
})