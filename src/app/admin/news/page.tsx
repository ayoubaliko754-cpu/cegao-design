'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-content';
import { Plus, Edit2, Trash2, ArrowLeft, Save, ExternalLink, Calendar, Clock, FileText, Upload, Shield, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import SEOSubmitTool from '@/components/admin/SEOSubmitTool';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
  content?: string;
  externalLink?: string;
  readTime?: string;
}

export default function NewsAdminPage() {
  const { isAuthenticated, isLoading, logout } = useAuth();

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState<Partial<NewsItem>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    summary: '',
    image: '',
    content: '',
    externalLink: '',
    readTime: '3分钟阅读',
  });

  // 从 localStorage 加载新闻数据
  useEffect(() => {
    const savedNews = localStorage.getItem('cegao_news');
    if (savedNews) {
      setNewsList(JSON.parse(savedNews));
    } else {
      // 如果没有保存的数据，使用初始数据
      setNewsList(siteConfig.news.items);
    }
  }, []);

  // 保存到 localStorage
  const saveToLocalStorage = (data: NewsItem[]) => {
    localStorage.setItem('cegao_news', JSON.stringify(data));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      // 编辑现有新闻
      const updatedList = newsList.map(item =>
        item.id === editingItem.id
          ? { ...item, ...formData }
          : item
      );
      setNewsList(updatedList);
      saveToLocalStorage(updatedList);
      setEditingItem(null);
    } else {
      // 添加新新闻
      const newItem: NewsItem = {
        id: Date.now(),
        title: formData.title!,
        date: formData.date!,
        category: formData.category!,
        summary: formData.summary!,
        image: formData.image || '/images/news-placeholder.jpg',
        content: formData.content,
        externalLink: formData.externalLink,
        readTime: formData.readTime || '3分钟阅读',
      };
      const updatedList = [...newsList, newItem];
      setNewsList(updatedList);
      saveToLocalStorage(updatedList);
    }

    resetForm();
    setShowForm(false);
  };

  // 编辑新闻
  const handleEdit = (item: NewsItem) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  // 删除新闻
  const handleDelete = (id: number) => {
    if (confirm('确定要删除这条新闻吗？')) {
      const updatedList = newsList.filter(item => item.id !== id);
      setNewsList(updatedList);
      saveToLocalStorage(updatedList);
    }
  };

  // 重置表单
  const resetForm = () => {
    setFormData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      category: '',
      summary: '',
      image: '',
      content: '',
      externalLink: '',
      readTime: '3分钟阅读',
    });
    setEditingItem(null);
  };

  // 取消编辑
  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  // 导出为配置文件格式
  const handleExport = () => {
    const exportData = newsList.map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      category: item.category,
      summary: item.summary,
      image: item.image,
      ...(item.externalLink && { externalLink: item.externalLink }),
      ...(item.content && { content: item.content }),
      readTime: item.readTime || '3分钟阅读',
    }));

    const code = `  news: {
    title: '新闻动态',
    subtitle: '最新资讯，行业洞察',
    items: ${JSON.stringify(exportData, null, 6)}
  },`;

    navigator.clipboard.writeText(code);
    alert('配置已复制到剪贴板！\n\n请粘贴到 src/data/site-content.ts 文件的 news 部分');
  };

  // 恢复默认数据
  const handleReset = () => {
    if (confirm('确定要恢复默认新闻数据吗？这将覆盖当前所有修改。')) {
      setNewsList(siteConfig.news.items);
      saveToLocalStorage(siteConfig.news.items);
    }
  };

  // 检查登录状态
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-muted-foreground animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">正在验证身份...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // 重定向到登录页
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回管理后台
              </Link>
              <span className="text-sm text-muted-foreground">|</span>
              <h1 className="text-lg font-semibold text-foreground">新闻管理</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
              >
                恢复默认
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
              >
                <Save className="mr-2 h-4 w-4" />
                导出配置
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="text-muted-foreground hover:text-red-500"
              >
                <LogOut className="mr-2 h-4 w-4" />
                退出登录
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 操作栏 */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">新闻列表</h2>
              <p className="text-sm text-muted-foreground">
                共 {newsList.length} 条新闻
              </p>
            </div>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              添加新闻
            </Button>
          </div>

          {/* 新闻列表 */}
          {showForm ? (
            /* 添加/编辑表单 */
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {editingItem ? '编辑新闻' : '添加新闻'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 标题 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    新闻标题 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="请输入新闻标题"
                    required
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    建议包含关键词，如：烟台办公楼装修设计
                  </p>
                </div>

                {/* 日期和分类 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      发布日期 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      分类 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">选择分类</option>
                      <option value="行业洞察">行业洞察</option>
                      <option value="公司新闻">公司新闻</option>
                      <option value="项目展示">项目展示</option>
                      <option value="知识科普">知识科普</option>
                    </select>
                  </div>
                </div>

                {/* 摘要 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    新闻摘要 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                    placeholder="请输入新闻摘要（50-150字）"
                    required
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    摘要将在新闻列表中显示，建议50-150字
                  </p>
                </div>

                {/* 封面图片 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    封面图片 URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="例如：/images/news1.jpg"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    留空将使用默认图片。建议尺寸：800×600px
                  </p>
                </div>

                {/* 阅读时长 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    阅读时长
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="例如：3分钟阅读"
                  />
                </div>

                {/* 外部链接 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    外部链接
                  </label>
                  <input
                    type="text"
                    value={formData.externalLink}
                    onChange={(e) => setFormData({ ...formData, externalLink: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com/news"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    如果有详细内容在外部网站，请填写链接
                  </p>
                </div>

                {/* 详细内容（可选） */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    详细内容（可选）
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[200px]"
                    placeholder="请输入新闻详细内容，支持纯文本或 Markdown"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    如果填写了详细内容，将优先显示；否则显示外部链接
                  </p>
                </div>

                {/* 按钮组 */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button type="submit" className="flex-1">
                    {editingItem ? '更新新闻' : '添加新闻'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="flex-1"
                  >
                    取消
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* 新闻列表 */
            <div className="grid gap-4">
              {newsList.length === 0 ? (
                <div className="text-center py-16">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-4">暂无新闻</p>
                  <Button onClick={() => setShowForm(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    添加第一条新闻
                  </Button>
                </div>
              ) : (
                newsList.map((item) => (
                  <div
                    key={item.id}
                    className="bg-muted/30 rounded-xl p-6 border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </div>
                          {item.readTime && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {item.readTime}
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {item.summary}
                        </p>

                        {item.externalLink && (
                          <a
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            外部链接
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(item)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* SEO 提交工具 */}
          <div className="mt-12">
            <SEOSubmitTool />
          </div>

          {/* 使用说明 */}
          <div className="mt-12 bg-blue-50 dark:bg-blue-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-foreground mb-4">💡 使用说明</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>添加/编辑新闻</strong>：点击"添加新闻"或新闻卡片上的编辑按钮</li>
              <li>• <strong>删除新闻</strong>：点击新闻卡片上的删除按钮</li>
              <li>• <strong>导出配置</strong>：点击"导出配置"按钮，复制配置代码到 <code>src/data/site-content.ts</code></li>
              <li>• <strong>恢复默认</strong>：点击"恢复默认"按钮，恢复到初始新闻数据</li>
              <li>• <strong>数据存储</strong>：新闻数据保存在浏览器 localStorage 中</li>
              <li>• <strong>建议频率</strong>：每周更新 1-2 篇新闻，有利于 SEO 优化</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
