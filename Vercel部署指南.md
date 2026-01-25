# Vercel 部署指南 - 策高室内装饰设计

## 🎯 部署目标

将您的网站部署到 Vercel（免费），并绑定您的阿里云域名。

**预计时间：** 15-20 分钟
**总成本：** ¥0（服务器免费）

---

## 📋 准备工作清单

在开始之前，请确保您有以下信息：

- [ ] 阿里云域名（已备案）
- [ ] 阿里云账号密码
- [ ] GitHub账号或邮箱账号
- [ ] 网站代码已准备好（已完成 ✅）

---

## 🚀 第一步：注册 Vercel 账号

### 操作步骤：

#### 1. 访问 Vercel
打开浏览器，访问：https://vercel.com/signup

#### 2. 选择注册方式

Vercel 支持多种注册方式：

**方式 A：使用 GitHub 注册（推荐）**
```
1. 点击 "Continue with GitHub"
2. 登录您的 GitHub 账号
3. 授权 Vercel 访问权限
```

**方式 B：使用邮箱注册**
```
1. 点击 "Continue with Email"
2. 输入您的邮箱
3. 设置密码
4. 验证邮箱
```

#### 3. 完成注册
- 填写姓名
- 选择用途（个人/公司）
- 点击 "Continue"

---

## 📦 第二步：创建 GitHub 仓库（如果需要）

如果您还没有将代码推送到 GitHub，需要先创建仓库。

### 操作步骤：

#### 1. 登录 GitHub
访问：https://github.com/login

#### 2. 创建新仓库
```
1. 点击右上角 "+" 图标
2. 选择 "New repository"
3. 填写仓库信息：
   - Repository name: cegao-design
   - Description: 策高室内装饰设计官网
   - 选择 "Public"
4. 点击 "Create repository"
```

#### 3. 上传代码（如果在服务器上）

**方法 A：使用命令行上传**
```bash
# 在服务器上执行
cd /workspace/projects
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/cegao-design.git
git push -u origin main
```

**方法 B：直接在 GitHub 上传**
```
1. 在新仓库页面
2. 点击 "uploading an existing file"
3. 拖拽项目文件
4. 点击 "Commit changes"
```

---

## 🎯 第三步：部署到 Vercel

### 操作步骤：

#### 1. 登录 Vercel
访问：https://vercel.com/login

#### 2. 创建新项目
```
1. 登录后，点击 "Add New" 按钮
2. 选择 "Project"
```

#### 3. 导入项目

**如果使用 GitHub：**
```
1. 在 "Import Git Repository" 部分
2. 找到您的仓库（cegao-design）
3. 点击 "Import" 按钮
```

**如果没有 GitHub：**
```
1. 点击 "Import Project"
2. 选择 "Deploy via CLI"
3. 按照提示操作
```

#### 4. 配置项目

在配置页面，您需要填写：

**Project Name:**
```
cegao-design
```

**Framework Preset:**
```
Next.js (自动检测)
```

**Build and Output Settings:**
```
Build Command: pnpm build
Output Directory: .next
Install Command: pnpm install
```

**Environment Variables:**
```
如果需要，可以添加环境变量
（当前项目不需要）
```

#### 5. 部署
```
1. 点击 "Deploy" 按钮
2. 等待部署完成（通常 2-5 分钟）
3. 部署成功后，您会看到：
   ✅ Congrats! Your deployment is live!
```

#### 6. 记录访问地址

部署成功后，Vercel 会提供一个临时地址：
```
https://cegao-design.vercel.app
```

**点击这个地址，确认网站能正常访问！**

---

## 🔗 第四步：绑定您的阿里云域名

现在开始绑定您的域名！

### 操作步骤：

#### 1. 在 Vercel 添加域名

```
1. 在 Vercel 项目页面
2. 点击 "Settings" 标签
3. 点击左侧 "Domains"
4. 在 "Add a domain" 输入框中
5. 输入您的域名（例如：cegao-design.com）
6. 点击 "Add"
```

#### 2. 获取 DNS 记录

Vercel 会显示需要配置的 DNS 记录：

**类型 A 记录：**
```
Name: @
Value: 76.76.21.21
TTL: 600
```

**类型 CNAME 记录：**
```
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

**复制这些信息，我们会在阿里云配置！**

#### 3. 登录阿里云 DNS 控制台

```
1. 访问：https://dns.console.aliyun.com/
2. 使用阿里云账号登录
```

#### 4. 找到您的域名

```
1. 在左侧点击 "域名解析"
2. 找到您的域名
3. 点击 "解析设置"
```

#### 5. 添加 DNS 记录

**添加 A 记录：**
```
1. 点击 "添加记录"
2. 记录类型：A
3. 主机记录：@
4. 记录值：76.76.21.21
5. TTL：600
6. 点击 "确认"
```

**添加 CNAME 记录：**
```
1. 再次点击 "添加记录"
2. 记录类型：CNAME
3. 主机记录：www
4. 记录值：cname.vercel-dns.com
5. TTL：600
6. 点击 "确认"
```

#### 6. 等待生效

```
1. 返回 Vercel 页面
2. 点击 "Verify" 按钮
3. 等待 DNS 生效（通常 5-30 分钟）
```

#### 7. 确认域名绑定

```
1. 当域名显示为 "Valid Configuration"
2. 说明绑定成功！
3. 您的域名现在可以访问了
```

---

## ✅ 第五步：测试访问

### 测试步骤：

#### 1. 测试域名访问
```
在浏览器输入您的域名
例如：https://cegao-design.com
```

#### 2. 检查 HTTPS
```
确认浏览器地址栏显示：
🔒 https:// 您的域名
（锁形图标，表示安全）
```

#### 3. 测试功能
```
1. 浏览网站各个板块
2. 测试响应式布局（调整浏览器窗口大小）
3. 测试移动端（如果可以）
```

---

## 🎉 部署完成！

### 成功标志：

- [x] 网站可以通过域名访问
- [x] HTTPS 自动配置
- [x] 全球 CDN 加速
- [x] 自动部署
- [x] 完全免费

---

## 🔧 后续管理

### 如何更新网站？

#### 方法 A：通过 GitHub 更新（推荐）
```
1. 修改代码
2. 推送到 GitHub
3. Vercel 自动部署
```

#### 方法 B：通过 Vercel 控制台
```
1. 登录 Vercel
2. 进入项目
3. 点击 "Deployments"
4. 点击 "Redeploy"
```

### 查看访问统计

```
1. 登录 Vercel
2. 进入项目
3. 点击 "Analytics"
4. 查看访问数据
```

---

## 📊 Vercel 免费额度

### 免费套餐包含：

| 项目 | 额度 | 说明 |
|------|------|------|
| 带宽 | 100GB/月 | 足够企业官网 |
| 构建时间 | 6000分钟/月 | 足够频繁更新 |
| 无限部署 | ✅ | 随时可以部署 |
| 全球 CDN | ✅ | 全球加速 |
| HTTPS | ✅ | 自动配置 |
| 自定义域名 | ✅ | 无限域名 |

### 什么时候需要付费？

```
月流量超过 100GB
构建时间超过 6000 分钟
需要更多高级功能

（您的企业官网远低于这个限制！）
```

---

## ❓ 常见问题

### Q1: 部署失败怎么办？

**检查项：**
1. 代码是否推送到 GitHub
2. package.json 是否正确
3. 构建命令是否正确
4. 查看 Vercel 日志

**解决方法：**
```
查看 Vercel 的构建日志
找到错误信息
修复问题后重新部署
```

---

### Q2: 域名绑定失败？

**可能原因：**
1. DNS 记录配置错误
2. DNS 还未生效
3. 域名未备案

**解决方法：**
```
1. 检查阿里云 DNS 配置
2. 等待 24 小时（最长）
3. 确认域名已备案
```

---

### Q3: 网站打不开？

**排查步骤：**
```
1. 检查 Vercel 部署状态
2. 检查域名 DNS 配置
3. 检查防火墙设置
4. 使用其他浏览器测试
```

---

### Q4: 如何配置 404 页面？

Next.js 会自动处理 404 页面，无需额外配置。

---

### Q5: 如何设置重定向？

在 `next.config.ts` 中配置：
```typescript
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

---

## 📞 需要帮助？

### 如果遇到问题：

1. **查看 Vercel 日志**
   - 在项目页面
   - 点击 "Deployments"
   - 查看具体错误

2. **告诉我具体问题**
   - 在这个对话框中描述问题
   - 附上错误信息
   - 我会帮您解决

---

## 🎯 总结

### 完成后的效果：

✅ 网站：https://您的域名.com
✅ HTTPS：自动配置
✅ CDN：全球加速
✅ 部署：自动部署
✅ 成本：¥0（服务器免费）

---

## 📝 快速参考卡

### 重要地址：

```
Vercel: https://vercel.com
您的项目: https://vercel.com/您的用户名/cegao-design
临时访问: https://cegao-design.vercel.app
您的域名: https://您的域名.com
```

### 常用操作：

```
部署项目: Vercel → Add New → Project
添加域名: Settings → Domains → Add domain
查看日志: Deployments → 点击部署 → Logs
重新部署: Deployments → Redeploy
```

---

**现在开始部署吧！按照步骤操作，15分钟后您的网站就能访问了！** 🚀

**有任何问题随时告诉我！** 😊
