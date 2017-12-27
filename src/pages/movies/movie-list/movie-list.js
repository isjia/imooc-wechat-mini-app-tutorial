// pages/movies/movie-list/movie-list.js
var baseUrl = getApp().globalData.doubanBase;
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: {},
    movieUrl: '',
    currentPosition: 0,
    totalCount: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    this.setData({
      navigationTitle:options.category
    })
    var url = '';
    switch (options.category){
      case '正在上映的电影-北京':
        url = baseUrl + '/v2/movie/in_theaters';
        break;
      case '即将上映的电影':
        url = baseUrl + '/v2/movie/coming_soon';
        break;
      case '豆瓣电影Top250':
        url = baseUrl + '/v2/movie/top250';
        break;
    }
    this.setData({
      movieUrl: url
    })
    this.initLoad();
    wx.showNavigationBarLoading();
  },

  // 页面初次加载
  initLoad: function(){
    var count = 18;
    var start = 0;
    this.setData({
      currentPosition: 18,
      totalCount: 0
    });
    util.getMovies(this.data.movieUrl, start, count, this.parseMovies);  
    wx.showNavigationBarLoading();
  },

  parseMovies: function(data){
    var movieList = {};
    if (this.data.totalCount > 0) {
      movieList = this.data.movieList;
    }
    else {
      movieList = {
        movies: [],
        title: data.title,
        total: data.total
      };
    }

    data.subjects.forEach(function (item) {
      var movie = {
        cover: item.images.large,
        name: item.title,
        stars: util.convertToStarArray(item.rating.stars),
        average: item.rating.average
      }
      movieList.movies.push(movie);
    })
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
    this.setData({
      movieList: movieList,
      totalCount: this.data.totalCount + data.subjects.length
    })
  },

  /**
   * 上划加载更多电影
   */
  // onLoadMoreMovies: function(){
  //   var start = this.data.currentPosition;
  //   var count = 9;
  //   console.log('start: ' + start);
  //   if (start < this.data.movieList.total) {
  //     util.getMovies(this.data.movieUrl, start, count, this.parseMovies);
  //     wx.showNavigationBarLoading();
  //     this.setData({
  //       currentPosition: start + count
  //     })
  //   }
  //   else {
  //     console.log("到底了...");
  //   }
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navigationTitle,
    })
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
    this.initLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var start = this.data.currentPosition;
    var count = 9;
    console.log('start: ' + start);
    if (start < this.data.movieList.total) {
      util.getMovies(this.data.movieUrl, start, count, this.parseMovies);
      wx.showNavigationBarLoading();
      this.setData({
        currentPosition: start + count
      })
    }
    else {
      console.log("到底了......");
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})