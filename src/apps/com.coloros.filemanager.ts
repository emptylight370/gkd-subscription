import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.filemanager',
  name: '文件管理',
  groups: [
    {
      key: 1,
      name: '其他-清理垃圾提醒',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.filemanager.main.ui.MainActivity',
          matches: ['[vid="action"][text="去清理"]', '[vid="ignore"][text="忽略"]'],
        },
      ],
    },
  ],
});
