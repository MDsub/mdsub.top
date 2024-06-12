import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🐻 MDsub",
  description: "漫迪字幕组 | We ♥️ Cartoons",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '微博', link: 'https://weibo.com/u/2355632031' }
    ],
    sidebar: {
      '/blog': [
          {
            text: '文章',
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
          }
      ]
    },
  },
  rewrites: {
    'collection/:page.md': ':page/index.md'
  },
})