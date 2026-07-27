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
  ],
});
