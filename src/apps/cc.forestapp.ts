import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cc.forestapp',
  name: 'Forest 专注森林',
  groups: [
    {
      key: 1,
      name: '全屏广告-节日活动',
      matchTime: 5000,
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activities.main.MainActivity',
          matches:
            '@ImageView[desc="dialog_system_close_button"] <<10 [id="android:id/content"]',
        },
      ],
    },
  ],
});
