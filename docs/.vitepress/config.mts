import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🐻 MDsub",
  description: "漫迪字幕组 | We ♥️ Cartoons",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '微博', link: 'https://weibo.com' }
    ],
  },
  rewrites: {
    'collection/:page.md': ':page/index.md'
  }
})