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
          anyMatches: [
            '@ImageView[desc="dialog_system_close_button"] <<10 [id="android:id/content"]',
            '[vid="button_close"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-领取奖励',
      enable: false,
      rules: [
        {
          action: 'back',
          activityIds: '.feature.reward.RewardActivity',
          matches: [
            'TextView[text="恭喜获得"]',
            'TextView[text="按空白处继续"]',
          ],
        },
      ],
    },
  ],
});
