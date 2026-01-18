import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 1,
      name: '功能类-QQ更新',
      enable: false,
      fastQuery: true,
      rules: [
        {
          name: '测试版更新弹窗',
          activityIds: '.upgrade.activity.UpgradeActivity',
          matches: ['TextView[text="QQ测试版"]', 'TextView[text="近期不提醒"]'],
        },
        {
          name: '新版本更新横幅',
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView - TextView[text="点击更新"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-清理聊天记录-分类查找',
      desc: '一直加载更多直到最后，可以快速点击折叠月份分类以快速加载，不用一直下滑。自动折叠月份分类会有问题，建议手动',
      enable: false,
      actionCd: 0,
      actionDelay: 100,
      activityIds: '.activity.history.NTChatHistoryActivity',
      rules: [
        {
          name: '点击加载更多按钮',
          fastQuery: true,
          matches: ['Button[text="选择"][clickable=true]', 'Button[text="加载更多"]'],
        },
      ],
    },
    {
      key: 3,
      name: '功能弹窗-确认删除聊天文件',
      desc: '在弹出确认删除弹窗的时候点击删除，并且返回选择文件状态，此处限选20个图片/视频',
      enable: false,
      activityIds: '.activity.history.NTChatHistoryActivity',
      actionCd: 100,
      rules: [
        {
          key: 1,
          name: '点击删除按钮',
          fastQuery: true,
          matches: ['TextView[text="删除后将不会出现在你的消息记录中"]', '@RelativeLayout > * > Button[text="删除"]'],
        },
        {
          key: 2,
          preKeys: [1],
          name: '切换到选择状态',
          matches: 'Button[text="选择"][clickable=true]',
        },
      ],
    },
  ],
});
