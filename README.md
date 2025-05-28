# 🎮 PixelForge - 游戏资讯社区
(https://pixel-forge-ruddy.vercel.app/)

**基于react开发的游戏资讯社区平台**，支持用户注册、发帖、点赞和实时互动。基于现代前端技术栈构建，注重性能与用户体验。

## ✨ 功能特性

- **用户系统**  
  ✅ 邮箱/GitHub 第三方登录（Supabase Auth）  
  ✅ 个人信息编辑与头像上传（Supabase Storage）  
- **内容互动**  
  ✅ 帖子发布、列表渲染与分类查看  
  ✅ 实时点赞/取消点赞（Supabase Realtime）  
  ✅ 评论功能（关联数据库外键）  
- **性能优化**  
  ⚡ Vite 构建 + 代码分割  
  ⚡ 图片懒加载 + 骨架屏占位  

## 🛠️ 技术栈

| 领域          | 技术选型                                                                 |
|---------------|--------------------------------------------------------------------------|
| **前端框架**  | React 18 + TypeScript + Vite                                             |
| **状态管理**  | Redux Toolkit（异步Thunk + Slice）                                       |
| **UI 组件库** | Shadcn/ui（基于 Radix UI + TailwindCSS）                                 |
| **后端服务**  | Supabase（PostgreSQL 数据库、Auth 鉴权、Storage 存储、Realtime 订阅）    |
