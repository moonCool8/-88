// pages/03lesson/03lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessonInfo: [{
        path: "/img/DIY1.png",
        title: "创意DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isKnow: false,
        name: "创意DIY班"
      },
      {
        path: "/img/DIY2.png",
        title: "绘画班",
        subTitle: "适宜2-3岁的宝宝",
        isKnow: true,
        name: "绘画班"
      },
      {
        path: "/img/DIY3.png",
        title: "创意DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isKnow: false,
        name: "创意DIY班"
      },
      {
        path: "/img/DIY4.png",
        title: "创意DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isKnow: false,
        name: "创意DIY班"
      },
      {
        path: "/img/DIY5.png",
        title: "DIY班",
        subTitle: "适宜2-3岁的宝宝",
        isKnow: false,
        name: "DIY班"
      }
    ]
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toInfo:function(e){
  var value = e.currentTarget.dataset.name;
  // console.log(value)
    wx.navigateTo({
      url: '/pages/03lesson/lessonInfo/lessonInfo?key=' + value
    })
  }
  
})