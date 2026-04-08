import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '功能类-摇一摇领优惠',
      enable: false,
      rules: [
        {
          activityIds: '.plugin.appbrand.ui.AppBrandPluginUI',
          matches: ['TextView[text="摇优惠"]', '@View > [text^="摇一摇"][text.length>3][text.length<10]'],
        },
      ],
    },
  ],
});
