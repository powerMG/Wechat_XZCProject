// pages/headline/headline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData: [{
        title: "排列方式1",
        newsType: "娱乐",
        newsDate: "2019-3-19 00:19:39",
        message: "随着iPhone订单枯竭，富士康员工工资减少，大规模辞职潮来袭！",
        newImgs: []
      },
      {
        title: "排列方式2",
        newsType: "美食",
        newsDate: "2019-3-19 00:19:39",
        message: "这早餐隔三差五就做一次，孩子特爱吃，做法简单不费事！",
        newImgs: [
          "../../../images/banner3.jpg",
          "../../../images/banner1.jpg",
          "../../../images/banner2.jpg"
        ]
      },
      {
        title: "排列方式3",
        newsType: "汽车",
        newsDate: "2019-3-19 00:19:39",
        message: "进口车密集降价！背后不只是买车便宜这么简单……",
        newImgs: [
          "../../../images/banner3.jpg"
        ]
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

  }
})