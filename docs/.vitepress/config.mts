import { defineConfig } from 'vitepress'
export default defineConfig({

  // 元信息
  title: "漫迪小站 | mdsub.top",
  description: "漫迪字幕组 | We ♥️ Cartoons",

  // 主题配置
  themeConfig: {
    
    // 页面配置
    logo: 'android-chrome-512x512.png',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👁️ 微博', link: 'https://weibo.com/u/2355632031' }
    ],
    editLink: {
      pattern: 'https://github.com/mdsub/mdsub.top/edit/main/docs/:path',
      text: '在 Github 上编辑此页面'
    },
    footer: {
      message: '<a href="https://spcnwikia.top/">🥚</a>',
    },

    // 启用搜索与中文化
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              }
            }
          }
        }
      }
    },

    // 中文化
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 侧边栏
    sidebar: [
      { 
        text: '资源',
        collapsed: true,
        items: [
          { text: 'Lastman', link:'/Lastman'},
          { text: 'Urbance', link:'/Urbance'},
          { text: '深空69', link:'/深空69'},
          { text: '乡下人', link:'/乡下人'},
          { text: '机器鸡', link:'/机器鸡'},
          { text: '梦滨城', link:'/梦滨城'},
          { text: '钉子镇', link:'/钉子镇'},
          { text: '一家之主', link:'/一家之主'},
          { text: '东方大学', link:'/东方大学'},
          { text: '俗世乐土', link:'/俗世乐土'},
          { text: '克隆高校', link:'/克隆高校'},
          { text: '冒险兄弟', link:'/冒险兄弟'},
          { text: '卡通乱炖', link:'/卡通乱炖'},
          { text: '囧男窘事', link:'/囧男窘事'},
          { text: '地狱归来', link:'/地狱归来'},
          { text: '微笑朋友', link:'/微笑朋友'},
          { text: '恶搞之家', link:'/恶搞之家'},
          { text: '斧子警察', link:'/斧子警察'},
          { text: '火星特快', link:'/火星特快'},
          { text: '玛瑙春分', link:'/玛瑙春分'},
          { text: '美国老爹', link:'/美国老爹'},
          { text: '脆莓公园', link:'/脆莓公园'},
          { text: '荣格危机', link:'/荣格危机'},
          { text: '超级监狱', link:'/超级监狱'},
          { text: '边城小镇', link:'/边城小镇'},
          { text: '野生动物', link:'/野生动物'},
          { text: '间谍亚契', link:'/间谍亚契'},
          { text: '鸟人律师', link:'/鸟人律师'},
          { text: '克里夫兰秀', link:'/克里夫兰秀'},
          { text: '十岁的汤姆', link:'/十岁的汤姆'},
          { text: '卡通一箩筐', link:'/卡通一箩筐'},
          { text: '宠宝话疗团', link:'/宠宝话疗团'},
          { text: '少年安乐死', link:'/少年安乐死'},
          { text: '拽妹黛薇儿', link:'/拽妹黛薇儿'},
          { text: '拾荒者统治', link:'/拾荒者统治'},
          { text: '教会男孩儿', link:'/教会男孩儿'},
          { text: '米神山大道', link:'/米神山大道'},
          { text: '飞出个未来', link:'/飞出个未来'},
          { text: '大人物拿破仑', link:'/大人物拿破仑'},
          { text: '杰夫与外星人', link:'/杰夫与外星人'},
          { text: '蜂妹与狗狗猫', link:'/蜂妹与狗狗猫'},
          { text: '饮料杯历险记', link:'/饮料杯历险记'},
          { text: '到了火星被劝退', link:'/到了火星被劝退'},
          { text: '福是全家福的福', link:'/福是全家福的福'},
          { text: '银翼杀手：黑莲花', link:'/银翼杀手：黑莲花'},
          { text: '鱿鱼仔的乡土生活', link:'/鱿鱼仔的乡土生活'},
          { text: '鸟姐妹的反差生活', link:'/鸟姐妹的反差生活'},
          { text: '卢卡斯兄弟搬家公司', link:'/卢卡斯兄弟搬家公司'},
        ],
      },
      { 
        text: '文章',
        collapsed: true,
        items: [
          { text: '乡下人 第一季译后语', link:'/blog/乡下人 第一季译后语'},
          { text: '乡下人 第一季开更通知', link:'/blog/乡下人 第一季开更通知'},
          { text: '鸟姐妹S3 译后语', link:'/blog/鸟姐妹S3 译后语'},
          { text: '鸟姐妹S3开更通知', link:'/blog/鸟姐妹S3开更通知'},
          { text: '克隆高校 第二季译后语', link:'/blog/克隆高校 第二季译后语'},
          { text: '微笑朋友 第一季译后语', link:'/blog/微笑朋友 第一季译后语'},
          { text: '克隆高校 第二季开更通知', link:'/blog/克隆高校 第二季开更通知'},
          { text: '间谍亚契 第十二季译后语', link:'/blog/间谍亚契 第十二季译后语'},
          { text: '恶搞之家 第二十季开更通知', link:'/blog/恶搞之家 第二十季开更通知'},
          { text: '间谍亚契 第十二季开更通知', link:'/blog/间谍亚契 第十二季开更通知'},
          { text: '间谍亚契 第一季重译开更通知', link:'/blog/间谍亚契 第一季重译开更通知'},
          { text: '十岁的汤姆 第一季译后语', link:'/blog/十岁的汤姆 第一季译后语'},
          { text: '少年安乐死 第一季译后语', link:'/blog/少年安乐死 第一季译后语'},
          { text: '十岁的汤姆 第一季开更通知', link:'/blog/十岁的汤姆 第一季开更通知'},
          { text: '少年安乐死 第一季开更通知', link:'/blog/少年安乐死 第一季开更通知'},
          { text: '教会男孩儿 第二季开更通知', link:'/blog/教会男孩儿 第二季开更通知'},
          { text: '到了火星被劝退 第一季开更通知', link:'/blog/到了火星被劝退 第一季开更通知'},
          { text: '鸟姐妹的反差生活 第二季译后语', link:'/blog/鸟姐妹的反差生活 第二季译后语'},
          { text: '鱿鱼仔的乡土生活 第十三季译后语', link:'/blog/鱿鱼仔的乡土生活 第十三季译后语'},
          { text: '鱿鱼仔的乡土生活 第十二季译后语', link:'/blog/鱿鱼仔的乡土生活 第十二季译后语'},
          { text: '鱿鱼仔的乡土生活 第十三季开更通知', link:'/blog/鱿鱼仔的乡土生活 第十三季开更通知'},
          { text: '关于「漫迪字幕组」组织调整的说明', link:'/blog/关于「漫迪字幕组」组织调整的说明'},
          { text: '分享「微笑朋友」里几个译名的翻译', link:'/blog/分享「微笑朋友」里几个译名的翻译'},
          { text: '关于退出《银翼杀手：黑莲花》译制的说明', link:'/blog/关于退出《银翼杀手：黑莲花》译制的说明'},
        ]
       },
       { text: '📺 在线MDpan', link:'https://pan.mdsub.top'},
       { text: '🧰 字幕教程和工具', link:'https://tutorial.mdsub.top/'},
       { text: '👁️ 微博@漫迪MDsub', link:'https://weibo.com/u/2355632031'},
    ],
  },

  // 重定向 去除链接中的*/collection以保证旧微博链接可用
  rewrites: {
    'collection/:page.md': ':page.md'
  },

  // sitemap
  sitemap: {
    hostname: 'https://mdsub.top'
  },

  // 简洁链接
  cleanUrls: true,
})