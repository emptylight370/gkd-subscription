import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 10,
      name: '功能类-每日签到',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          name: '每日签到',
          fastQuery: true,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          matches: '@[vid="fl_container"] > [vid="iv_anim"]',
        },
        {
          name: '连续签到奖励',
          matchTime: 10000,
          fastQuery: true,
          actionCdKey: 1,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          anyMatches: [
            '@[vid="pag_left"] -2 [vid="pag_light_left"]',
            '@[vid="pag_center"] -2 [vid="pag_light_center"]',
            '@[vid="pag_right"] -2 [vid="pag_light_right"]',
          ],
        },
        {
          name: '7天签到奖励',
          matchTime: 10000,
          fastQuery: true,
          actionCdKey: 1,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          matches: '@FrameLayout > [vid="iv_anim"]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-任务领取',
      enable: false,
      actionMaximum: 2,
      rules: [
        {
          name: '每日/每周任务一键领取',
          fastQuery: true,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          anyMatches: [
            '@[vid="btn_daily_collect_all"] - [vid="cl_daily_container"] >3 [text="领取"]',
            '@[vid="btn_week_collect_all"] - [vid="cl_week_container"] >3 [text="领取"]',
          ],
        },
        {
          name: '成长之路领取',
          fastQuery: true,
          activityIds: '.refactor.ui.home.TaskActivityV2',
          matches:
            '@[vid="btn_get"] <<n [vid="recyclerview"] - [vid="cl_header_container"] >2 [text="成长点数"]',
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
      actionCd: 100,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.refactor.ui.newhome.HomeNewActivity',
            '.refactor.ui.home.TaskActivityV2',
          ],
          anyMatches: [
            '[text="直接收下"]',
            '[text="全部收下"]',
            '[text="立即收下"]',
            '[vid="tv_left"][text="双倍收下"]',
            '@[vid="fl_get"] > [text="双倍收下"]',
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
      name: '全屏广告-首页广告',
      desc: '奶酪特别企划，奶酪限时福利',
      enable: false,
      matchTime: 5000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.refactor.ui.newhome.HomeNewActivity',
          anyMatches: [
            '@ImageView < [vid="fl_container"]',
            '@[vid="iv_close"] <2 [vid="cl_root"]',
          ],
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
      desc: '退出会员页面时弹出，每天一次',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
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
