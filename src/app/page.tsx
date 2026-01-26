'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-content';
import { ArrowRight, Calendar, MapPin, Phone, Mail, Clock, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 平滑滚动
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-600">
                {siteConfig.companyName}
              </h1>
            </div>

            {/* 桌面导航 */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {siteConfig.navMenu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {siteConfig.navMenu.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-[50%] -left-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-600 mb-6 tracking-tight">
            {siteConfig.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {siteConfig.hero.subtitle}
          </p>
          <p className="text-lg text-primary font-semibold mb-12">
            {siteConfig.slogan}
          </p>
          <Button
            size="lg"
            className="h-14 px-8 text-base rounded-full font-semibold"
            onClick={() => scrollToSection('about')}
          >
            {siteConfig.hero.ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90" />
        </div>
      </section>

      {/* 企业介绍 */}
      <section id="about" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* 文字内容 */}
            <div className="space-y-6">
              {siteConfig.about.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 gap-6">
              {siteConfig.about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 项目案例 */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {siteConfig.projects.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {siteConfig.projects.subtitle}
            </p>
          </div>

          {/* 项目网格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.projects.items.map((project, index) => (
              <div
                key={project.id}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* 项目图片占位 */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <div className="text-6xl font-bold text-primary/30 mb-2">{project.id}</div>
                    <div className="text-sm text-muted-foreground/60">项目图片</div>
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full">
              查看更多案例
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 新闻动态 */}
      <section id="news" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {siteConfig.news.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {siteConfig.news.subtitle}
            </p>
          </div>

          {/* 新闻列表 */}
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.news.items.map((news, index) => (
              <div
                key={news.id}
                className="group bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {news.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {news.summary}
                </p>

                <div className="flex items-center text-sm text-primary font-medium">
                  阅读更多
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {siteConfig.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              {siteConfig.contact.subtitle}
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.contact.description}
            </p>
          </div>

          {/* 联系信息 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">公司地址</h4>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.info.address}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">联系电话</h4>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.info.phone}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">电子邮箱</h4>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.info.email}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">工作时间</h4>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.info.workingHours}
              </p>
            </div>
          </div>

          {/* CTA 按钮 */}
          <div className="text-center">
            <Button size="lg" className="h-14 px-10 text-base rounded-full font-semibold">
              立即联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 公司信息 */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {siteConfig.companyName}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {siteConfig.tagline}
              </p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.slogan}
              </p>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                快速链接
              </h4>
              <ul className="space-y-2">
                {siteConfig.footer.quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 社交媒体 */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                关注我们
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>微信：{siteConfig.contact.social.wechat}</div>
                <div>微博：{siteConfig.contact.social.weibo}</div>
                <div>抖音：{siteConfig.contact.social.douyin}</div>
              </div>
              {/* 管理后台入口 */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <a
                  href="/admin"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  🔧 管理后台
                </a>
              </div>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-muted-foreground">
            <p>{siteConfig.footer.copyright}</p>
            <p className="mt-2">{siteConfig.footer.icp}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
