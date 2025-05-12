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
      name: '局部广告-TapPlay-悬浮窗广告',
      desc: '在tap小按钮里面的广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.sandbox.client.stub.ShadowDialogActivity$P1',
          matches: [
            '[id="com.taptap.sandbox.plugin.FloatPlugin:id/float_ad_detail"]',
            '[id="com.taptap.sandbox.plugin.FloatPlugin:id/close"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-TapPlay-退出游戏',
      desc: '点击退出游戏按钮',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.sandbox.client.stub.ShadowDialogActivity$P1',
          matches: 'Button[text="退出游戏"]',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-个人页广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.infra.page.core.activity.PageProxyActivity',
          matches: '[vid="contentPanel"] > ImageView[vid="iv_close"]',
        },
      ],
    },
  ],
});
