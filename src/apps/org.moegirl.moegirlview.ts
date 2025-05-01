import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.moegirl.moegirlview',
  name: '萌娘百科',
  groups: [
    {
      key: 1,
      name: '局部广告-首页广告',
      enable: false,
      rules: [
        {
          matchTime: 10000,
          activityIds: '.MainActivity',
          matches: 'View[desc="关闭"] - View >2 ImageView > Button',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到',
      enable: false,
      rules: [
        {
          activityIds: '.MainActivity',
          matches: 'ImageView[desc="签到"]',
        },
      ],
    },
  ],
});
