import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.map',
  name: '腾讯地图',
  groups: [
    {
      key: 1,
      name: '功能类-点击签到',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.WelcomeActivity',
          matches:
            '@ViewGroup[childCount>0] <3 ViewGroup <5 ViewGroup <2 ViewGroup < ViewGroup < ScrollView < ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < [vid="tab_page_container"]',
        },
      ],
    },
  ],
});
