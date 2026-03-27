import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus',
  name: 'MT管理器',
  groups: [
    {
      key: 1,
      name: '功能弹窗-更新后首次启动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      rules: [
        {
          action: 'back',
          activityIds: '.Main',
          matches: ['[vid="icon"]', '[text="关于"]'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      rules: [
        {
          activityIds: '.Main',
          matches: ['[text="更新"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/16050794',
        },
      ],
    },
  ],
});
