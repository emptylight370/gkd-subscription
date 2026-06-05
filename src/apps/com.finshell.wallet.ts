import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.finshell.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '分段广告-快捷卡包广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.nearme.wallet.nfc.ui.NfcConsumeActivity',
      rules: [
        {
          name: '点击关闭按钮',
          key: 1,
          matches: '[vid="ic_ad_close"][visibleToUser=true]',
        },
        {
          name: '选择原因',
          key: 2,
          preKeys: [1],
          matches: '[vid="popup_list_window_item_title"][text="不感兴趣"]',
        },
        {
          name: '点击广告关闭按钮',
          key: 3,
          matches: '[vid="ad_close_text"][text="广告"][visibleToUser=true]',
        },
        {
          name: '点击关闭广告',
          key: 4,
          preKeys: [3],
          matches: '[vid="popup_list_window_item_title"][text="关闭广告"]',
        },
      ],
    },
  ],
});
