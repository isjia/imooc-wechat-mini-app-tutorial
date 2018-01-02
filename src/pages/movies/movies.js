const util = require('../../utils/util.js')
var baseUrl = getApp().globalData.doubanBase;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieLists: [],
    showSearchPanel: false,
    searchResultList: {}
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
        average: item.rating.average,
        movieId: item.id
      }
      movieList.movies.push(movie);
    })
    var movieLists = this.data.movieLists;
    movieLists[idx] = movieList;
    this.setData({
      movieLists: movieLists
    }) 
  },

  // 跳转到更多页面
  onMoreTap: function(event) {
    wx.navigateTo({
      url: './movie-list/movie-list?category='+event.currentTarget.dataset.category,
    })
  },

  // 当search input 聚焦
  onSearchFocus: function(event) {
    console.log("search focus");
    this.setData({
      showSearchPanel: true
    })
  },

  // 点击电影，掉转到电影详情页
  onMoiveTap: function(event) {
    console.log('movie id: ' + event.currentTarget.dataset.movieId);
    wx.navigateTo({
      url: './movie-detail/movie-detail?id=' + event.currentTarget.dataset.movieId,
    })
  },

  // 当search 提交以后出发
  onSearchConfirm: function (event) {
    console.log("search: " + event.detail.value);
    this.data.searchResultList = {};
    var keyWords = event.detail.value;
    var url = baseUrl + '/v2/movie/search?q=' + keyWords;
    this.getSearchResults(url, 0, 18, 'searchResultList');
    this.setData({
      currentPosition: 18,
      searchUrl: url
    });
  },

  onSearchCancel: function(event) {
    console.log("search cancel");
    this.setData({
      showSearchPanel: false
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
    var start = this.data.currentPosition;
    var count = 9;
    console.log('search start: ' + start);
    if (start < this.data.searchResultList.total) {
      this.getSearchResults(this.data.searchUrl, start, count, 'searchResultList');
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
    
  },

  // 获取豆瓣电影的搜索结果
  getSearchResults: function (url, start, count, obj) {
    var _this = this;
    var getMoviesUrl = url + '&start=' + start + '&count=' + count;
    wx.request({
      url: getMoviesUrl,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        _this.parseSearchResultsData(res.data, obj);
        wx.hideNavigationBarLoading();
      }
    })
  },

  // 预处理豆瓣获取到的movie信息
  parseSearchResultsData: function (data, obj) {
    var results = {};
    if (this.data.searchResultList.movies){
      results = this.data.searchResultList;      
    }
    else {
      results = {
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
        average: item.rating.average,
        movieId: item.id
      }
      results.movies.push(movie);
    })
    this.setData({
      [obj]: results
    })
  },
})