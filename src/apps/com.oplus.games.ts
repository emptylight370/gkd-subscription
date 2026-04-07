import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.games',
  name: '游戏助手',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.nearme.gamespace.desktopspace.ui.DesktopSpacePortraitMainActivity',
          matches: ['[vid="alertTitle"][text="未成年人模式"]', '[text="知道了"]'],
        },
      ],
    },
  ],
});
