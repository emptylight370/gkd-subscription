import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.gamereva',
  name: '腾讯先锋',
  groups: [
    {
      key: 1,
      name: '功能类-签到',
      enable: false,
      rules: [
        {
          activityIds: 'com.tencent.gamermm.web.GamerWebPageActivity',
          matches: '[text="立即签到"]',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页广告',
      desc: '类似于开屏广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.UfoHomeActivity',
          matches: '[vid="id_btn_cancel"]',
        },
      ],
    },
  ],
});
