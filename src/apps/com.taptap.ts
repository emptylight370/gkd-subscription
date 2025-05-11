import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 1,
      name: '局部广告-云玩广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.play.taptap.ui.SplashAct',
          matches: '[vid="iv_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-tap沙盒-悬浮窗广告',
      desc: '在tap小按钮里面的广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.sandbox.client.stub.ShadowDialogActivity$P1',
          matches: '[id="com.taptap.sandbox.plugin.FloatPlugin:id/close"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-tap沙盒-广告',
      desc: '在关闭游戏弹窗的广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.sandbox.client.stub.ShadowDialogActivity$P1',
          matches: '[id="com.taptap.sandbox.plugin.FloatPlugin:id/close"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-tap沙盒-退出游戏',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.sandbox.client.stub.ShadowDialogActivity$P1',
          matches: 'Button[text="退出游戏"]',
        },
      ],
    },
  ],
});
