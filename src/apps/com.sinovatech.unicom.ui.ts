import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '分段功能-微信支付',
      enable: false,
      fastQuery: true,
      activityIds: 'com.unicom.pay.normal.order.ui.WPOrderActivity',
      rules: [
        {
          key: 1,
          name: '展开更多',
          matches: '[text="其他支付方式"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击微信支付',
          matches:
            '@[vid="wopay_other_item_icon_font"] < * - * > [text="微信"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-支付宝支付',
      enable: false,
      fastQuery: true,
      activityIds: 'com.unicom.pay.normal.order.ui.WPOrderActivity',
      rules: [
        {
          key: 1,
          name: '展开更多',
          matches: '[text="其他支付方式"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击支付宝支付',
          matches:
            '@[vid="wopay_other_item_icon_font"] < * - * > [text="支付宝"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-若干广告',
      enable: false,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches: '@TextView <3 View <<3 View[id="app"]',
        },
      ],
    },
  ],
});
