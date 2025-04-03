import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '关闭领取金币窗口',
      desc: '领取金币后返回',
      enable: true,
      rules: [
        {
          actionMaximum: 1,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          anyMatches: [
            '[id = "com.dragon.read:id/title"][text="恭喜你获得"]',
            'TextView[text="恭喜你获得"]',
            '[id="com.dragon.read:id/hp3"][text^="看视频"]',
            'TextView[text^="看视频"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '关闭宝箱窗口',
      desc: '领取宝箱后返回',
      enable: true,
      rules: [
        {
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
      name: '每日签到',
      desc: '点击签到按钮',
      enable: true,
      rules: [
        {
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
      ],
    },
    {
      key: 4,
      name: '关闭签到窗口',
      desc: '签到完成后返回',

      enable: true,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [3],
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
      key: 5,
      name: '签到观看视频',
      desc: '签到完成后观看视频',
      enable: false,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [3],
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
