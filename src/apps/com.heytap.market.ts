import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: '软件商店',
  groups: [
    {
      key: 1,
      name: '局部广告-添加桌面组件',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
          matches: ['[vid="alertTitle"][text*="添加"][text*="桌面"]', 'TextView[text="取消"]'],
        },
      ],
    },
    {
      key: 3,
      name: '功能弹窗-直接下载',
      desc: 'WiFi+流量、仅流量',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            '.appmanage.core.upgrade.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
            'com.downloader.page.ui.main.activity.DownloaderPageActivity',
          ],
          matches: ['[vid="alertTitle"][text="流量安装提醒"]', '[vid="download_remind_download_btn"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-仅WLAN下载',
      desc: 'WiFi+流量、仅流量',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            '.appmanage.core.upgrade.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
            'com.downloader.page.ui.main.activity.DownloaderPageActivity',
          ],
          matches: ['[vid="alertTitle"][text="流量安装提醒"]', '[vid="download_remind_close"]'],
        },
      ],
    },
    {
      key: 4,
      name: '功能弹窗-下载异常提醒',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.download.ui.activity.DownloadDialogActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
            'com.downloader.page.ui.main.activity.DownloaderPageActivity',
          ],
          matches: 'Button[text="取消"]',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-添加应用搜索卡到桌面',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.search.core.activity.SearchActivity',
          matches: ['[vid="alertTitle"][text*="应用搜索卡"]', '[vid="cancel"][text="取消"]'],
        },
      ],
    },
  ],
});
