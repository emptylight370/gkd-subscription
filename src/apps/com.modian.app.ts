import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.modian.app',
  name: '摩点',
  groups: [
    {
      key: 1,
      name: '分段功能-签到',
      desc: '签到完之后不会改变文字，会持续匹配。每切换app刷新一次次数',
      enable: false,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          name: '签到',
          activityIds: '.ui.activity.MainActivity',
          matches: '[text="签到"] < [vid="btn_integral"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '退出签到页',
          activityIds: '.ui.activity.DetailActivity',
          matches: '[vid="iv_back"]',
        },
      ],
    },
  ],
});
