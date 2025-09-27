import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjzy.calendartime',
  name: '指尖时光',
  groups: [
    {
      key: 1,
      name: '功能弹窗-打卡',
      desc: '打卡、补卡之后点击完成',
      enable: false,
      fastQuery: true,
      actionCd: 100,
      activityIds: [
        '.desktop_widget.ui.WidgetTargetTransActivity',
        '.ui.main.MainActivity',
      ],
      rules: [
        {
          name: '打卡完成弹窗',
          key: 1,
          actionMaximum: 5,
          matches:
            '[vid="tv_card_tile"][text~="[打补]卡成功"] +3 [vid="btn_share"][text="完成"]',
        },
        {
          name: '打卡一周弹窗',
          key: 2,
          preKeys: [1],
          matches:
            '[vid="targetTitle"][text$="任务已完成"] <<3 LinearLayout +2 [vid="iv_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能弹窗-更新说明',
      enable: false,
      actionMaximum: 1,
      matchTime: 2000,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.main.MainActivity',
          matches:
            '[vid="dialogTitle"][text="更新说明"] < LinearLayout + ImageView[vid="iv_close"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-点击进行系统解锁',
      desc: '触发系统验证',
      enable: true,
      matchTime: 3000,
      rules: [
        {
          fastQuery: true,
          activityIds: ['.ui.main.MainActivity', '.ui.base.ContainerActivity'],
          matches: '[vid="curUnlockTypeImg"]',
        },
      ],
    },
  ],
});
