import { defineConfig } from 'vitepress';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

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
          title: '文章'
        },
      ], 
      useFrontmatter: true,
      collapsible: true, 
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
      message: '<a href="https://spcnwikia.top/">🥚</a>',
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
    plugins: [
      // 插件：自动更新 index.md
      {
        name: 'update-index-features',

        // 监听开发模式下的文件更新
        handleHotUpdate({ file }) {
          if (file.endsWith('.md') && file.includes('/collection/')) {
            updateFeatures();
          }
        },

        // 构建结束时自动更新 index.md
        buildEnd() {
          updateFeatures();
        }
      }
    ]
  }
});

// 使用 import.meta.url 获取当前目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 自动抓取 /collection 下的 frontmatter 并更新 /index.md
function updateFeatures() {
  const collectionDir = path.join(__dirname, '../collection');
  const indexFilePath = path.join(__dirname, '../index.md');

  const files = fs.readdirSync(collectionDir).filter(file => file.endsWith('.md'));

  const features = files.map(file => {
    const filePath = path.join(collectionDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data['origin-title'] || data['title'],
      link: `/collection/${file.replace('.md', '')}`,
      icon: {
        src: data.icon || ''
      }
    };
  });

  // 读取并更新 index.md
  let indexContent = fs.readFileSync(indexFilePath, 'utf-8');
  const indexMatter = matter(indexContent);
  indexMatter.data.features = features;

  const newIndexContent = matter.stringify(indexMatter.content, indexMatter.data);
  fs.writeFileSync(indexFilePath, newIndexContent, 'utf-8');

  console.log('index.md 更新完成！');
}
