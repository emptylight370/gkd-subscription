import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.phonemanager',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '局部广告-关闭广告横幅',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.phonemanager.clear.ClearMainActivity',
          matches: '[vid="ad_close"]',
        },
      ],
    },
  ],
});
