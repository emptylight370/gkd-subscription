import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 1,
      name: '每日任务领取',
      enable: true,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          matchTime: 5000,
          action: 'clickCenter',
          activityIds: 'com.jdjdc.jdfastjdc.refactor.ui.home.TaskActivityV2',
          matches:
            '[vid="tv_get_or_complete"][text="领取"] <2 * < * < [vid="cl_daily_container"] + [vid="btn_daily_collect_all"]',
        },
      ],
    },
    {
      key: 2,
      name: '每周任务领取',
      desc: '延迟3秒开始查询',
      enable: true,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          matchDelay: 3000,
          matchTime: 5000,
          action: 'clickCenter',
          activityIds: 'com.jdjdc.jdfastjdc.refactor.ui.home.TaskActivityV2',
          matches:
            '[vid="tv_get_or_complete"][text="领取"] <2 * < * < [vid="cl_week_container"] + [vid="btn_week_collect_all"]',
        },
      ],
    },
    {
      key: 3,
      name: '领取任务奖励',
      desc: '非会员直接领取',
      enable: true,
      rules: [
        {
          preKeys: [1, 2],
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.jdjdc.jdfastjdc.refactor.ui.home.TaskActivityV2',
          matches: '[vid="tv_receive"][text*="收下"]',
        },
      ],
    },
    {
      key: 4,
      name: '奶酪福利',
      desc: '可能不会多次触发',
      enable: true,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.jdjdc.jdfastjdc.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="tv_action"][text="领取"]',
        },
      ],
    },
    {
      key: 5,
      name: '奶酪福利领取',
      desc: '点击“直接收下”',
      matchTime: 3000,
      enable: true,
      rules: [
        {
          preKeys: [4],
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.jdjdc.jdfastjdc.refactor.ui.newhome.HomeNewActivity',
          matches: '[vid="btn_get"][text="直接收下"]',
        },
      ],
    },
  ],
});
