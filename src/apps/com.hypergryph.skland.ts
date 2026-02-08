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
      matchRoot: true,
      rules: [
        {
          name: '领取签到奖励',
          key: 1,
          fastQuery: true,
          matches: '@ViewGroup > TextView[text="领"]',
        },
        {
          name: '关闭签到窗口',
          key: 2,
          preKeys: [1],
          matches: '@ImageView < ViewGroup < ViewGroup + ViewGroup > TextView[text~=".+\\\\*\\\\d+"]',
        },
        {
          name: '登录账号',
          key: 3,
          fastQuery: true,
          actionDelay: 1000,
          matches: 'TextView[text="网络开小差，请点击重试"]',
          excludeMatches: 'TextView[text="领"]',
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
    {
      key: 3,
      name: '青少年模式-青少年模式弹窗',
      enable: false,
      matchTime: 5000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[vid="confirmTv"][text="我知道了"] -2 TextView[text*="未成年人模式"]',
        },
      ],
    },
  ],
});
