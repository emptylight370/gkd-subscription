import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '分段功能-每日签到',
      enable: false,
      rules: [
        {
          name: '领取签到奖励',
          key: 1,
          action: 'clickCenter',
          activityIds: '.MainActivity',
          matches: 'TextView[text="领"] <2 ViewGroup',
        },
        {
          name: '关闭签到窗口',
          preKeys: [1],
          action: 'clickCenter',
          activityIds: '.MainActivity',
          matches: 'TextView[text*="*"] <4 ViewGroup - ViewGroup >2 ImageView',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动检票',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'activity',
          action: 'clickCenter',
          activityIds: '.MainActivity',
          matches: 'ImageView[vid="check"]',
        },
      ],
    },
  ],
});
