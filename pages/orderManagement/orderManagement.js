/*
 * @Author: seven.Yi
 * @Date: 2020-01-15 19:48:31
 * @description: 
 * @Version: 1.0
 * @LastEditTime : 2020-01-15 22:12:12
 * @LastEditors  : Please set LastEditors
 */
// pages/orderManagement/orderManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['全部', '生产中', '采购中', '待排产', '已完成'],
    index: 0,
    showStartDate: '7月1日',
    showEndDate: '9月30日',
    orderNum: 1590,
    remindNum: 5,
  },

  // 点击判断选择生产状态
  bindPickerChange: function(e) {
    console.log('picker发送选择改变, 携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
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