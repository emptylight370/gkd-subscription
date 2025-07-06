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
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 2,
          name: '签到',
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: '@LinearLayout > TextView[text="点击签到"]',
        },
        {
          key: 3,
          preKeys: [2],
          name: '退出签到完成页',
          action: 'back',
          activityIds: 'com.sf.ui.signresult.SignResultNewActivity',
          matches: '[vid="title_tv"][text="每日签到"]',
        },
        {
          key: 4,
          preKeys: [2],
          name: '不在签到时间内',
          activityIds: '.ui.SysDialogActivity',
          matches: '[vid="tvConfirm"][text="我知道了"]',
        },
        {
          key: 5,
          preKeys: [4],
          name: '签到失败退出签到页',
          action: 'back',
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: 'TextView[text="点击签到"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-书库广告',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: 'ImageView[vid="imgClose"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-领取每日任务',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.sf.ui.my.welfare.WelfareActivity',
        'com.sf.ui.signresult.SignResultNewActivity',
        'com.sf.ui.main.mine.MyLevelActivity',
      ],
      rules: [
        {
          key: 1,
          name: '领取任务',
          actionCd: 2500,
          actionCdKey: 1,
          matches: '[vid="tvTaskAction"][text="领取任务"]',
        },
        {
          name: '点击领取奖励按钮',
          key: 2,
          actionCdKey: 1,
          matches: '[vid="tvTaskAction"][text="领取奖励"]',
        },
        {
          name: '关闭领取成功窗口',
          key: 3,
          preKeys: [2, 3],
          matches: '[vid="tvConfirm"][text="开心收下"]',
        },
      ],
    },
    {
      key: 5,
      name: '分段功能-领取会员权益',
      desc: '每日/周代券领取',
      enable: false,
      fastQuery: true,
      activityIds: 'com.sf.ui.main.member.SFMemberActivity',
      rules: [
        {
          name: '点击领取',
          key: 1,
          actionCd: 2000,
          anyMatches: [
            '[vid="tvGet"][text="立即领取"]',
            '[vid="tvGet"][text="领取"]',
          ],
        },
        {
          name: '收下奖励',
          key: 2,
          preKeys: [1],
          matches: '[vid="btnCatch"][text="收下了"]',
        },
      ],
    },
  ],
});
