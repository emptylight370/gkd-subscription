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
    {
      key: 2,
      name: '开屏广告-小程序启动广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI00',
            '.plugin.appbrand.ui.AppBrandUI01',
            '.plugin.appbrand.ui.AppBrandUI02',
            '.plugin.appbrand.ui.AppBrandUI03',
            '.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches: ['[text="广告"]', '[text="秒"]', '[text="跳过"]'],
        },
      ],
    },
  ],
});
