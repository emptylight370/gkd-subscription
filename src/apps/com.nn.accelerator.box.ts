import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nn.accelerator.box',
  name: '雷神加速器',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买时长',
      enable: false,
      matchTime: 3000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
