import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 1,
      name: '局部广告-手环会员领取',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="user_content_vibrant_life"] +2 LinearLayout > TextView[text="取消"]',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-设置后台保护',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huawei.ui.homewear21.home.WearHomeOldActivity',
          matches: ['[vid="toast_title_tv_bold"][text*="后台保护"]', '[vid="toast_cancel_tv"][text="忽略"]'],
        },
      ],
    },
  ],
});
