if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') != -1) {
    if ($response.status !== 200) {
        $notification.post("Emby Premiere 已激活", "", "");
        $done({
            status: 200,
            headers: $response.headers,
            body: JSON.stringify({
                cacheExpirationDays: 999,
                resultCode: "GOOD",
                message: "Device Valid",
                deviceStatus: 0,
                planType: "超级会员",
                subscriptions: [
                    {
                        autoRenew: true,
                        store: "秋城落叶",
                        feature: "all",
                        planType: "超级会员",
                        expDate: "直到2099年12月31日以后"
                    }
                ]
            })
        });
    } else {
        $done({});
    }
} else if ($request.url.indexOf('/emby/Plugins/SecurityInfo') != -1) {
    $notification.post("Emby Premiere 安全信息匹配", "", "");
    $done({
        status: 200,
        headers: $response.headers,
        body: JSON.stringify({
            SupporterKey: "ok",
            IsMBSupporter: true
        })
    });
} else {
    $done({});
}
