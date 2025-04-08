import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 1,
      name: '功能类-每日签到',
      desc: '未测试，书架页面触发',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          action: 'clickCenter',
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: '@[vid="sign_container"] > [text="签到"]',
        },
      ],
    },
  ],
});
