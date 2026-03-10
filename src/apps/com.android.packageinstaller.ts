import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能弹窗-安装未知应用',
      enable: true,
      rules: [
        {
          fastQuery: true,
          activityIds: '.v2.ui.InstallLaunch',
          matches: ['[vid="alertTitle"][text*="安装未知应用"]', 'Button[text="继续"]'],
        },
      ],
    },
  ],
});
