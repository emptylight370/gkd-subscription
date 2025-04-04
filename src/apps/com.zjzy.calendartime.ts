import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjzy.calendartime',
  name: '指尖时光',
  groups: [
    {
      key: 1,
      name: '局部弹窗-桌面组件打卡',
      desc: '打卡之后点击完成',
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
      ],
    },
  ],
});
