// miniprogram/pages/teacher/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopup: true,
    formData: {
      name: '',
      no: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showPupop: function (e) {
    this.setData({
      showPopup: true
    })
  },
  inputChange: function (e) {
    let { type } = e.currentTarget.dataset;
    let value = e.detail.value;
    let param = 'formData.' + type;
    this.setData({
      [param]: value
    })
  },
  cancel: function (e) {
    this.setData({
      showPopup: false,
      classroom: {
        name: '',
        no: ''
      }
    })
  },
  submit: function (e) {
    // 新增成功之后，跳转至班级二维码页面；
    wx.navigateTo({
      url: '../classroom/classroom',
    })

  },
  gotoList: function (e) {
    let type = e.currentTarget.dataset;
    console.log(type);
  },
  gotoPage: function (e) {
    wx.navigateTo({
      url: '../add/add',
    })
  },
  gotoClassroom: function (e) {
    wx.navigateTo({
      url: '../classroom/classroom',
    })
  },
  gotoMember: function (e) {
    wx.navigateTo({
      url: '../member/member',
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