import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页全屏广告',
      fastQuery: true,
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      enable: false,
      rules: [
        {
          name: '弹窗关闭按钮',
          matches: '[vid="actionDialogClose"]',
        },
        {
          name: '欢迎来到地级市',
          matches: '@ImageView < ViewGroup <2 ViewGroup + ViewGroup > ViewGroup > ViewGroup > [text^="你好,欢迎来到"]',
        },
      ],
    },
  ],
});
