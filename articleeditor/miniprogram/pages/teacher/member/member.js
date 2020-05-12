// miniprogram/pages/teacher/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentStudent: {

    },
    studentName: '',
    newName: '',
    showPopup: false,
    memberList: [
      {
        name: '袭人',
        id: 1,
        joinTime: '2020-03-01 12:50:12'
      },
      {
        name: '宝娟',
        id: 2,
        joinTime: '2020-03-01 12:50:12'
      },
      {
        name: '金橘',
        id: 3,
        joinTime: '2020-03-01 12:50:12'
      }

    ]
  },
  showEdit: function (e) {
    let member = this.data.memberList.filter(item => {
      return item.id === e.currentTarget.dataset.id
    })
    console.log(member);
    this.setData({
      showPopup: true,
      currentStudent: member[0]
    })
  },
  deleteMember: function (e) {
    let member = this.data.memberList.filter(item => {
      return item.id === e.currentTarget.dataset.id
    })
    let _this = this;
    wx.lin.showDialog({
      type: "alert",
      title: member[0].name,
      content: "确定删除该学生嘛？",
      success: (res) => {
        if (res.confirm) {
          // 删除该学生
          let filterList = _this.data.memberList.filter(item => {
            return item.id != e.currentTarget.dataset.id
          })
          _this.setData({
            memberList: filterList
          })
        } else if (res.cancel) {

        }
      }
    })
  },
  nameInput: function (e) {
    this.setData({
      newName: e.detail.value
    })
  },
  getName: function (e) {
    let name = this.data.newName ? this.data.newName : this.data.currentStudent.name;
    let { memberList, currentStudent } = this.data;
    memberList.map(item => {
      item.id == currentStudent.id ? item.name = name : null;
    })
    // 更新update；
    this.setData({
      memberList,
      showPopup: false
    })
  },
  submit(event) {
    const { detail } = event;
    console.log(detail);
    /*
      detail 返回三个参数
      1、values: 各表单项的value值
      2、errors: 各表单项验证后的返回的错误信息数组
      3、isValidate: 表单是否验证通过的boolean值
      具体格式示例：
      detail = {
         values: {
             studentName: "",
             studentAge: "",
             studentAddress: ""
         },
         errors: {
             studentName: [],
             studentAge: [],
             studentAddress: []
         },
         isValidate: true
      }
    */
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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