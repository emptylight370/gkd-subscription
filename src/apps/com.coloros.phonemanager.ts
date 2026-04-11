import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.phonemanager',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '局部广告-关闭广告横幅',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.phonemanager.clear.ClearMainActivity',
          matches: '[vid="ad_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-添加桌面卡片',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.phonemanager.common.DialogCrossActivity',
          matches: ['[vid="tv_title"][text="添加桌面卡片"]', '[vid="tv_cancel"][text="取消"]'],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-清理存储推荐优化应用管理',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.phonemanager.clear.ClearMainActivity',
          matches: ['[vid="card_title_text"][text="应用管理"]', '[vid="card_layout_ignore_button"][text="忽略"]'],
        },
      ],
    },
  ],
});
