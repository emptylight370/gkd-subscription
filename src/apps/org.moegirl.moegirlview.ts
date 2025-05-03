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
      name: '分段功能-签到',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '点击签到按钮',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: 'ImageView[desc="签到"] <<13 [id="android:id/content"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '关闭签到弹窗',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@Button <<7 [id="android:id/content"]',
        },
      ],
    },
  ],
});
