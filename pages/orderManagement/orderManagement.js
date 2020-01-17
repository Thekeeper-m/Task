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
    orderAmount: 1590,
    remindNum: 5,
    order:[
      {
        orderNum: 201907014213,
        orderTime: "2019-05-20 09:38:08",
        companyName: "十一路分公司",
        remark: "首先新建popupwindow目录，然后右键，新建Component，结构如下图所示：",
        orderDetail:[
          {
            smallPicture: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3450925599,3126545716&fm=26&gp=0.jpg',
            productName:'百达翡丽',
            productModel: 'Y0107',
            productNum: 110,
            planNum:20,
            sendProduct: 20,
            status: '生产中',
            isUrge: '催单'
          },
          {
            smallPicture: 'https://himg.china.cn/0/4_72_230694_486_427.jpg',
            productName:'江诗丹顿',
            productModel: 'W0811',
            productNum: 10,
            planNum:320,
            sendProduct: 240,
            status: '待排产',
            isUrge: '已催单'
          }
        ]
      },
      {
        orderNum: 201907014214,
        orderTime: "2019-05-20 10:38:08",
        companyName: "大妈路分公司",
        remark: "首先新建popupwindow目录",
        orderDetail:{}
      }
    ],

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