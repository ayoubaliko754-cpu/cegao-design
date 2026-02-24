'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/data/site-content';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = parseInt(params.id as string);

  // 根据ID查找新闻
  const newsItem = siteConfig.news.items.find(item => item.id === newsId);

  // 如果找不到新闻，显示错误页面
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">新闻未找到</h1>
          <p className="text-lg text-muted-foreground mb-8">抱歉，您查找的新闻不存在。</p>
          <Link
            href="/#news"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回新闻列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航栏 */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <Link
              href="/#news"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回新闻列表
            </Link>
          </div>
        </div>
      </nav>

      {/* 新闻详情 */}
      <article className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 新闻头部 */}
          <header className="mb-12">
            {/* 分类标签 */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {newsItem.category}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {newsItem.title}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{newsItem.date}</span>
              </div>
              {newsItem.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{newsItem.readTime}</span>
                </div>
              )}
            </div>

            {/* 摘要 */}
            {newsItem.summary && (
              <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {newsItem.summary}
                </p>
              </div>
            )}
          </header>

          {/* 新闻内容 */}
          <div className="prose prose-lg max-w-none">
            {'content' in newsItem && newsItem.content ? (
              <div className="space-y-6 text-foreground leading-relaxed">
                {String(newsItem.content)}
              </div>
            ) : (
              <div className="bg-muted/30 rounded-2xl p-8 text-center border border-border">
                <p className="text-muted-foreground mb-4">
                  详细内容正在更新中...
                </p>
                {'externalLink' in newsItem && newsItem.externalLink && (
                  <a
                    href={newsItem.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    查看原文
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* 相关新闻 */}
          {siteConfig.news.items.length > 1 && (
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">相关新闻</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {siteConfig.news.items
                  .filter(item => item.id !== newsItem.id)
                  .slice(0, 4)
                  .map(item => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg border border-border"
                    >
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.summary}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
