import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 1,
      name: '功能类-确认退出',
      desc: '确认退出QQ阅读？',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainFlutterActivity',
          matches: '[vid="sureButton"][text="退出"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-每日签到',
      desc: '领取签到奖励',
      enable: false,
      rules: [
        {
          key: 2,
          name: '签到成功',
          activityIds: '.activity.WebBrowserForFullScreenContents',
          anyMatches: [
            'TextView[text="签到成功"] +6 TextView[text="我知道了"]',
            '@TextView - TextView[text="去抽奖"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-主页右下角小广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainFlutterActivity',
          matches: '[vid="operating_activity_close_view"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-领取奖励',
      enable: false,
      rules: [
        {
          activityIds: '.activity.WebBrowserForFullScreenContents',
          anyMatches: ['@TextView -6 [text="恭喜获得"]'],
        },
      ],
    },
  ],
});
