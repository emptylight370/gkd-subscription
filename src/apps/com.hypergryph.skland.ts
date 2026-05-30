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
          name: '领取签到奖励V1',
          key: 1,
          fastQuery: true,
          versionCode: { maximum: 105700007 },
          matches: '@ViewGroup > TextView[text="领"]',
        },
        {
          name: '关闭签到窗口V1',
          key: 2,
          preKeys: [1],
          actionCd: 200,
          versionCode: { maximum: 105700007 },
          matches: '@ImageView < ViewGroup < ViewGroup + ViewGroup > TextView[text~=".+\\\\*\\\\d+"]',
        },
        {
          name: '领取签到奖励V2',
          key: 4,
          versionCode: { minimum: 105700008 },
          matches: 'TextView[text~="第\\\\d+天"] <2 View',
          snapshotUrls: ['https://i.gkd.li/i/28415151'],
        },
        {
          name: '关闭签到窗口V2',
          key: 5,
          preKeys: [4],
          actionCd: 200,
          versionCode: { minimum: 105700008 },
          matches: '[id="close-button"]',
          snapshotUrls: ['https://i.gkd.li/i/28415154'],
        },
        {
          name: '登录账号',
          key: 3,
          fastQuery: true,
          actionDelay: 1000,
          versionCode: { maximum: 105700007 },
          matches: 'TextView[text="网络开小差，请点击重试"]',
          excludeMatches: 'TextView[text="领"]',
        },
        {
          name: '开启签到提醒',
          key: 6,
          versionCode: { minimum: 105700008 },
          matches: ['[text="开启签到提醒"]', '[text="暂不开启"]'],
          snapshotUrls: ['https://i.gkd.li/i/28415158'],
        },
      ],
    },
    // {
    //   key: 2,
    //   name: '功能类-自动检票',
    //   desc: '因为没办法区分检票前后状态，会一直点击按钮，每次切换app刷新一次次数',
    //   enable: false,
    //   actionMaximum: 1,
    //   resetMatch: 'app',
    //   rules: [
    //     {
    //       fastQuery: true,
    //       activityIds: '.MainActivity',
    //       matches: 'ImageView[vid="check"]',
    //     },
    //   ],
    // },
    {
      key: 3,
      name: '青少年模式',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true,
      forcedTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text*="未成年人模式"] +2 [text="我知道了"]',
        },
      ],
    },
    {
      key: 4,
      name: '分段功能-清理提示消息红点',
      enable: false,
      rules: [
        {
          key: 1,
          name: '点击红点',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[vid="messageItemArea"] > [vid="messageReddot"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '返回消息列表',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@ImageView < View < View < View < ComposeView < [vid="nav_host_fragment"]',
        },
      ],
    },
  ],
});
