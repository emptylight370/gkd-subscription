import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '功能弹窗-关闭领取金币窗口',
      desc: '领取金币后返回',
      enable: false,
      rules: [
        {
          name: '每日阅读奖励',
          actionMaximum: 10,
          fastQuery: true,
          action: 'back',
          actionCdKey: 1,
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            '[vid = "title"][text="恭喜你获得"]',
            'TextView[text="恭喜你获得"]',
            '[vid="hp3"][text^="看视频"]',
            'TextView[text^="看视频"]',
          ],
        },
        {
          name: '每日阅读新作奖励',
          actionMaximum: 10,
          fastQuery: true,
          actionCdKey: 1,
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
      enable: false,
      rules: [
        {
          // text能快查，ui不行
          name: '可领取',
          actionMaximum: 1,
          fastQuery: true,
          action: 'back',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text*="宝箱"][text*="奖励"]',
            'LynxFlattenUI[text*="宝箱"][text*="奖励"]',
            '[text*="宝箱"][text*="奖励"]',
          ],
        },
        {
          name: '不可领取',
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text*="倒计时"][text*="宝箱"] +43 LynxFlattenUI',
            'LynxFlattenUI[text*="倒计时"][text*="宝箱"] +43 LynxFlattenUI',
            '[text*="倒计时"][text*="宝箱"] +43 LynxFlattenUI',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段功能-每日签到1',
      desc: '点击签到按钮并返回',
      enable: false,
      actionCdKey: 3,
      rules: [
        {
          name: '点击签到',
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="立即签到"]',
            'LynxFlattenUI[text^="立即签到"]',
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后返回',
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [1],
          action: 'back',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="看视频"]',
            'LynxFlattenUI[text^="看视频"]',
            '[text^="看视频"]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '分段功能-每日签到2',
      desc: '点击签到按钮并观看广告',
      enable: false,
      actionCdKey: 3,
      rules: [
        {
          name: '点击签到',
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="立即签到"]',
            'LynxFlattenUI[text^="立即签到"]',
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后观看广告',
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [1],
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text^="看视频"]',
            'LynxFlattenUI[text^="看视频"]',
            '[text^="看视频"]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-广告抽奖弹窗',
      enable: false,
      rules: [
        {
          action: 'back',
          activityIds: '.pages.main.MainFragmentActivity',
          fastQuery: true,
          actionCdKey: 2,
          matches: '[text="前往抽奖"]',
        },
        {
          matchDelay: 100,
          action: 'clickCenter',
          activityIds: '.pages.main.MainFragmentActivity',
          actionCdKey: 2,
          anyMatches: [
            'FlattenUIText[text="前往抽奖"] +2 LynxFlattenUI',
            'LynxFlattenUI[text="前往抽奖"] +2 LynxFlattenUI',
            '[text="前往抽奖"] +2 LynxFlattenUI',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-催更',
      desc: '选择器有点奇怪',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          action: 'clickCenter',
          activityIds: '.reader.ui.ReaderActivity',
          actionCd: 10000,
          anyMatches: [
            // e9d这个版本是6.6.8.16（66816）获取的
            '@LinearLayout[vid="e9d"] > FrameLayout[childCount=1]',
            'TextView[text$="次"][text.length<7] <2 @LinearLayout > FrameLayout[childCount=1]',
          ],
        },
      ],
    },
  ],
});
