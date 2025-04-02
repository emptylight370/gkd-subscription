import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '关闭领取金币窗口',
      enable: true,
      rules: [
        {
          matchTime: 3000,
          actionMaximum: 1,
          fastQuery: true,
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
      enable: true,
      rules: [
        {
          matchTime: 3000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            'FlattenUIText[text*="宝箱"][text*="奖励"] +44 LynxFlattenUI',
        },
      ],
    },
    {
      key: 3,
      name: '点击签到按钮',
      enable: true,
      rules: [
        {
          matchTime: 3000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: 'LynxFlattenUI[text^="立即签到"]',
        },
      ],
    },
    {
      key: 4,
      name: '关闭签到完成窗口',
      enable: true,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: 'FlattenUIText[text*="看视频"] +6 LynxFlattenUI',
        },
      ],
    },
    {
      key: 5,
      name: '签到完成继续观看视频',
      enable: false,
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: 'FlattenUIText[text*="看视频"]',
        },
      ],
    },
  ],
});
