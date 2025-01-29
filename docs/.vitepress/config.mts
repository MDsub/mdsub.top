import { defineConfig } from 'vitepress';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';
import { generateFeatures } from './generateFeatures';
import path from 'path'; // 添加 path 模块的导入

const collectionDir = path.join(__dirname, '../collection');
const featureFile = path.join(__dirname, '../features.md');

generateFeatures(collectionDir, featureFile);

export default defineConfig({
  // 元信息
  title: "漫迪小站 | mdsub.top",
  description: "漫迪字幕组 | We ♥️ Cartoons",
  
  // 主题配置
  themeConfig: {
    sidebar: getSidebar({ 
      contentRoot: '/', 
      contentDirs: [
        {
          path: 'collection',
          title: '漫迪和朋友们的作品'
        },
        { 
          path: 'blog',
          title: '漫迪文章'
        },
        { 
          path: 'tutorial',
          title: '字幕教程'
        },
      ], 
      useFrontmatter: true,
      collapsible: true, 
      ignoreIndexItem: true,
      collapsed: true 
    }),

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
      message: '<a href="https://spcnwikia.tk/">🥚</a>',
    },

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
  },

  sitemap: {
    hostname: 'https://mdsub.top'
  },

  cleanUrls: true,

  // Vite 插件配置
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-auto-sidebar'] // 允许外部模块使用
    },
  }
})