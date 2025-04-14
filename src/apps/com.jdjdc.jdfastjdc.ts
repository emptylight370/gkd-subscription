import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 1,
      name: '功能类-每日/每周任务领取',
      desc: '在20秒内匹配生效',
      enable: false,
      rules: [
        {
          name: '每日/每周任务一键领取',
          fastQuery: true,
          actionMaximum: 2,
          matchTime: 20000,
          action: 'clickCenter',
          activityIds: '.refactor.ui.home.TaskActivityV2',
          anyMatches: [
            '[vid="tv_get_or_complete"][text="领取"] <<n [vid="cl_daily_container"] + [vid="btn_daily_collect_all"]',
            '[vid="tv_get_or_complete"][text="领取"] <<n [vid="cl_week_container"] + [vid="btn_week_collect_all"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-奶酪福利',
      desc: '可能不会多次触发',
      enable: false,
      rules: [
        {
          name: '领取奶酪福利',
          key: 1,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="tv_action"][text="领取"]',
        },
      ],
    },
    {
      key: 5,
      name: '功能弹窗-点击直接收下',
      desc: '用于关闭其他功能弹出的弹窗',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            '.refactor.ui.newhome.HomeNewActivity',
            '.refactor.ui.home.TaskActivityV2',
          ],
          anyMatches: [
            '[vid="btn_get"][text="直接收下"]',
            '[vid="tv_left"][text="直接收下"]',
            '[vid="btn_get"][text="全部收下"]',
            '[vid="tv_receive"][text="直接收下"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-福利弹窗(去看看)',
      desc: '3秒关闭',
      enable: false,
      rules: [
        {
          actionDelay: 3000,
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="tv_go_to"][text="去看看"] + [vid="iv_close"]',
        },
      ],
    },
  ],
});
