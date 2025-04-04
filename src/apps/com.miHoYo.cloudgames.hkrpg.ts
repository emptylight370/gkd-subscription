import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '通知提示-活动时长领取',
      enable: true,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'back',
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[vid="mTvPopTitle"][text="活动商品赠送"]',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-活动时长领取（方法2）',
      desc: '需要先匹配方法1，无法执行才进入方法2',
      enable: false,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          preKeys: [1],
          matchDelay: 200,
          actionDelay: 1000,
          fastQuery: true,
          action: 'clickCenter',
          position: { left: 10, top: 10 },
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: '[vid="mTvPopTitle"][text="活动商品赠送"]',
        },
      ],
    },
  ],
});
