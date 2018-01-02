var postData = require('../../../data/local-data.js');
var g = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var _this = this;
    var postId = params.postId;
    var post = postData.posts[postId];
    this.setData({
      post: post
    })

    // 收藏文章
    var postsCollection = wx.getStorageSync('posts_collection') || {};
    var postCollection = postsCollection[postId] || false;
    this.setData({
      collection: postCollection
    })
    postsCollection[postId] = postCollection;
    wx.setStorageSync('posts_collection', postsCollection);

    // 分享文章
    var postsShare = wx.getStorageSync('posts_share') || {};
    var postShare = postsShare[postId] || false;
    this.setData({
      share: postShare
    })
    postsShare[postId] = postShare;
    wx.setStorageSync('posts_share', postsShare);

    // 监听全局播放or暂停
    wx.onBackgroundAudioPlay(function(){
      _this.setData({
        isPlaying: true
      })
      g.g_isPlaying = true;
      g.g_musicId = _this.data.post.postId;
    })

    wx.onBackgroundAudioPause(function(){
      _this.setData({
        isPlaying: false
      })
      g.g_isPlaying = false;
    })

    wx.onBackgroundAudioStop(function () {
      _this.setData({
        isPlaying: false
      })
      g.g_isPlaying = false;
    })

    if(g.g_isPlaying && g.g_musicId === _this.data.post.postId){
       _this.setData({
         isPlaying: true
       })
    }
  },

  onCollectionTap: function(event) {
    var current = this.data.collection;
    current = !current;
    this.setData({
      collection: current
    })
    var postsCollection = wx.getStorageSync('posts_collection');
    postsCollection[this.data.post.postId] = current;
    wx.setStorageSync('posts_collection', postsCollection);

    wx.showToast({
      title: current?'收藏成功':'取消成功'
    })
  },

  onShareTap: function(event) {
    var current = this.data.share;
    current = !current;
    this.setData({
      share: current
    })
    var postsShare = wx.getStorageSync('posts_share');
    postsShare[this.data.post.postId] = current;
    wx.setStorageSync('posts_share', postsShare);
  },

  onMusicTap: function(event) {
    var music = this.data.post.music;
    var isPlaying = this.data.isPlaying;

    if (isPlaying) {
      // pause play music
      wx.pauseBackgroundAudio();
      this.setData({
        isPlaying: false
      })
    }
    else {
      // play music
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.cover
      })
      this.setData({
        isPlaying: true
      })
    }
    
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