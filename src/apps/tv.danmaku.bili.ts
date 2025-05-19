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
      key: 2,
      name: '全屏广告-会员中心全屏弹窗',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches: '@TextView - [id="dialog-canvas"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-会员中心开通大会员',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches: '@View - TextView[text="更多套餐 >"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-领取大会员每日经验',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches: '[id="drawExperienceModule"] >2 [text="领取"]',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-大积分每日签到',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches: '[id="bigPointModule"] > [text="签到"]',
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
