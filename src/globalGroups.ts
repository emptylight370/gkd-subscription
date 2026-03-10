import { defineGkdGlobalGroups } from '@gkd-kit/define';
import {
  openAdBlackListAppIDs,
  openAdWhiteListAppIDs,
  yongBlackListAppIDs,
  yongWhiteListAppIDs,
} from './globalDefaultApps';

export default defineGkdGlobalGroups([
  {
    // https://github.com/AIsouler/GKD_subscription/blob/main/src/globalGroups.ts
    key: 1,
    name: '开屏广告-全局',
    desc: '关闭打开应用时的开屏广告',
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    forcedTime: 10000,
    priorityTime: 10000,
    disableIfAppGroupMatch: '开屏广告',
    enable: true,
    rules: [
      {
        key: 1,
        name: '默认开屏广告',
        // 防止误触
        excludeMatches:
          '([text*="搜索" || text="历史记录" || text$="在搜"][text.length>3 && text.length<7][visibleToUser=true]) || ([text="Submit" || text*="阅读并同意" || text="书签" || text="NEXT"][visibleToUser=true]) || ([text$="设置" || text$="选好了" || text^="下一步" || text^="完成" || text*="跳过片"][text.length<10][visibleToUser=true]) || ([text^="选择"][text*="偏好" || text*="兴趣" || text*="喜好"][text.length<10][visibleToUser=true])',
        anyMatches: [
          '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          '@[name$="View" || name$="LinearLayout"][clickable=true][childCount<2][width<300 && height<200] - [text="互动广告"][visibleToUser=true]',
          '[childCount=0][visibleToUser=true][width<500 && height<300][(text.length<10 && (text*="跳过" || text*="跳 过" || text*="跳過" || text~="(?is).*skip.*") && text!*="视频" && text!*="片头" && text!*="片尾") || (vid~="(?is).*skip.*" && vid!~="(?is).*video.*" && vid!~="(?is).*head.*" && vid!~="(?is).*tail.*" && !(text="帮助") && !(text="取消") && !(text*="退出")) || id$="tt_splash_skip_btn" || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]',
        ],
        snapshotUrls: [
          // 互动开屏广告
          'https://i.gkd.li/i/21617612',
          'https://i.gkd.li/i/23557410',

          // text*="跳 过"
          'https://i.gkd.li/i/13421452',

          'https://i.gkd.li/i/24097095', // width<500
          'https://i.gkd.li/i/24766641', // height<300

          // 避免被excludeMatches匹配
          'https://i.gkd.li/i/24330969',
          'https://i.gkd.li/i/24541384',
          'https://i.gkd.li/i/24588777',
        ],
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/15079224', // !(text*="退出")
          'https://i.gkd.li/i/17108010', // !(text="帮助")
          'https://i.gkd.li/i/18265000', // !(text="取消")
          'https://i.gkd.li/i/19952277', // text="Submit"
          'https://i.gkd.li/i/20946730', // text$="设置"
          'https://i.gkd.li/i/20949002', // vid!~="(?is).*video.*"
          'https://i.gkd.li/i/21617520', // text!*="视频"
          'https://i.gkd.li/i/22634992', // text$="登录" text*="阅读并同意"
          'https://i.gkd.li/i/23051921', // [text^="选择"]
          'https://i.gkd.li/i/23742770', // [text^="选择"]
          'https://i.gkd.li/i/23743049', // [text^="选择"]
          'https://i.gkd.li/i/23052289', // text="选好了"
          'https://i.gkd.li/i/23122415', // text="书签"
          'https://i.gkd.li/i/23225609', // text="NEXT"
          'https://i.gkd.li/i/23741801', // text^="下一步" text$="设置"
          'https://i.gkd.li/i/23741779', // text^="完成" text$="设置"
          'https://i.gkd.li/i/25039297', // text*="跳过片"、text!*="片头"、text!*="片尾"、vid!~="(?is).*head.*"、vid!~="(?is).*tail.*"
        ],
      },
      {
        key: 2, // 字节SDK
        name: '字节SDK',
        anyMatches: [
          '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
        ],
        snapshotUrls: [
          'https://i.gkd.li/i/19685971', // +(1,2)
          'https://i.gkd.li/i/19701216', // +(1,2)
          'https://i.gkd.li/i/20262130',
          'https://i.gkd.li/i/20768349',
          'https://i.gkd.li/i/20883248', // >(n+6)
          'https://i.gkd.li/i/23549504', // text*="扭一扭"
        ],
        apps: [...openAdBlackListAppIDs]
          .map((id) => ({ id, enable: false }))
          .concat([...openAdWhiteListAppIDs].map((id) => ({ id, enable: true }))),
      },
    ],
  },
  {
    key: 2,
    name: '青少年模式-全局',
    desc: '关闭应用的青少年模式弹窗',
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '青少年模式',
    enable: true,
    rules: [
      {
        key: 1,
        name: 'AIsouler',
        matches: [
          '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="知道了" || text*="我已知晓" || text*="已满" || text*="不再提醒"][text.length<8][childCount=0][visibleToUser=true]',
        ],
      },
      {
        key: 2,
        name: 'ganlinte',
        matches: ['TextView[text="未成年人模式" ||text*="青少年模式"]', 'TextView[text="我知道了"||text="知道了"]'],
      },
    ],
    apps: [...yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat([...yongWhiteListAppIDs].map((id) => ({ id, enable: true }))),
  },
]);
