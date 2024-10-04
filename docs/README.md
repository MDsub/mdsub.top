# 文件路径
1. 页面.md文件 `/docs/collection/页面名称.md`
2. 首页logo `/docs/public/assets/icon/文件名`
3. 页面头图 `/docs/public/assets/image/文件名`
4. 首页 `/docs/index.md`


# 编辑预览
已配置自动运行Vitepress预览，不需要再输入运行命令

点击预览链接 http://localhost:5173 (复制到浏览器粘贴无效)

# Markdown基础语法
## 标题

``` md
# 一个井号是一级标题
## 两个井号是二级标题
```
## 图片
![图片描述文本](/docs/public/assets/icon/飞出个未来.webp)
``` md
![图片描述文本 可留空](图片路径 例如/image/lastman.webp)
```
## 链接
[🐻MDsub](http://localhost:5173)
``` md
[显示文本](http://跳转链接/)
```
## 容器（Vitepress专有）
![alt text](/docs/public/assets/image/容器.png)
``` md
info / tip / warning / danger 对应四种灰蓝黄红四种颜色
details是折叠容器

::: info
This is an info box.
:::
```
## 徽标（Vitepress专有）
![alt text](/docs/public/assets/image/徽标.png)
``` md
info / tip / warning / danger 对应四种灰蓝黄红四种颜色
<Badge type="warning" text="漫迪MDsub" />
```