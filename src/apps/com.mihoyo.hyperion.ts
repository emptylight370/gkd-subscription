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
      desc: '已适配星铁、崩三、绝区零、原神',
      enable: false,
      matchDelay: 1000,
      activityIds: '.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 3,
          name: '登录游戏账号',
          matches: 'TextView[text="请在此绑定你的角色"]',
        },
        {
          key: 4,
          preKeys: [3],
          name: '登录第一个账号',
          matches: 'ListView > @View > TextView[text^="UID"]',
        },
        {
          key: 5,
          name: '关闭登录账号弹窗',
          fastQuery: true,
          matches: [
            '@TextView[text!="请在此绑定你的角色"] < View < View <2 View < View <2 View < View <2 View < WebView < WebView < [vid="webViewContainer"]',
            '@TextView - TextView[text="请选择角色"]',
          ],
        },
        {
          name: '关闭签到成功弹窗',
          key: 2,
          preKeys: [1],
          priorityActionMaximum: 30,
          matches: '@TextView - View > View + View > TextView[text*="签到成功"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17601273',
            'https://i.gkd.li/i/17601340',
            'https://i.gkd.li/i/17611620',
            'https://i.gkd.li/i/17611616',
            'https://i.gkd.li/i/14967631',
          ],
        },
        {
          name: '点击签到',
          key: 1,
          // webview不能fastQuery，使用取巧方法使用支持fastQuery的容器假装fastQuery
          fastQuery: true,
          actionCd: 2000,
          anyMatches: [
            // 崩坏：星穹铁道，会一直点击按钮（即使当天已签到）
            '@TextView[text~=".*第\\\\d+天"][visibleToUser=true] <n View <3 View <2 View <2 View < WebView[text*="星穹铁道"][text*="签到"] <<2 [vid="webViewContainer"]',
            // 崩坏3、绝区零、原神
            'Image[visibleToUser=true] < @View <n View <n View < View <2 View < WebView[text*="签到"][text!="星穹铁道"] <<2 [vid="webViewContainer"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/17601269', 'https://i.gkd.li/i/17601338', 'https://i.gkd.li/i/17611619'],
        },
        {
          name: '轮空',
          // 用于更换账号期间保持规则继续匹配，签到页面更换账号不会触发再次匹配
          key: 6,
          fastQuery: true,
          action: 'none',
          actionCd: 3000,
          anyMatches: [
            // 崩坏：星穹铁道、崩坏3、绝区零、原神
            'WebView[text*="签到"] <<2 [vid="webViewContainer"]',
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
          anyMatches: ['TextView[vid="signTv"][text="打卡"]', '[text="打卡"] <<2 LinearLayout[vid="discussSignView"]'],
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-订阅消息',
      desc: '跳过：订阅游戏官方资讯',
      enable: false,
      matchTime: 3000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.HyperionMainActivity',
          matches: '[text="残忍拒绝"] < [vid="leftBtnView"]',
        },
      ],
    },
    {
      key: 5,
      name: '分段功能-清理通知消息',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '点击含未读消息对话',
          activityIds: '.main.HyperionMainActivity',
          actionDelay: 300,
          matches: '@ViewGroup > [vid="roomDotGroup"] > [vid="messageTextDotViewGroup"] > [vid="messageTextDotView"]',
        },
        {
          key: 2,
          preKeys: [1],
          name: '返回通知列表',
          activityIds: '.message.tab.channel.NotificationChannelActivity',
          matches: '[vid="backBtn"]',
        },
      ],
    },
    {
      key: 6,
      name: '分段功能-更新后打开游戏横幅',
      enable: false,
      fastQuery: true,
      activityIds: '.main.HyperionMainActivity',
      rules: [
        {
          key: 1,
          name: '点击关闭按钮',
          matches: ['[vid="mOrderGameBtn"][text="打开"]', '[vid="mOrderGameClose"]'],
        },
        {
          key: 2,
          preKeys: [1],
          name: '关闭弹窗',
          matches: '[vid="confirmTv"][text="确定"]',
        },
      ],
    },
  ],
});
