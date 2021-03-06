var t = getApp().requirejs("core");
Page({
  data: {
    show: !1,
    loaded: !1,
    page: 1,
    list: [],
    total: 0,
    empty: !1
  },
  onLoad: function () {
    this.getList(!1);
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onReachBottom: function () {
    this.data.loaded || this.data.list.length == this.data.total || this.getList(!1)
  },
  onPullDownRefresh: function () {
    this.getList(!0)
  },
  getList: function (a) {
    var e = this;
    a && (e.data.page = 1, e.data.list = []);
    var s = getApp().getCache("userinfo_id");
    console.log(s, "params"), console.log(24, "roomId"), this.setData({
      roomId: 24,
      customParams: encodeURIComponent(JSON.stringify(s))
    }), t.get("live/room/get_list", {
      page: e.data.page
    }, function (t) {
      var s = {
        total: t.total,
        pagesize: t.pagesize,
        show: !0
      };
      t.list.length > 0 ? (s.page = e.data.page + 1, s.list = e.data.list.concat(t.list), t.list.length < t.pagesize ? s.loaded = !0 : s.loaded = !1, s.empty = !1) : (s.empty = !0, s.list = []), e.setData(s), wx.setNavigationBarTitle({
        title: t.sysset.shopname || "商城直播"
      }), a && wx.stopPullDownRefresh()
    }, this.data.show)
  }
});
