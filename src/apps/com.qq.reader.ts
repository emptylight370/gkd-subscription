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
          resetMatch: 'app',
          action: 'clickCenter',
          activityIds: '.activity.MainFlutterActivity',
          matches: '[vid="sureButton"][text="退出"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-每日签到',
      desc: '书架页面触发，重进应用刷新激活次数',
      enable: true,
      rules: [
        {
          key: 1,
          name: '点击书架签到',
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'clickCenter',
          activityIds: '.activity.MainFlutterActivity',
          matches: 'View[desc*="签到"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '签到成功',
          action: 'clickCenter',
          activityIds: '.activity.WebBrowserForFullScreenContents',
          matches: 'TextView[text="签到成功"] +6 TextView[text="我知道了"]',
        },
        {
          key: 3,
          preKeys: [2],
          name: '退出签到页面',
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.activity.WebBrowserForFullScreenContents',
          matches: '[vid="profile_header_left_back"]',
        },
      ],
    },
  ],
});
