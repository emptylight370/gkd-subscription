import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 3,
      name: '全屏广告-若干广告',
      enable: false,
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches: '@TextView[text.length=0] <3 View <<3 View[id="app"]',
        },
        {
          matchTime: 10000,
          forcedTime: 10000,
          resetMatch: 'app',
          actionMaximum: 2,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '@Image[width<150] -(1,2) TextView[text="广告"]',
        },
        {
          fastQuery: true,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[vid="home_drag_view_close"]',
        },
      ],
    },
  ],
});
