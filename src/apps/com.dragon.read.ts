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
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '每日阅读奖励V2',
          key: 3,
          versionCode: {
            minimum: 67532,
            // exclude: 69532, // 可能是灰度测试，不在福利页可用
          },
          anyMatches: [
            '@LynxFlattenUI -1 FlattenUIText[text^="看视频"][text!$="赚钱"]',
            '@ImageView < FrameLayout - FrameLayout >2 TextView[text^="看视频"][text!$="赚钱"]',
            '@LynxFlattenUI - FlattenUIText[text="明日再来"]',
          ],
        },
        {
          name: '每日阅读奖励V1',
          key: 1,
          action: 'back',
          actionCd: 100,
          versionCode: { maximum: 67532 },
          anyMatches: ['[vid = "title"][text="恭喜你获得"]', 'TextView[text="恭喜你获得"]', 'TextView[text^="看视频"]'],
        },
        {
          name: '每日阅读新作奖励',
          key: 2,
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
          matches: '@LynxFlattenUI -43 FlattenUIText[text*="倒计时"][text*="宝箱"]',
        },
      ],
    },
    {
      key: 3,
      name: '分段功能-每日签到',
      desc: '点击签到按钮并返回',
      enable: false,
      actionCdKey: 3,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          name: '点击签到V2',
          key: 3,
          actionCdKey: 1,
          versionCode: {
            minimum: 69532,
            // exclude: 69732, // 这个版本好像还在灰度，又不行了
          },
          matches: '@LynxFlattenUI[text^="立即签到"] +(1,2,3,4) FlattenUIText[text^="立即签到"]',
        },
        {
          name: '点击签到V1',
          key: 1,
          actionCdKey: 1,
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI + FlattenUIText[text^="立即签到"]',
            // 前面支持快查，后面不支持
            '[text^="立即签到"]',
          ],
        },
        {
          name: '不续签',
          key: 2,
          actionCdKey: 1,
          action: 'clickCenter',
          matches: ['FlattenUIText[text="可续签"]', '@LynxFlattenUI[text.length=0] - FlattenUIText[text="重新签到"]'],
          excludeMatches: 'FlattenUIText[text^="立即签到"]',
        },
        {
          name: '签到后返回V2',
          preKeys: [3],
          versionCode: {
            minimum: 69532,
            // exclude: 69732, // 这个版本好像还在灰度，又不行了
          },
          matches: '@LynxFlattenUI[text.length=0] - FlattenUIText[text^="最高"]',
        },
        {
          name: '签到后返回V1',
          preKeys: [1, 2],
          action: 'clickCenter',
          anyMatches: [
            '@LynxFlattenUI[text.length=0] -7 FlattenUIText[text^="看视频"]',
            '@LynxFlattenUI[text.length=0] -1 FlattenUIText[text^="看视频"]',
            '@LynxFlattenUI[text.length=0] -7 FlattenUIText[text^="最高"]',
            '@LynxFlattenUI[text.length=0] -4 FlattenUIText[text="明日再来"]',
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
          actionCd: 3000,
          matches:
            '@LinearLayout[visibleToUser=true] > FrameLayout[childCount=1] + TextView[text~="\\\\d+次"][text.length<7]',
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
      name: '全屏广告-若干广告',
      enable: false,
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          key: 1,
          name: '预约礼包',
          matches: [
            'FlattenUIText[text="恭喜获得预约礼包"]',
            '@LynxFlattenUI - FlattenUIText[text^="预约"][text$="金币"]',
          ],
        },
        {
          key: 2,
          name: '现金红包',
          matches: ['FlattenUIText[text$="现金红包"]', '@LynxFlattenUI -28 FlattenUIText[text$="现金红包"]'],
        },
        {
          key: 3,
          name: '连续打卡',
          fastQuery: true,
          activityIds: '.pages.main.MainFragmentActivity',
          matches: ['FlattenUIText[text~="已有.*人参与"]', '@LynxFlattenUI -5 FlattenUIText[text="立即参与"]'],
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
