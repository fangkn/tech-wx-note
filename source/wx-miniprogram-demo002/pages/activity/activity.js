// pages/activity/activity.js
Page({
  handleConsole(){
   console.log("有点击事件产生了--------")
 },

 handleParent(){
  console.log("有点击事件产生了--------Parent")
 },


 handleChildren(){
  console.log("有点击事件产生了--------children")
 },

 handleClick01(event){
  console.log("有点击事件有传参："+JSON.stringify(event)) 
 },

 handleClick02(event){

  // currentTarget : 事件绑定者 --
  // target: 事件触发者 -> button 
  // 更可靠的方式
  console.log(event.target.dataset)
  console.log(event.target.dataset.name)  // 将正确显示 'kn.fang'
  console.log(event.target.dataset.id)   
 },

 handlenavigateTo(){
   wx.navigateTo({
     url: '/pages/back/back',
   })
 },

 handleredirectTo(){
  wx.redirectTo({
    url: '/pages/back/back',
  })
},

handleswitchTab(){
  wx.switchTab({
    url: '/pages/my/my',
  })
},

handlereLauch(){
  wx.reLaunch({
    url: '/page/back/back',
  })
},

handlenavigateBack(){
  wx.navigateBack()({
    url: '/page/admin/admin',
  })
},
 

})