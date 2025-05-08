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
      desc: '书架页面触发，重进应用刷新激活次数',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true,
      rules: [
        {
          key: 1,
          name: '点击书架签到',
          activityIds: '.activity.MainFlutterActivity',
          matches: 'View[desc*="签到"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '签到成功',
          activityIds: '.activity.WebBrowserForFullScreenContents',
          matches: 'TextView[text="签到成功"] +6 TextView[text="我知道了"]',
        },
        {
          key: 3,
          preKeys: [2],
          name: '退出签到页面',
          fastQuery: true,
          activityIds: '.activity.WebBrowserForFullScreenContents',
          matches: '[vid="profile_header_left_back"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-书架广告',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainFlutterActivity',
          matches: 'ImageView[vid="close_btn"]',
        },
      ],
    },
  ],
});
