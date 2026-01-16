import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '功能类-移动网络下载-是',
      desc: '使用流量更新应用',
      enable: false,
      rules: [
        {
          activityIds: '.view.appmanager.AppManagerActivity',
          matches: ['TextView[text*="移动网络流量"]', '@View > TextView[text="是"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-移动网络下载-否',
      desc: '不使用流量更新应用',
      enable: false,
      rules: [
        {
          activityIds: '.view.appmanager.AppManagerActivity',
          matches: ['TextView[text*="移动网络流量"]', '@View > TextView[text="否"]'],
        },
      ],
    },
  ],
});
