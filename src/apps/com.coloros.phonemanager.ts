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
  ],
});
