import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjzy.calendartime',
  name: '指尖时光',
  groups: [
    {
      key: 1,
      name: '功能弹窗-打卡',
      desc: '打卡、补卡之后点击完成',
      matchDelay: 500,
      enable: true,
      rules: [
        {
          name: '打卡完成弹窗',
          key: 1,
          fastQuery: true,
          matchTime: 5000,
          action: 'clickCenter',
          actionMaximum: 5,
          activityIds: [
            '.desktop_widget.ui.WidgetTargetTransActivity',
            '.ui.main.MainActivity',
          ],
          anyMatches: [
            '[vid="tv_card_tile"][text="补卡成功"] +3 [vid="btn_share"][text="完成"]',
            '[vid="tv_card_tile"][text="打卡成功"] +3 [vid="btn_share"][text="完成"]',
          ],
        },
        {
          name: '打卡一周弹窗',
          key: 2,
          preKeys: [1],
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            '.desktop_widget.ui.WidgetTargetTransActivity',
            '.ui.main.MainActivity',
          ],
          matches:
            '[vid="targetTitle"][text$="任务已完成"] <2 * < LinearLayout +2 [vid="iv_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-更新说明',
      enable: true,
      rules: [
        {
          actionMaximum: 1,
          matchTime: 2000,
          fastQuery: true,
          action: 'back',
          activityIds: '.ui.main.MainActivity',
          matches: '[vid="dialogTitle"][text="更新说明"]',
        },
      ],
    },
  ],
});
