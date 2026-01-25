# 策高室内装饰设计官网

> 现代化的企业官网，专注于高端室内设计与空间美学

![策高室内装饰设计](https://img.shields.io/badge/策高-室内设计-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8)

## ✨ 特性

- 🎨 **现代化设计** - 简洁优雅的视觉风格，设计感强烈
- 📱 **响应式布局** - 完美适配桌面、平板和移动设备
- ⚡ **高性能** - 基于 Next.js 16，支持服务端渲染和静态生成
- 🎯 **易于维护** - 内容集中管理，更新简单快速
- 🌙 **深色模式** - 支持浅色和深色主题切换
- 📦 **模块化组件** - 基于 shadcn/ui 组件库
- 🔍 **SEO 优化** - 完善的元数据配置，利于搜索引擎收录

## 📋 页面结构

### 首页包含以下板块：

1. **Hero 区域** - 醒目的主视觉展示
2. **企业介绍** - 公司简介、团队介绍和核心数据
3. **项目案例** - 精选设计作品展示（支持卡片式布局）
4. **新闻动态** - 最新资讯和行业洞察
5. **联系方式** - 公司地址、电话、邮箱等信息
6. **页脚** - 快速链接和社交媒体信息

## 🚀 快速开始

### 环境要求

- Node.js 18+ (推荐 24)
- pnpm 包管理器

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
coze dev
```

访问 http://localhost:5000 查看网站

### 构建生产版本

```bash
coze build
```

### 启动生产服务器

```bash
coze start
```

## 📁 项目结构

```
策高室内装饰设计/
├── public/                    # 静态资源目录
│   └── images/               # 图片资源
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局（SEO配置）
│   │   └── page.tsx         # 首页组件
│   ├── components/
│   │   └── ui/              # shadcn/ui 组件库
│   ├── data/
│   │   └── site-content.ts  # 网站内容配置（核心文件）
│   ├── hooks/
│   │   └── use-mobile.ts    # 移动端检测钩子
│   └── lib/
│       └── utils.ts         # 工具函数
├── .coze                    # Coze CLI 配置
├── .cozeproj/               # Coze 项目脚本
├── 使用说明.md              # 详细使用文档
├── README.md                # 项目说明
└── package.json             # 项目依赖
```

## 🎨 自定义内容

### 更新网站内容

所有网站内容都在 `src/data/site-content.ts` 文件中集中管理：

```typescript
export const siteConfig = {
  companyName: '策高室内装饰设计',
  slogan: '设计·创造·品质生活',
  // ... 其他配置
}
```

只需修改此文件，无需编写代码即可更新网站内容。

详细说明请参阅 [使用说明.md](./使用说明.md)

### 自定义主题颜色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  --primary: oklch(0.45 0.12 250);      /* 主色调 */
  --background: oklch(0.99 0.005 95);   /* 背景色 */
  /* ... */
}
```

### 添加图片

1. 将图片放入 `public/images/` 目录
2. 在 `site-content.ts` 中配置图片路径

## 🎯 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.1 | React 框架 |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.9.3 | 类型系统 |
| Tailwind CSS | 4.1.18 | 样式框架 |
| shadcn/ui | 3.7.0 | UI 组件库 |
| Lucide React | 0.468.0 | 图标库 |

## 📱 响应式设计

网站采用移动优先的响应式设计策略：

- **移动端** (< 768px): 单列布局，汉堡菜单
- **平板端** (768px - 1023px): 双列布局
- **桌面端** (≥ 1024px): 多列布局，完整导航

## 🔧 开发工具

项目已集成以下开发工具：

- **ESLint** - 代码质量检查
- **TypeScript** - 类型检查
- **Coze CLI** - 项目管理和部署
- **React Dev Inspector** - 开发调试工具

## 📝 更新日志

### v1.0.0 (2024-01-25)

- ✨ 初始版本发布
- 🎨 实现现代化首页设计
- 📱 完善响应式布局
- 🎯 集成 shadcn/ui 组件库
- 📦 配置内容管理系统
- 🔍 SEO 优化

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目仅供策高室内装饰设计公司内部使用。

## 📞 联系我们

- **公司**: 策高室内装饰设计有限公司
- **地址**: 浙江省杭州市西湖区文三路398号
- **电话**: 400-888-8888
- **邮箱**: contact@cegao-design.com

---

**策高室内装饰设计 © 2024** | 设计·创造·品质生活
