import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oneplus.bbs',
  name: '一加社区',
  groups: [
    {
      key: 1,
      name: '局部广告-顶部广告横幅',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.oplus.community.activity.MainActivity', 'com.oplus.community.circle.ArticleActivity'],
          matches: '[vid="iv_notice_close"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/26644066'],
        },
      ],
    },
  ],
});
