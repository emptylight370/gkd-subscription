import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.offcn.mini.teacher',
  name: '中公教师',
  groups: [
    {
      key: 1,
      name: '局部广告-首页广告',
      desc: '看起来承担了开屏广告的作用',
      enable: false,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.offcn.mini.view.main.MainActivity',
          matches: '[vid="closeIV"]',
        },
      ],
    },
  ],
});
