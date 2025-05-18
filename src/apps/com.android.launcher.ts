import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.launcher',
  name: '系统桌面',
  groups: [
    {
      key: 1,
      name: '功能弹窗-添加组件到桌面',
      desc: 'ColorOS版，通常是应用想要添加广告组件，会误伤',
      matchTime: 2000,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.launcher3.dragndrop.AddItemActivity',
          matches: [
            '[vid="alertTitle"][text="添加至桌面"]',
            'Button[text="取消"]',
          ],
        },
      ],
    },
  ],
});
