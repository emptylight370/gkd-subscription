import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'kylec.me.lightbookkeeping',
  name: '一羽记账',
  groups: [
    {
      key: 1,
      name: '功能类-自动同步',
      desc: '在同步异常的时候自动点击同步',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.HomeActivity',
          actionCd: 3000,
          matches: ['[vid="tvUnSyncBillCount"]', '[vid="ivSyncRedNotice"]', '[vid="ivBackupAndSync"]'],
        },
      ],
    },
  ],
});
