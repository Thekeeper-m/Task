// pages/selectTime/selectTime.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '2020-01-13',
    endDate: '2020-01-01',
    nowDate: ''
  },

  /**
   * 时间选择功能 
   */

  bindStartDateChange: function(e) {
    console.log('picker发送选择改变,携带值为',e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },

  bindEndDateChange: function(e) {
    console.log('picker发送选择改变,携带值为',e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },

  /**
   * 清空时间选择 
   */
  deleteStartTime: function(e) {
    var date = util.formatDate(new Date());
    this.setData({
      startDate: date
    })
  },

  deleteEndTime: function(e) {
    var date = util.formatDate(new Date());
    this.setData({
      endDate: date
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatDate(new Date());
    this.setData({
      nowDate: time
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