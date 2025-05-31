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
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '每日阅读奖励',
          action: 'back',
          anyMatches: [
            '[vid = "title"][text="恭喜你获得"]',
            'TextView[text="恭喜你获得"]',
            'TextView[text^="看视频"]',
          ],
        },
        {
          name: '每日阅读新作奖励',
          matches: 'TextView[text="开心收下"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-关闭宝箱窗口',
      desc: '领取宝箱后返回',
      enable: false,
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '可领取',
          action: 'back',
          matches: 'FlattenUIText[text*="宝箱"][text*="奖励"]',
        },
        {
          name: '不可领取',
          matches:
            '@LynxFlattenUI -43 FlattenUIText[text*="倒计时"][text*="宝箱"]',
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
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '点击签到',
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="立即签到"]',
            // 前面支持快查，后面不支持
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后返回',
          preKeys: [1],
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI -7 FlattenUIText[text^="看视频"]',
            '@LynxFlattenUI -7 FlattenUIText[text^="最高"]',
            '@LynxFlattenUI -4 FlattenUIText[text="明日再来"]',
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
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '点击签到',
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="立即签到"]',
            // 前面支持快查，后面不支持
            '[text^="立即签到"]',
          ],
        },
        {
          name: '签到后观看广告',
          preKeys: [1],
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
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          action: 'back',
          actionCdKey: 2,
          matches: '[text="前往抽奖"]',
        },
        {
          matchDelay: 200,
          actionCdKey: 2,
          matches: '@LynxFlattenUI -2 FlattenUIText[text="前往抽奖"]',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-阅读页功能',
      desc: '催更、评分',
      enable: false,
      activityIds: '.reader.ui.ReaderActivity',
      rules: [
        {
          name: '催更',
          actionMaximum: 2,
          matches:
            '@LinearLayout > FrameLayout[childCount=1] + TextView[text~="\\\\d+次"][text.length<7]',
        },
        {
          name: '评分',
          fastQuery: true,
          matches: ['TextView[text="点评此书"]', 'TextView[text="取消"]'],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-关闭预约礼包',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.pages.main.MainFragmentActivity',
          matches: [
            'FlattenUIText[text="恭喜获得预约礼包"]',
            '@LynxFlattenUI - FlattenUIText[text^="预约"][text$="金币"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-提现页面相关',
      desc: '银行卡0.5，余额暴涨',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.bullet.widget.BulletContainerActivity',
          anyMatches: [
            'FlattenUIText[text="坚持退出"]',
            '@LynxFlattenUI -9 FlattenUIText[text="恭喜获得现金奖励"]',
            '@LynxFlattenUI - [text="银行卡提现立即到账"]',
          ],
        },
      ],
    },
  ],
});
