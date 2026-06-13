import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.uuremote',
  name: 'UU远程',
  groups: [
    {
      key: 1,
      name: '评价提示',
      enable: false,
      rules: [
        {
          activityIds: 'com.remote.app.ui.activity.RemoteDeviceDetailActivity',
          matches: ['TextView[text*="好评"]', 'TextView[text="下次再说"]'],
        },
      ],
    },
  ],
});
