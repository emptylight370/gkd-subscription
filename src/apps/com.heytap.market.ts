import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: '软件商店',
  groups: [
    {
      key: 1,
      name: '局部广告-添加桌面组件',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
          matches:
            '[vid="alertTitle"][text*="添加"][text*="桌面"] <<n [vid="topPanel"] + * >2 [vid="ll_real_statement_container"] > * +n TextView[text="取消"]',
        },
      ],
    },
  ],
});
