var a = getApp();

Page({
    data: {
        paperplane: !1
    },
    onLoad: function(t) {
        this.setData({
            imgUrl: a.globalData.approot
        });
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    transmit: function() {
        this.setData({
            paperplane: !0
        });
    },
    hidepaperplane: function() {
        this.setData({
            paperplane: !1
        });
    }
});