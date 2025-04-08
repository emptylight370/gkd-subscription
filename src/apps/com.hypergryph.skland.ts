import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '分段功能-每日签到',
      enable: true,
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
  ],
});
