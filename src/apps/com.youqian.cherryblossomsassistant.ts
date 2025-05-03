import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youqian.cherryblossomsassistant',
  name: '樱花日语',
  groups: [
    {
      key: 1,
      name: '分段功能-签到',
      desc: '居然有签到功能',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '点击签到按钮',
          key: 1,
          fastQuery: true,
          activityIds: '.ui.activity.BottomNavigationActivity',
          anyMatches: ['ImageView[vid="check_in"]', 'TextView[text*="签到"]'],
        },
        {
          name: '签到',
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: '.ui.activity.SignInActivity',
          matches: '[vid="tv_title"][text="立即签到"]',
        },
        {
          name: '退出签到页面',
          key: 3,
          preKeys: [2],
          matchDelay: 300,
          fastQuery: true,
          action: 'back',
          activityIds: '.ui.activity.SignInActivity',
          matches: '[vid="tv_title"][text="立即签到"]',
        },
      ],
    },
  ],
});
