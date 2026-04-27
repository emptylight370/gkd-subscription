import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.appdetail',
  name: '应用安装器',
  groups: [
    {
      key: 1,
      name: '权限提示-安装增强防护',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.model.finish.InstallFinishActivity',
          matches: ['[vid="alertTitle"][text*="安装增强防护"]', '[text="取消"]'],
        },
      ],
    },
  ],
});
