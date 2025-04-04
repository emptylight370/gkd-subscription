import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 1,
      name: '局部广告-云玩广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.play.taptap.ui.SplashAct',
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
