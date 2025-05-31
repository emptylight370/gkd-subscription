import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '分段功能-每日签到',
      enable: false,
      activityIds: '.MainActivity',
      rules: [
        {
          name: '领取签到奖励',
          key: 1,
          fastQuery: true,
          matches: '@ViewGroup > TextView[text="领"]',
        },
        {
          name: '关闭签到窗口',
          preKeys: [1],
          matches:
            '@ImageView < ViewGroup < ViewGroup + ViewGroup > TextView[text~="[^\\\\d]+[\\\\d]?\\\\*\\\\d+"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动检票',
      desc: '因为没办法区分检票前后状态，会一直点击按钮，每次切换app刷新一次次数',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: 'ImageView[vid="check"]',
        },
      ],
    },
  ],
});
