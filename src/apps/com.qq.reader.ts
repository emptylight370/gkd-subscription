import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 1,
      name: '功能类-确认退出',
      desc: '确认退出QQ阅读？',
      enable: true,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          action: 'clickCenter',
          activityIds: '.activity.MainFlutterActivity',
          matches: '[vid="sureButton"][text="退出"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-每日签到',
      desc: '未经过测试，书架页面触发',
      enable: false,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.MainFlutterActivity',
          matches: 'View[desc*="签到"]',
        },
      ],
    },
  ],
});
