import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 1,
      name: '局部广告-角色大图广告',
      desc: '也可以是游戏',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.popup.HomePopupDialogActivity',
          matches: '[vid="closeIv"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段功能-领取签到奖励',
      desc: '已适配星铁、崩三、绝区零、原神，匹配时长1分钟',
      enable: false,
      actionCd: 1000,
      actionMaximum: 60,
      rules: [
        {
          name: '点击签到',
          key: 1,
          activityIds: '.web2.MiHoYoWebActivity',
          anyMatches: [
            // 崩坏：星穹铁道
            'WebView[text*="星穹铁道"][text*="签到"] >2 View + View > View + View > View > @TextView[text*="第"][text*="天"]',
            'TextView[text*="级"] <<3 View > @TextView[text*="第"][text*="天"]',
            // 崩坏3
            'WebView[text*="崩坏3"][text*="签到"] >2 View + View >2 View + View > TextView[text*="第"][text*="天"] - @View',
            'Image[text="996923edce4749eff8536dbb75164c55_351516012348375859"] < @View',
            // 绝区零
            'WebView[text*="绝区零"][text*="签到"] >2 View + View >2 View + View > TextView[text*="第"][text*="天"] - View',
            'Image[text="c4568a8bef48b6926eb59957651393f9_5675517246901582253"] < View',
            // 原神
            'WebView[text*="原神"][text*="签到"] >2 View + View >2 View + View > TextView[text*="第"][text*="天"] - View',
            'Image[text="4404a843b1cf6abe353c0b5b59381db6_655726004525214164"] < View',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17601269',
            'https://i.gkd.li/i/17601338',
            'https://i.gkd.li/i/17611619',
          ],
        },
        {
          name: '关闭签到成功弹窗',
          key: 2,
          preKeys: [1],
          activityIds: '.web2.MiHoYoWebActivity',
          matches: 'TextView[text*="签到成功"] < View <2 View + TextView',
          snapshotUrls: [
            'https://i.gkd.li/i/17601273',
            'https://i.gkd.li/i/17601340',
            'https://i.gkd.li/i/17611620',
            'https://i.gkd.li/i/17611616',
            'https://i.gkd.li/i/14967631',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-打卡',
      desc: '全分区适配',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.HyperionMainActivity',
          anyMatches: [
            'TextView[vid="signTv"][text="打卡"]',
            '[text="打卡"] <<2 LinearLayout[vid="discussSignView"]',
          ],
        },
      ],
    },
  ],
});
