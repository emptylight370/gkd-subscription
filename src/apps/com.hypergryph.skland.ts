import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '功能类-每日签到',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.hypergryph.skland.MainActivity',
          matches: 'TextView[text="领"] <2 ViewGroup',
        },
      ],
    },
  ],
});
