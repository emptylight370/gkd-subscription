import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-开启备份',
      enable: false,
      fastQuery: true,
      activityIds: '.ui.RepeatedNewQuickSettingsActivity',
      rules: [
        {
          name: '备份数据',
          matches: '[vid="not_open"][text="暂不开启"]',
        },
        {
          name: '备份照片',
          matches: '[vid="dialog_button_cancel"][text="暂不开启"]',
        },
      ],
    },
  ],
});
