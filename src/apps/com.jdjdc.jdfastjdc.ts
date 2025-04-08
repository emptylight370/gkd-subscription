import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 1,
      name: '功能类-每日/每周任务领取',
      desc: '在20秒内匹配生效',
      enable: true,
      rules: [
        {
          name: '每日/每周任务一键领取',
          key: 1,
          fastQuery: true,
          actionMaximum: 2,
          matchTime: 20000,
          action: 'clickCenter',
          activityIds: '.refactor.ui.home.TaskActivityV2',
          anyMatches: [
            '[vid="tv_get_or_complete"][text="领取"] <2 * < * < [vid="cl_daily_container"] + [vid="btn_daily_collect_all"]',
            '[vid="tv_get_or_complete"][text="领取"] <2 * < * < [vid="cl_week_container"] + [vid="btn_week_collect_all"]',
          ],
        },
        {
          name: '关闭领取弹窗',
          preKeys: [1],
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.refactor.ui.home.TaskActivityV2',
          matches: '[vid="tv_receive"][text*="收下"]',
        },
      ],
    },
    {
      key: 4,
      name: '分段功能-奶酪福利',
      desc: '可能不会多次触发',
      enable: true,
      rules: [
        {
          name: '领取奶酪福利',
          key: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="tv_action"][text="领取"]',
        },
        {
          name: '关闭领取弹窗',
          preKeys: [1],
          fastQuery: true,
          forcedTime: 2000,
          action: 'clickCenter',
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="btn_get"][text="直接收下"]',
        },
      ],
    },
    {
      key: 5,
      name: '功能弹窗-点击直接收下',
      desc: '在领取弹窗没能及时关闭时保底',
      matchTime: 3000,
      enable: true,
      rules: [
        {
          matchDelay: 300,
          actionDelay: 300,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          anyMatches: [
            '[vid="btn_get"][text="直接收下"]',
            '[vid="tv_left"][text="直接收下"]',
          ],
        },
      ],
    },
  ],
});
