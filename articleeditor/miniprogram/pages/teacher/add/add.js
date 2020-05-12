// pages/teacher/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    className: '初三五班',
    formData: {
      taskTitle: "",
      classId: 2,
      taskContent: ''
    },
    classList: [
      {
        name: '初三五班',
        id: 1
      },
      {
        name: '初三六班',
        id: 2
      },
      {
        name: '初三七班',
        id: 3
      },
      {
        name: '初三八班',
        id: 4
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getTitleValue: function (e) {
    this.setData({
      "formData.taskTitle": e.detail.value
    })
  },
  getContentValue: function (e) {
    this.setData({
      "formData.taskContent": e.detail.value
    })
  },
  lintapChoose: function (e) {
    let classList = this.data.classList;
    let className = this.data.classList.map(item => {
      return item.name
    })

    let _this = this;
    wx.showActionSheet({
      itemList: className,
      success(res) {
        _this.setData({
          'formData.class': classList[res.tapIndex].id,
          className: className[res.tapIndex]
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  submitForm: function (e) {
    console.log();
    let formData = this.data.formData;
    if (!formData.taskTitle) {
      wx.lin.showMessage({
        content: '请输入作文主题'
      })
      return false;
    }
    if (!formData.taskContent) {
      wx.lin.showMessage({
        content: '请输入作文描述'
      })
      return false;
    }
    //  提交数据，然后关闭这些进入index
    wx.reLaunch({
      url: '../index/index'
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