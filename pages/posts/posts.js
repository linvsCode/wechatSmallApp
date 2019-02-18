Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Sep 18 2016"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [
      {
        date: "DEC 99 2018",
        title: "正是虾肥蟹壮时",
        content: "罗里吧嗦小程序，PHP是世界上最好的语言",
        view_num: "1222",
        collect_num: "90",
        img: {
          author_img: "../../images/post/3.gif",
          post_img: "/images/post/22.JPG",
        }
      },
      {
        date: "DEC 99 2018",
        title: "正是虾肥蟹壮时",
        content: "罗里吧嗦小程序，PHP是世界上最好的语言",
        view_num: "1222",
        collect_num: "90",
        img: {
          author_img: "../../images/post/3.gif",
          post_img: "/images/post/22.JPG",
        }
      }
    ]
  
    this.setData({
      posts_key: post_content
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