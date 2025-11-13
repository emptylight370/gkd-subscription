import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-活动广告',
      desc: '淘宝闪购',
      enable: false,
      matchTime: 3000,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '@ImageView <2 [vid="poplayer_native_state_center_layout_frame_id"] < [vid="poplayer_inner_view"]',
        },
      ],
    },
  ],
});
