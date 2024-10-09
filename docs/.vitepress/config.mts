import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
export default defineConfig({

  // 元信息
  title: "漫迪小站 | mdsub.top",
  description: "漫迪字幕组 | We ♥️ Cartoons",
  
  // 主题配置
  themeConfig: {
    
    // 自动侧边栏
    sidebar: getSidebar({ 
      contentRoot: '/', 
      contentDirs: [
        {
          path: 'collection',
          title: '漫迪和朋友们的作品'
        },
        { 
          path: 'blog',
          title: '文章'
        },
      ], 
      useFrontmatter: true,
      collapsible: true, 
      collapsed: true }),

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
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
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

    // disable docfooter
    docFooter: {
      prev: false,
      next: false
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

  // end of theme config
  },

  // sitemap
  sitemap: {
    hostname: 'https://mdsub.top'
  },

  // 简洁链接
  cleanUrls: true,
})
