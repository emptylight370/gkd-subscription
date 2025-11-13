import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '通知提示-活动时长领取',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          anyMatches: ['[vid="mTvPopTitle"][text="活动商品赠送"]', '[vid="mTvPopTitle"][text="版本福利时长发放"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-电脑端登录自动确认',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
          matches: 'Button[text="确认登录"]',
        },
      ],
    },
  ],
});
