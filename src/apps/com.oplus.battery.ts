import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.battery',
  name: '电池',
  groups: [
    {
      key: 1,
      name: '全屏广告-系统空间不足',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
          matches: ['[vid="alertTitle"][text="可用空间不足，手机性能下降"]', 'Button[text="知道了"]'],
        },
      ],
    },
  ],
});
