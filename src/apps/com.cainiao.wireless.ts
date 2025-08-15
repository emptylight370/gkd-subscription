import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-你想买的商品',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            '@ImageView - * < FrameLayout - * < FrameLayout < FrameLayout < [vid="fl_guide_ad_get_reward_dialog_dx_container"]',
        },
      ],
    },
  ],
});
