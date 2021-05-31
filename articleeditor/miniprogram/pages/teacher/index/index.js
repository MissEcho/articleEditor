// miniprogram/pages/teacher/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherName: '',
    showPopup: false,
    classes: [],
    tasks: [],
    formData: {
      name: '',
      classNo: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { userName, classes, tasks } = app.globalData.userData;
    this.getClassroom();
    // console.log(classes, tasks);
    // 获取该老师下面的班级
    // 获取该老师下面的作业
    this.setData({
      teacherName: userName,
      classes,
      tasks
    })
  },
  getClassroom:function(e){
    wx.cloud.callFunction({
      name: 'getClass',
      data: {},
      complete: (res) => {
        console.log(res);
      }
    })
  },
  showPupop: function (e) {
    this.setData({
      showPopup: true,
      classroom: {
        name: '',
        classNo: ''
      }
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
      showPopup: false
    })
  },
  submit: function (e) {
    // 新增成功之后，跳转至班级二维码页面；
    console.log(this.data.formData);
    let { formData } = this.data;
    if (!formData.name) {
      wx.lin.showMessage({
        content: '请输入班级名称'
      })
      return false;
    }
    if (!formData.classNo) {
      wx.lin.showMessage({
        content: '请输入班级号码'
      })
      return false;
    }
    wx.cloud.callFunction({
      name: 'insertClass',
      data: formData,
      complete: (res) => {
        console.log(res);
      }
    })
    this.setData({
      showPopup: false
    })
  },
  gotoList: function (e) {
    let type = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../list/list',
    })
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