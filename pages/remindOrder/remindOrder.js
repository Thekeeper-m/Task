/*
 * @Author: seven.Yi
 * @Date: 2020-01-18 13:05:06
 * @description: 
 * @Version: 1.0
 * @LastEditTime : 2020-01-18 18:01:22
 * @LastEditors  : Please set LastEditors
 */
// pages/remindOrder/remindOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOrder: true,
    remindOrder: [
      {
        orderId:11915721,
        productName: 'XXX音乐盒',
        remindTime: '2020-10-10 09:11'
      },
      {
        orderId:1191321,
        productName: 'XXX发条',
        remindTime: '2020-10-12 09:11'
      },
      {
        orderId:11915721,
        productName: 'XXX零件',
        remindTime: '2020-10-10 12:31'
      }
    ]
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