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
          action: 'clickCenter',
          activityIds: '.MainActivity',
          matches: 'View[desc="关闭"] - View >2 ImageView > Button',
        },
      ],
    },
  ],
});
