import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.speechassist',
  name: '小布助手',
  groups: [
    {
      key: 1,
      name: '全屏广告-添加桌面快捷方式',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: ['.aichathome.chat.ui.AIChatHomeActivity', '.launcher.SpeechAssistMainActivity'],
          matches: ['[vid="alertTitle"][text*="桌面"]', '[text="残忍拒绝"]'],
        },
      ],
    },
  ],
});
