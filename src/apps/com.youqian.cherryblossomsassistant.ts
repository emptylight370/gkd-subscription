import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youqian.cherryblossomsassistant',
  name: '樱花日语',
  groups: [
    {
      key: 1,
      name: '分段功能-签到',
      desc: '居然有签到功能',
      enable: false,
      rules: [
        {
          name: '签到',
          versionCode: { maximum: 55 },
          activityIds: '.ui.activity.SignInActivity',
          matches: '[text="立即签到"]',
        },
        {
          name: '签到V2',
          versionCode: { minimum: 56 },
          activityIds: '.ui.activity.BottomNavigationActivity',
          matches: '@View > [text="打卡"]',
          snapshotUrls: 'https://i.gkd.li/i/34492563',
        },
      ],
    },
  ],
});
