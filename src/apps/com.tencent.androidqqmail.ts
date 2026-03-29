import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
    {
      key: 1,
      name: '局部广告-收件箱顶部广告',
      desc: '文件云盘会员',
      enable: false,
      rules: [
        {
          activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
          matches: 'LinearLayout > ImageView + FrameLayout + ImageView',
        },
      ],
    },
  ],
});
