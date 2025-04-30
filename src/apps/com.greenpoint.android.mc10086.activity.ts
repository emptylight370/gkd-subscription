import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '分段功能-微信支付',
      enable: false,
      rules: [
        {
          key: 1,
          name: '展开更多',
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches: '[vid="more_arraw"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击微信支付',
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches:
            '@[vid="paytype_check"][checked=false] < * - * >2 [text="微信支付"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-支付宝支付',
      enable: false,
      rules: [
        {
          key: 1,
          name: '展开更多',
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches: '[vid="more_arraw"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击支付宝支付',
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches:
            '@[vid="paytype_check"][checked=false] < * - * >2 [text="支付宝支付"]',
        },
      ],
    },
  ],
});
