var t = getApp(), s = t.requirejs("core");

Page({
    data: {},
    onLoad: function(s) {
        this.setData({
            options: s
        }), t.url(s), this.get_list();
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    get_list: function() {
        var t = this;
        s.get("groups/order/express", t.data.options, function(e) {
            0 == e.error ? (e.show = !0, t.setData(e)) : s.toast(e.message, "loading");
        });
    }
});