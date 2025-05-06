import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.ota',
  name: '软件更新',
  groups: [
    {
      key: 1,
      name: '功能弹窗-拒绝自动下载更新包',
      enable: false,
      rules: [
        {
          activityIds: 'com.oplus.otaui.activity.EntryActivity',
          matches: [
            '[vid="alertTitle"][text="开启自动下载"]',
            '@RelativeLayout >2 [text="关闭"]',
          ],
        },
      ],
    },
  ],
});
