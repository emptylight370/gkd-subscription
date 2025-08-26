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
          activityIds:
            'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
          matches: [
            '[vid="alertTitle"][text*="添加"][text*="桌面"]',
            'TextView[text="取消"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-仅WLAN下载',
      desc: 'WiFi流量混合加速',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
          ],
          matches: 'TextView[text="仅 WLAN 下载并安装"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能弹窗-直接下载',
      desc: 'WiFi流量混合加速',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
          ],
          matches: 'Button[text="直接下载并安装"]',
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
          ],
          matches: 'Button[text="取消"]',
        },
      ],
    },
    {
      key: 5,
      name: '功能弹窗-流量直接下载',
      desc: '仅流量下载',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
          ],
          matches: [
            '[vid="alertTitle"][text="流量安装提醒"]',
            '[vid="download_remind_download_btn"][text="直接下载并安装"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能弹窗-等待WiFi下载',
      desc: '仅流量下载',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.heytap.cdo.client.ui.upgrademgr.AppUpdateActivity',
            'com.heytap.cdo.client.ui.downloadmgr.DownloadManageActivity',
            'com.heytap.cdo.client.detail.app.AppDetailActivity',
          ],
          matches: [
            '[vid="alertTitle"][text="流量安装提醒"]',
            '[vid="download_remind_close"][text="稍后安装"]',
          ],
        },
      ],
    },
  ],
});
