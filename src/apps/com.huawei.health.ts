import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 1,
      name: '局部广告-手环会员领取',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[vid="user_content_vibrant_life"] +2 LinearLayout > TextView[text="取消"]',
        },
      ],
    },
  ],
});
