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
      fastQuery: true,
      rules: [
        {
          name: '签到',
          activityIds: '.ui.activity.SignInActivity',
          matches: ['[vid="status"][text="待领取"]', '[vid="tv_title"][text="立即签到"]'],
        },
      ],
    },
  ],
});
