import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '功能类-退出QQ音乐',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.AppStarterActivity',
          matches: '@RelativeLayout > [text="关闭QQ音乐"]',
        },
      ],
    },
  ],
});
