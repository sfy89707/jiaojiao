---
title: '从零搭建我的博客（叫叫站）'
description: '记录这次从 0 到上线 GitHub Pages 的完整过程与踩坑点。'
pubDate: 'Jul 08 2022'
heroImage: '../../assets/blog-placeholder-3.jpg'
tags: ['随笔','建站']
---

这篇文章先作为占位（后续我会持续补全细节）。

## 我想做一个什么样的博客？

- **好看但不花哨**：卡片式排版、阅读舒服。
- **发布简单**：写 Markdown 就能发。
- **长期可维护**：结构清晰，功能按需加。

## 技术选型（当前）

- 静态站：Astro
- 托管：GitHub Pages
- 部署：GitHub Actions 自动构建发布

## 踩坑记录

- GitHub Pages 的项目页路径是 `/仓库名/`，所以站点要配置 `base`。
- 资源路径（favicon、字体等）也要跟着 `base` 走。

后面我会把“怎么写文章 / 怎么置顶 / 怎么改主题”也写成教程。
