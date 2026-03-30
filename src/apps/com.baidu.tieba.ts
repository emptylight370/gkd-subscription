import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '分段广告-直播间帖子',
      fastQuery: true,
      activityIds: '.forum.ForumActivity',
      enable: false,
      rules: [
        {
          key: 1,
          name: '点击关闭',
          matches: '@ImageView < LinearLayout - LinearLayout > LinearLayout > [text$="开播"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击不感兴趣',
          matches: '@View - [text="选择不喜欢的理由"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-广告回帖',
      fastQuery: true,
      activityIds: '.pb.pb.main.PbActivity',
      enable: false,
      rules: [
        {
          key: 1,
          name: '点击关闭',
          matches:
            '@LinearLayout < RelativeLayout <(5-n) LinearLayout < RelativeLayout + LinearLayout > RelativeLayout > [text$="广告"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '点击不感兴趣',
          matches: '@View - [text="选择不喜欢理由"]',
        },
      ],
    },
  ],
});
