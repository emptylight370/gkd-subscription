import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjzy.calendartime',
  name: '指尖时光',
  groups: [
    {
      key: 1,
      name: '功能弹窗-打卡',
      desc: '打卡、补卡之后点击完成',
      matchDelay: 700,
      rules: [
        {
          fastQuery: true,
          matchTime: 5000,
          action: 'clickCenter',
          actionMaximum: 5,
          activityIds:
            'com.zjzy.calendartime.desktop_widget.ui.WidgetTargetTransActivity',
          matches: 'TextView[text="打卡成功"] +3 Button[text="完成"]',
        },
        {
          fastQuery: true,
          matchTime: 5000,
          action: 'clickCenter',
          activityIds: 'com.zjzy.calendartime.ui.main.MainActivity',
          anyMatches: [
            '[vid="tv_card_tile"][text="补卡成功"] +3 [vid="btn_share"][text="完成"]',
            '[vid="tv_card_tile"][text="打卡成功"] +3 [vid="btn_share"][text="完成"]',
          ],
        },
      ],
    },
  ],
});
