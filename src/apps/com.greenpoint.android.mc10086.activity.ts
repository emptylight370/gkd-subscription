import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '分段功能-微信支付',
      enable: false,
      fastQuery: true,
      activityIds: '.wxapi.WXPayEntryActivity',
      rules: [
        {
          key: 1,
          name: '展开更多',
          matches: '[vid="more_arraw"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击微信支付',
          matches:
            '@[vid="paytype_check"][checked=false] < * - * >2 [text="微信支付"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-支付宝支付',
      enable: false,
      fastQuery: true,
      activityIds: '.wxapi.WXPayEntryActivity',
      rules: [
        {
          key: 1,
          name: '展开更多',
          matches: '[vid="more_arraw"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击支付宝支付',
          matches:
            '@[vid="paytype_check"][checked=false] < * - * >2 [text="支付宝支付"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-不使用中移支付',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches: [
            '[vid="pointKeep_dialog_title"][text="中移支付"]',
            '[vid="discard_button"][text="放弃优惠"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-首页全屏广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: ['[text="广告"]', '[vid="iv_close_top"]'],
        },
      ],
    },
  ],
});
