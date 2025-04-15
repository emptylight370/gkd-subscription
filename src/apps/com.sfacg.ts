import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 1,
      name: '分段功能-每日签到',
      desc: '书架页面触发，重进应用刷新激活次数',
      enable: false,
      rules: [
        {
          key: 1,
          name: '点击签到按钮',
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'clickCenter',
          activityIds: 'com.sf.ui.main.MainActivity',
          anyMatches: [
            '@[vid="sign_container"] > [text="签到"]',
            'ImageView[vid="signInBtn"] + TextView[text="签到"] <2 LinearLayout',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '签到',
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: 'TextView[text="点击签到"]',
        },
        {
          key: 3,
          preKeys: [2],
          name: '退出签到完成页',
          fastQuery: true,
          action: 'back',
          activityIds: 'com.sf.ui.signresult.SignResultNewActivity',
          matches: '[vid="title_tv"][text="每日签到"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-书库广告',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: 'ImageView[vid="imgClose"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-开启每日任务',
      desc: '就是领取任务',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.sf.ui.my.welfare.WelfareActivity',
            'com.sf.ui.signresult.SignResultNewActivity',
          ],
          matches: '[vid="tvTaskAction"][text="领取任务"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-领取每日任务',
      desc: '就是领取奖励',
      enable: false,
      rules: [
        {
          name: '点击领取按钮',
          key: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.sf.ui.my.welfare.WelfareActivity',
            'com.sf.ui.signresult.SignResultNewActivity',
          ],
          matches: '[vid="tvTaskAction"][text="领取奖励"]',
        },
        {
          name: '关闭领取成功窗口',
          key: 2,
          preKeys: [1],
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            'com.sf.ui.my.welfare.WelfareActivity',
            'com.sf.ui.signresult.SignResultNewActivity',
          ],
          matches: '[vid="tvConfirm"][text="开心收下"]',
        },
      ],
    },
  ],
});
