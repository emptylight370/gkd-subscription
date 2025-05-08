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
      actionCd: 100,
      rules: [
        {
          name: '每日阅读奖励',
          fastQuery: true,
          action: 'back',
          actionCdKey: 1,
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            '[vid = "title"][text="恭喜你获得"]',
            'TextView[text="恭喜你获得"]',
            'TextView[text^="看视频"]',
          ],
        },
        {
          name: '每日阅读新作奖励',
          fastQuery: true,
          actionCdKey: 1,
          activityIds: '.pages.main.MainFragmentActivity',
          matches: 'TextView[text="开心收下"]',
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
          name: '可领取',
          fastQuery: true,
          action: 'back',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            'FlattenUIText[text*="宝箱"][text*="奖励"]',
            // 前面支持快查，后面不支持
            'LynxFlattenUI[text*="宝箱"][text*="奖励"]',
            '[text*="宝箱"][text*="奖励"]',
          ],
        },
        {
          name: '不可领取',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            '@LynxFlattenUI -43 FlattenUIText[text*="倒计时"][text*="宝箱"]',
            // 前面支持快查，后面不支持
            '@LynxFlattenUI -43 LynxFlattenUI[text*="倒计时"][text*="宝箱"]',
            '@LynxFlattenUI -43 [text*="倒计时"][text*="宝箱"]',
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
      actionMaximum: 1,
      rules: [
        {
          name: '点击签到',
          key: 1,
          fastQuery: true,
          activityIds: '.pages.main.MainFragmentActivity',
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="立即签到"]',
            // 前面支持快查，后面不支持
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后返回',
          fastQuery: true,
          preKeys: [1],
          activityIds: '.pages.main.MainFragmentActivity',
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI -7 FlattenUIText[text^="看视频"]',
            // 前面支持快查，后面不支持
            '@LynxFlattenUI -7 [text^="看视频"]',
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
      actionMaximum: 1,
      rules: [
        {
          name: '点击签到',
          key: 1,
          fastQuery: true,
          activityIds: '.pages.main.MainFragmentActivity',
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="立即签到"]',
            // 前面支持快查，后面不支持
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后观看广告',
          fastQuery: true,
          preKeys: [1],
          activityIds: '.pages.main.MainFragmentActivity',
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="看视频"]',
            // 前面支持快查，后面不支持
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
          activityIds: '.pages.main.MainFragmentActivity',
          fastQuery: true,
          actionCdKey: 2,
          anyMatches: [
            '@LynxFlattenUI -2 FlattenUIText[text="前往抽奖"]',
            // 前面支持快查，后面不支持
            '@LynxFlattenUI -2 LynxFlattenUI[text="前往抽奖"]',
            '@LynxFlattenUI -2 [text="前往抽奖"]',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-催更',
      enable: false,
      actionMaximum: 2,
      rules: [
        {
          activityIds: '.reader.ui.ReaderActivity',
          matches:
            '@LinearLayout > FrameLayout[childCount=1] + TextView[text~="\\\\d+次"][text.length<7]',
        },
      ],
    },
  ],
});
