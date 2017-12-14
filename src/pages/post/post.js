var postData = require('../../data/local-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },
  /**
   * 点击一个post
   */
  onTapPostItem: function (event) {
    var id = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: './post-detail/post-detail?postId=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * tap an author
   */
  onAuthorTap: function (event) {
    console.log('tap an author');
  },

  onSwiperTap: function(event) {
    // target 和 currentTarget，target是指当前点击的组件，currentTarget是指事件捕获的组件
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: 'post-detail/post-detail?postId='+postId
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(postData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})