const util = require('../../utils/util.js')
var baseUrl = getApp().globalData.doubanBase;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var comingSoonUrl = baseUrl + '/v2/movie/coming_soon';
    var inTheatersUrl = baseUrl + '/v2/movie/in_theaters';
    var top250Url = baseUrl + '/v2/movie/top250';
   
    this.getMoviesData(inTheatersUrl, 0, 3, 0);
    this.getMoviesData(comingSoonUrl, 0, 3, 1);    
    this.getMoviesData(top250Url, 0, 3, 2);
  },

  // 获取豆瓣电影的数据
  getMoviesData: function(url, start, count, idx) {
    var _this = this;
    var getMoviesUrl = url + '?start='+ start + '&count=' + count;
    wx.request({
      url: getMoviesUrl,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data);
        _this.parseMoviesData(res.data, idx);
      }
    })
  },

  // 预处理豆瓣获取到的movie信息
  parseMoviesData: function(data, idx){
    var movieList = {
      movies: [],
      title: data.title,
      total: data.total
    };
    data.subjects.forEach(function(item){
      var movie = {
        cover: item.images.large,
        name: item.title,
        stars: util.convertToStarArray(item.rating.stars),
        average: item.rating.average
      }
      movieList.movies.push(movie);
    })
    var movieLists = this.data.movieLists;
    movieLists[idx] = movieList;
    this.setData({
      movieLists: movieLists
    }) 
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