import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '局部广告-游戏中心添加至桌面横幅',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.biligame.ui.GameCenterHomeActivity',
          matches: '[vid="biligame_shortcut_close"]',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-直播间小广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
          matches: '[vid="live_game_card_close"]',
        },
      ],
    },
  ],
});
