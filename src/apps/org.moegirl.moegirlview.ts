import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.moegirl.moegirlview',
  name: '萌娘百科',
  groups: [
    {
      key: 1,
      name: '开屏广告-首页广告',
      enable: true,
      matchTime: 10000,
      forcedTime: 10000,
      priorityTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          versionCode: { maximum: 4290 },
          activityIds: '.MainActivity',
          matches: 'View[desc="关闭"] - View >2 ImageView > Button',
          snapshotUrls: ['https://i.gkd.li/i/25989689'],
        },
        {
          fastQuery: true,
          versionCode: { maximum: 4290 },
          activityIds: '.MainActivity',
          matches: '@Button < ImageView < View < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/i/25989689'],
        },
        {
          fastQuery: true,
          versionCode: { minimum: 4291 },
          activityIds: '.MainActivity',
          matches: '@View <2 View < View < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/i/25989784'],
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-签到',
      enable: false,
      activityIds: '.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '点击签到按钮',
          matches: 'ImageView[desc="签到"][visibleToUser=true]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '关闭签到弹窗',
          matches: 'Button[desc="知道啦"][visibleToUser=true]',
        },
      ],
    },
  ],
});
