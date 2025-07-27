import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 1,
      name: '功能类-QQ更新',
      enable: false,
      fastQuery: true,
      rules: [
        {
          name: '测试版更新弹窗',
          activityIds: '.upgrade.activity.UpgradeActivity',
          matches: ['TextView[text="QQ测试版"]', 'TextView[text="近期不提醒"]'],
        },
        {
          name: '新版本更新横幅',
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView - TextView[text="点击更新"]',
        },
      ],
    },
  ],
});
