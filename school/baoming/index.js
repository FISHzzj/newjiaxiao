/*
 * @Author: your name
 * @Date: 2021-09-02 22:03:21
 * @LastEditTime: 2021-09-02 22:13:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \windy_wxapp\school\detail\index.js
 */
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    that.setData({
        id: options.id
    })
    that.getData()
  },
  getData: function(){
    // console.log(2222)
    var e = this;
    // if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
 
    t.post("school/info", {
        id: e.data.id
    }, function(o) {
        console.log(o)
        if(o.error == -1){
          t.toast(o.message)
        }else{
            e.setData({
                logo: o.logo,
                merchname: o.merchname,
                guide_img: o.guide_img,
                west_info: o.west_info,
                east_info: o.east_info
            })
        }
         

    });
  },
  gopay(){
    wx.navigateTo({
      url: '/school/pay/index?id='+ this.data.id,
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