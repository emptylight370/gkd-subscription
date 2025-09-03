import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页全屏广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: '[vid="actionDialogClose"]',
        },
      ],
    },
  ],
});
