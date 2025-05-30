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
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '点击签到按钮',
          fastQuery: true,
          activityIds: 'com.sf.ui.main.MainActivity',
          anyMatches: [
            '@[vid="sign_container"] > [text="签到"]',
            '@LinearLayout > TextView[text="签到"]',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '签到',
          fastQuery: true,
          activityIds: 'com.sf.ui.main.MainActivity',
          matches: '@LinearLayout > TextView[text="点击签到"]',
        },
        {
          key: 6,
          preKeys: [2],
          name: '已签到21天',
          priorityTime: 500,
          fastQuery: true,
          activityIds: 'com.sf.ui.signresult.SignResultNewActivity',
          matches: ['[vid="tvDay"][text~="2[1-3]"]', '[vid="imgGift"]'],
        },
        {
          key: 7,
          preKeys: [6],
          name: '领取签到21天奖励',
          priorityTime: 500,
          fastQuery: true,
          activityIds: 'com.sf.ui.signresult.SignGiftBagActivity',
          matches: '[vid="tvAction"][text="领取"]',
        },
        {
          key: 8,
          preKeys: [7],
          name: '退出领取奖励页',
          action: 'back',
          fastQuery: true,
          activityIds: 'com.sf.ui.signresult.SignGiftBagActivity',
          matches: '[vid="tvAction"][text="已领取"]',
          excludeMatches: '[vid="tvAction"][text="领取"]',
        },
        {
          key: 3,
          preKeys: [2, 8],
          name: '退出签到完成页',
          fastQuery: true,
          action: 'back',
          activityIds: 'com.sf.ui.signresult.SignResultNewActivity',
          matches: '[vid="title_tv"][text="每日签到"]',
        },
        {
          key: 4,
          preKeys: [2],
          name: '不在签到时间内',
          fastQuery: true,
          activityIds: '.ui.SysDialogActivity',
          matches: '[vid="tvConfirm"][text="我知道了"]',
        },
        {
          key: 5,
          preKeys: [4],
          name: '签到失败退出签到页',
          action: 'back',
          fastQuery: true,
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
      name: '功能类-开启每日任务',
      desc: '就是领取任务',
      enable: false,
      rules: [
        {
          fastQuery: true,
          // 要按钮匹配上一段时间才点击。防止刚领任务没有刷新状态
          actionDelay: 400,
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
      name: '分段功能-领取每日任务',
      desc: '就是领取奖励',
      enable: false,
      rules: [
        {
          name: '点击领取按钮',
          key: 1,
          fastQuery: true,
          // 要匹配上一段时间才点击
          actionDelay: 400,
          activityIds: [
            'com.sf.ui.my.welfare.WelfareActivity',
            'com.sf.ui.signresult.SignResultNewActivity',
          ],
          matches: '[vid="tvTaskAction"][text="领取奖励"]',
        },
        {
          name: '关闭领取成功窗口',
          key: 2,
          preKeys: [1, 2],
          fastQuery: true,
          activityIds: [
            'com.sf.ui.my.welfare.WelfareActivity',
            'com.sf.ui.signresult.SignResultNewActivity',
          ],
          matches: '[vid="tvConfirm"][text="开心收下"]',
        },
      ],
    },
    {
      key: 5,
      name: '分段功能-领取会员权益',
      desc: '每日/周代券领取',
      enable: false,
      rules: [
        {
          name: '点击领取',
          key: 1,
          fastQuery: true,
          activityIds: 'com.sf.ui.main.member.SFMemberActivity',
          anyMatches: [
            '[vid="tvGet"][text="立即领取"]',
            '[vid="tvGet"][text="领取"]',
          ],
        },
        {
          name: '收下奖励',
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: 'com.sf.ui.main.member.SFMemberActivity',
          matches: '[vid="btnCatch"][text="收下了"]',
        },
      ],
    },
  ],
});
