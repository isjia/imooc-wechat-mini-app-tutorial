Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item1 = {
      date: "Nov 11, 2017",
      avatar: '/images/avatar.jpg',
      title: "我是标题",
      cover: "/images/post1.jpg",
      desc: "雖然說羅技在 IFA 發表的的 CRAFT 鍵盤和 MX Sound 喇叭稍早在 1111 的時候都已經偷偷搶先在線上通路開賣，但其實今天才是它們正式的發表會呢。CRAFT 鍵盤是羅技睽違已久的高階辦公室鍵盤新品，這次主要是瞄準了創意工作者。它左上角有一個類似於微軟 Surface Dial 或 Dell Totem 的「創意轉鈕」，搭配 Adobe CC、Office 等特定套裝軟體時，可以提供各種不一樣的功能。它最有趣之處，是它可以視需求，在滑順和「段格」式的旋轉模式之間切換 -- 例如縮放可以用滑順的，提供精確的縮放比例；而選擇主題的時候，則是可以一格一格的選，確保不會一下子轉過頭。整顆轉鈕可以向下按不說，上側表面還是觸控的，提供各種不同的操作可能。",
      view_num: 66,
      collection_num: 99,
      show: true
    };
    var item2 = {
      date: "Nov 12, 2017",
      avatar: '/images/avatar.jpg',
      title: "我是标题",
      cover: "/images/post2.jpg",
      desc: "雖然說羅技在 IFA 發表的的 CRAFT 鍵盤和 MX Sound 喇叭稍早在 1111 的時候都已經偷偷搶先在線上通路開賣，但其實今天才是它們正式的發表會呢。CRAFT 鍵盤是羅技睽違已久的高階辦公室鍵盤新品，這次主要是瞄準了創意工作者。它左上角有一個類似於微軟 Surface Dial 或 Dell Totem 的「創意轉鈕」，搭配 Adobe CC、Office 等特定套裝軟體時，可以提供各種不一樣的功能。它最有趣之處，是它可以視需求，在滑順和「段格」式的旋轉模式之間切換 -- 例如縮放可以用滑順的，提供精確的縮放比例；而選擇主題的時候，則是可以一格一格的選，確保不會一下子轉過頭。整顆轉鈕可以向下按不說，上側表面還是觸控的，提供各種不同的操作可能。",
      view_num: 89,
      collection_num: 34,
      show: true
    };
    var item3 = {
      date: "Nov 13, 2017",
      avatar: '/images/avatar.jpg',
      title: "我是标题",
      cover: "/images/post3.jpg",
      desc: "雖然說羅技在 IFA 發表的的 CRAFT 鍵盤和 MX Sound 喇叭稍早在 1111 的時候都已經偷偷搶先在線上通路開賣，但其實今天才是它們正式的發表會呢。CRAFT 鍵盤是羅技睽違已久的高階辦公室鍵盤新品，這次主要是瞄準了創意工作者。它左上角有一個類似於微軟 Surface Dial 或 Dell Totem 的「創意轉鈕」，搭配 Adobe CC、Office 等特定套裝軟體時，可以提供各種不一樣的功能。它最有趣之處，是它可以視需求，在滑順和「段格」式的旋轉模式之間切換 -- 例如縮放可以用滑順的，提供精確的縮放比例；而選擇主題的時候，則是可以一格一格的選，確保不會一下子轉過頭。整顆轉鈕可以向下按不說，上側表面還是觸控的，提供各種不同的操作可能。",
      view_num: 33,
      collection_num: 66,
      show: true
    };
    var items = [item1, item2, item3];
    this.setData({
      posts: items
    });
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