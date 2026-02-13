---
title: '叫叫站搭建记录：Astro + GitHub Pages 一次搞定'
description: '从项目结构、base 路径、Actions 部署，到常见 404 问题排查的完整流程。'
pubDate: 'Feb 13 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
tags: ['建站','技术','Astro']
---

这篇记录「叫叫站」从 0 到上线的全过程。目标很简单：**写 Markdown 就能发布**，并且长期维护成本低。

## 目标与约束

- **免费**：先用 GitHub Pages
- **快**：尽量静态化、首屏加载快
- **好维护**：不想折腾服务器，不想每天修依赖

## 技术选型

- **Astro**：静态站点生成 + 内容集合（Content Collections）非常适合写博客
- **GitHub Actions**：自动构建，把产物发布到 Pages

## 关键配置：GitHub Pages 的 base 路径

如果你用的是 GitHub Pages 的「项目页」，域名通常是：

```
https://<username>.github.io/<repo>/
```

这意味着站点不是部署在根路径 `/`，而是部署在 `/<repo>/`。

所以 Astro 必须配置：

- `site: https://<username>.github.io`
- `base: /<repo>`

否则常见问题就是：

- **页面能打开但跳转 404**
- favicon / 字体 / sitemap 路径错

## 部署：GitHub Actions 工作流

基本流程：

1. checkout 代码
2. 安装依赖
3. `npm run build` 输出到 `dist/`
4. 上传 artifact
5. `actions/deploy-pages` 发布

如果你没有 `package-lock.json`，那就别用 `npm ci`（会直接失败）。

## 我怎么排查 404？

一个快速判断方法：

- 打开首页，点任意导航
- 如果 URL 里没带上 `/repo/`，基本就是 base 没处理好

此外要注意：

- 任何硬编码的 `href="/xxx"` 都会跳到根路径
- 用 `import.meta.env.BASE_URL` 拼出来最稳

## 下一步

- 首页增加「右侧栏」：搜索、标签、归档、最近更新
- 文章系统完善：置顶、标签过滤
- 头像与主题统一（叫叫猫必须要在首页）

如果你也要搭一个类似的博客，直接照着这个思路走就行。
