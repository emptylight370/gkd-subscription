import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 1,
      name: '局部广告-角色大图广告',
      desc: '也可以是游戏',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.main.popup.HomePopupDialogActivity',
          matches: '[vid="closeIv"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-领取签到奖励',
      desc: '已适配星铁、崩三',
      enable: false,
      rules: [
        {
          name: '崩坏：星穹铁道',
          action: 'clickCenter',
          activityIds: '.web2.MiHoYoWebActivity',
          actionCdKey: 1,
          anyMatches: [
            'WebView[text*="星穹铁道"][text*="签到"] > View > View + View > View + View > View > @TextView[text*="第"][text*="天"]',
            'TextView[text*="级"] < View < View < View > @TextView[text*="第"][text*="天"]',
          ],
        },
        {
          name: '崩坏3',
          action: 'clickCenter',
          activityIds: '.web2.MiHoYoWebActivity',
          actionCdKey: 1,
          anyMatches: [
            'WebView[text*="崩坏3"][text*="签到"] > View > View + View > View > View + View > TextView[text*="第"][text*="天"] - @View',
            'Image[text="996923edce4749eff8536dbb75164c55_351516012348375859"] < @View',
          ],
        },
      ],
    },
  ],
});
