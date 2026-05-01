import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 3,
      name: '全屏广告-不使用中移支付',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.wxapi.WXPayEntryActivity',
          matches: ['[vid="pointKeep_dialog_title"][text="中移支付"]', '[vid="discard_button"][text="放弃优惠"]'],
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
