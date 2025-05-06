import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '通知提示-活动时长领取',
      enable: false,
      matchTime: 30000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '返回操作退出',
          fastQuery: true,
          action: 'back',
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          anyMatches: [
            '[vid="mTvPopTitle"][text="活动商品赠送"]',
            '[vid="mTvPopTitle"][text="版本福利时长发放"]',
          ],
        },
      ],
    },
  ],
});
