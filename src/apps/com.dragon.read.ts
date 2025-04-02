import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '关闭领取金币窗口',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            'TextView[text="恭喜你获得"] <2 ViewGroup < FrameLayout + FrameLayout > ImageView',
        },
      ],
    },
    {
      key: 2,
      name: '关闭宝箱窗口',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            'FlattenUIText[text*="宝箱"][text*="奖励"] +44 LynxFlattenUI',
        },
      ],
    },
  ],
});
