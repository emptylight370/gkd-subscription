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
      desc: '已部分适配星铁、崩三',
      enable: false,
      actionCd: 1000,
      actionMaximum: 3,
      rules: [
        {
          name: '崩坏：星穹铁道',
          key: 1,
          action: 'clickCenter',
          activityIds: '.web2.MiHoYoWebActivity',
          anyMatches: [
            'WebView[text*="星穹铁道"][text*="签到"] > View > View + View > View + View > View > @TextView[text*="第"][text*="天"]',
            'TextView[text*="级"] < View < View < View > @TextView[text*="第"][text*="天"]',
          ],
        },
        {
          name: '崩坏3',
          key: 3,
          action: 'clickCenter',
          activityIds: '.web2.MiHoYoWebActivity',
          anyMatches: [
            'WebView[text*="崩坏3"][text*="签到"] > View > View + View > View > View + View > TextView[text*="第"][text*="天"] - @View',
            'Image[text="996923edce4749eff8536dbb75164c55_351516012348375859"] < @View',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-打卡',
      desc: '全分区适配',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.main.HyperionMainActivity',
          matches:
            'LinearLayout[vid="discussSignView"] TextView[vid="signTv"][text="已打卡"]',
        },
      ],
    },
  ],
});
