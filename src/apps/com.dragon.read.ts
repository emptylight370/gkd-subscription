import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '功能弹窗-关闭领取金币窗口',
      desc: '领取金币后返回',
      enable: true,
      rules: [
        {
          // 每日阅读奖励
          actionMaximum: 10,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            '[vid = "title"][text="恭喜你获得"]',
            'TextView[text="恭喜你获得"]',
            '[vid="hp3"][text^="看视频"]',
            'TextView[text^="看视频"]',
          ],
        },
        {
          // 每日阅读新作奖励
          actionMaximum: 10,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: ['[vid = "hp3"][text="开心收下"]', '[vid="d_j"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-关闭宝箱窗口',
      desc: '领取宝箱后返回',
      enable: true,
      rules: [
        {
          // text能快查，ui不行
          actionMaximum: 1,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text*="宝箱"][text*="奖励"]',
            'LynxFlattenUI[text*="宝箱"][text*="奖励"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-每日签到1',
      desc: '点击签到按钮并返回',
      enable: true,
      rules: [
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="立即签到"]',
            'LynxFlattenUI[text^="立即签到"]',
          ],
        },
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [1],
          action: 'back',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="看视频"]',
            'LynxFlattenUI[text^="看视频"]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-每日签到2',
      desc: '点击签到按钮并观看广告',
      enable: false,
      rules: [
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="立即签到"]',
            'LynxFlattenUI[text^="立即签到"]',
          ],
        },
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [1],
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="看视频"]',
            'LynxFlattenUI[text^="看视频"]',
          ],
        },
      ],
    },
  ],
});
