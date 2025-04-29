import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 1,
      name: '功能类-每日/每周任务领取',
      enable: false,
      rules: [
        {
          name: '每日/每周任务一键领取',
          fastQuery: true,
          actionMaximum: 2,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          anyMatches: [
            '[vid="tv_get_or_complete"][text="领取"] <<4 [vid="cl_daily_container"] + [vid="btn_daily_collect_all"]',
            '[vid="tv_get_or_complete"][text="领取"] <<4 [vid="cl_week_container"] + [vid="btn_week_collect_all"]',
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
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="tv_go_to"][text="去看看"] + [vid="iv_close"]',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-奶酪特别企划',
      desc: '关闭按钮在右上角',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          matches: '@ImageView < [vid="fl_container"]',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-盲盒大会员推广',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.refactor.ui.function.BlindBoxActivity',
          matches:
            '@[vid="iv_close"] - ViewGroup > [vid="tv_buy"][text*="大会员"]',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-不开通会员弹窗',
      desc: '退出会员页面时弹出',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.refactor.ui.mine.VipThronesActivity',
          matches: '[vid="tv_close"]',
        },
      ],
    },
  ],
});
