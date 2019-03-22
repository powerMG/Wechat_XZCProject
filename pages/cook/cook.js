// pages/cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    banners: [
      '../../images/banner.jpg',
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function(options) {
    var array = this.initData();
    this.setData({
      array: array
    })
  },
  initData: function() {
    let array = [];
    var object1 = new Object();
    object1.img = '../../images/list/foot-1.jpg';
    object1.title = '爱心早餐';
    object1.type = '健康养生';
    object1.liulan = '29545浏览';
    object1.pinglun = '15评论';
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../../images/list/foot-2.jpg';
    object2.title = '困了只想喝咖啡';
    object2.type = '家庭医审在线';
    object2.liulan = '245浏览';
    object2.pinglun = '1评论';
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../../images/list/foot-3.jpg';
    object3.title = '橘子吃多了容易变成小黄人';
    object3.type = '家庭医审在线';
    object3.liulan = '24543浏览';
    object3.pinglun = '13评论';
    array[2] = object3;

    var object3 = new Object();
    object3.img = '../../images/list/foot-4.jpg';
    object3.title = '搜狐新闻·手机用久了';
    object3.type = '广告';
    object3.liulan = '424543浏览';
    object3.pinglun = '313评论';
    array[2] = object3;
    return array;
  }
})