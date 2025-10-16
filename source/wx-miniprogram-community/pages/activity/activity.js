// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: [],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadActivities()
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
    this.loadActivities()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 可以在这里实现分页加载
    console.log('触底加载更多')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '社区活动',
      path: '/pages/activity/activity'
    }
  },

  /**
   * 加载活动列表数据
   */
  loadActivities() {
    this.setData({ loading: true })
    
    // 模拟网络请求，实际项目中应该调用真实的 API
    setTimeout(() => {
      const mockActivities = [
        {
          id: 1,
          title: '社区健康义诊活动',
          description: '邀请专业医生为社区居民提供免费健康检查和咨询服务',
          coverImage: '/images/activity/activity-2025-10-16_18-27-12.png',
          startTime: '2024-01-15 09:00',
          location: '社区活动中心',
          organizer: '社区卫生服务中心',
          participantCount: 25,
          maxParticipants: 50,
          status: 'ongoing',
          statusText: '报名中',
          canJoin: true
        },
        {
          id: 2,
          title: '春节联欢晚会',
          description: '社区居民共同参与的新春联欢活动，精彩节目等你来',
          coverImage: '/images/activity/activity-2025-10-16_18-27-58.png',
          startTime: '2024-02-08 19:00',
          location: '社区文化广场',
          organizer: '社区居委会',
          participantCount: 80,
          maxParticipants: 100,
          status: 'upcoming',
          statusText: '即将开始',
          canJoin: true
        },
        {
          id: 3,
          title: '环保志愿服务',
          description: '组织居民参与社区环境清洁和绿化美化活动',
          coverImage: '/images/activity/activity-2025-10-16_18-28-17.png',
          startTime: '2024-01-20 08:30',
          location: '社区各个角落',
          organizer: '环保志愿者协会',
          participantCount: 15,
          maxParticipants: 30,
          status: 'ongoing',
          statusText: '报名中',
          canJoin: true
        },
        {
          id: 4,
          title: '老年人健身操培训',
          description: '专业教练指导老年人学习适合的健身操，增强体质',
          coverImage: '/images/activity/activity-2025-10-16_18-28-33.png',
          startTime: '2024-01-25 15:00',
          location: '社区健身广场',
          organizer: '社区体育协会',
          participantCount: 30,
          maxParticipants: 30,
          status: 'full',
          statusText: '已满员',
          canJoin: false
        },
        {
          id: 5,
          title: '青少年科技创新展',
          description: '展示社区青少年的科技创新作品，激发创新思维',
          coverImage: '/images/activity/activity-2025-10-16_18-28-58.png',
          startTime: '2024-02-01 14:00',
          location: '社区科技馆',
          organizer: '青少年科技协会',
          participantCount: 12,
          maxParticipants: 40,
          status: 'upcoming',
          statusText: '即将开始',
          canJoin: true
        }
      ]
      
      this.setData({
        activities: mockActivities,
        loading: false
      })
    }, 1000)
  },

  /**
   * 点击活动卡片，跳转到活动详情页
   */
  onActivityTap(e) {
    const activityId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${activityId}`,
      fail: () => {
        // 如果详情页不存在，显示提示
        wx.showToast({
          title: '活动详情页面开发中',
          icon: 'none'
        })
      }
    })
  }
})