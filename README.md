# Luminous Website

Luminous 的官网前端项目，基于 Vue 3 + Vite 构建。

在线访问：

- https://devluo.com/luminous/

## 项目简介

该项目用于展示 Luminous 智慧用药助手的核心价值、功能全景、使用场景、隐私政策与下载信息。

核心特性：

- Vue 3 + Vue Router 多页面路由体验
- GSAP 与 Lenis 驱动的动效与滚动体验
- Three.js / TresJS 视觉场景能力（在低端设备自动降级）
- Tailwind CSS 4 样式能力与自定义设计令牌

## 技术栈

- Vue 3
- Vite
- Vue Router
- Tailwind CSS 4
- GSAP
- Lenis
- Three.js
- @tresjs/core

## 环境要求

- Node.js >= 18
- npm >= 9

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

- http://localhost:5173

## 环境变量

项目提供示例文件 [`.env.example`](.env.example)：

- `VITE_API_BASE_URL=http://localhost:3030`：本地联调后端地址
- `VITE_PUBLIC_BASE=/luminous_site/`：前端基础路径（用于路由与静态资源）

如需使用，请复制为 `.env` 后按实际环境修改。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。

## 部署说明（GitHub Pages）

当前 Vite 基础路径配置在 [`vite.config.js`](vite.config.js) 中：

- 默认基础路径是 `/luminous_site/`
- 可通过环境变量 `VITE_PUBLIC_BASE` 覆盖

推荐配置：

- GitHub Pages（仓库名 luminous_site）：`VITE_PUBLIC_BASE=/luminous_site/`
- 你的服务器地址 https://devluo.com/luminous/：`VITE_PUBLIC_BASE=/luminous/`

## 开源协议

本项目采用 [MIT License](LICENSE)。
