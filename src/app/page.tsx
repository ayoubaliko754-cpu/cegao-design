'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-content';
import { ArrowRight, Calendar, MapPin, Phone, Mail, Clock, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsItems, setNewsItems] = useState(siteConfig.news.items);

  // 滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 从 localStorage 加载新闻数据
  useEffect(() => {
    const savedNews = localStorage.getItem('cegao_news');
    if (savedNews) {
      try {
        const parsed = JSON.parse(savedNews);
        setNewsItems(parsed);
      } catch (e) {
        console.error('Failed to parse news from localStorage:', e);
      }
    }
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
      {/* 导航栏 - 宽度与内容区域完全一致 */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 w-full ${
          scrolled ? 'bg-background shadow-lg' : 'bg-background shadow-sm'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 桌面端导航 */}
          <div className="hidden md:flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black font-brand text-[#3A5C79] tracking-[0.25em]" style={{ fontFamily: 'Microsoft YaHei, 微软雅黑, Arial, sans-serif' }}>
                {siteConfig.companyName}
              </h1>
            </div>

            {/* 桌面导航 */}
            <div>
              <div className="flex items-center space-x-4 mr-16">
                {siteConfig.navMenu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="text-base font-medium text-foreground transition-colors hover:text-primary px-3 py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 手机端导航 - 宽度与内容区域完全一致 */}
          <div className="md:hidden w-full min-h-[110px] flex flex-col justify-center">
            {/* Logo */}
            <div className="flex justify-center py-3">
              <h1 className="text-base font-black font-brand text-[#3A5C79] tracking-[0.12em]" style={{ fontFamily: 'Microsoft YaHei, 微软雅黑, Arial, sans-serif' }}>
                {siteConfig.companyName}
              </h1>
            </div>

            {/* 手机端导航菜单 */}
            <div className="border-t pt-2 pb-3">
              <div className="flex justify-center flex-wrap gap-2">
                {siteConfig.navMenu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="text-xs font-medium text-foreground transition-colors hover:text-primary px-2.5 py-1 bg-muted/30 rounded-full hover:bg-muted/50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-[130px] md:pt-20">
        {/* 虚化背景图片 */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern Architecture Background"
            className="absolute top-0 left-0 w-full h-full object-cover grayscale brightness-125 contrast-100 opacity-50 blur-20"
          />
          {/* 白色遮罩 - 降低透明度，让背景可见 */}
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-[50%] -left-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* 隐藏的 H1 标签，用于 SEO，确保百度抓取到包含"烟台"的标题 */}
          <h1 className="sr-only">烟台策高装饰设计</h1>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black font-brand text-[#3A5C79] mb-4 md:mb-6" style={{ letterSpacing: '0.2em md:0.25em', fontFamily: 'Microsoft YaHei, 微软雅黑, Arial, sans-serif' }}>
            {siteConfig.hero.title}
          </h2>
          <p className="text-sm md:text-base lg:text-2xl text-muted-foreground mb-3 md:mb-4 max-w-5xl mx-auto font-semibold px-2" style={{ fontFamily: 'YouYuan, 幼圆, Arial, sans-serif' }}>
            {siteConfig.hero.subtitle}
          </p>
          <div className="text-sm md:text-lg font-semibold mb-8 md:mb-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-8 text-[#3A5C79]" style={{ fontFamily: 'YouYuan, 幼圆, Arial, sans-serif' }}>
            {siteConfig.hero.slogan.split(' ').map((item, index) => (
              <span key={index} className="flex items-center justify-center text-xs sm:text-sm md:text-base">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-[#3A5C79] mr-1 sm:mr-2"></span>
                {item}
              </span>
            ))}
          </div>
          <Button
            size="lg"
            className="h-10 md:h-14 px-5 md:px-8 text-xs md:text-base rounded-full font-semibold bg-gray-700 text-white hover:bg-gray-600"
            onClick={() => scrollToSection('about')}
          >
            {siteConfig.hero.ctaText}
            <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-5 md:w-5" />
          </Button>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground rotate-90" />
        </div>
      </section>

      {/* 企业介绍 - 移到服务范围前 */}
      <section id="about" className="scroll-mt-[120px] md:scroll-mt-20 py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            {/* 文字内容 */}
            <div className="space-y-6">
              {siteConfig.about.description.map((paragraph, index) => (
                <p key={index} className="text-base md:text-xl text-muted-foreground leading-relaxed font-semibold">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 服务范围 - 移到企业介绍后 */}
      <section id="services" className="scroll-mt-[120px] md:scroll-mt-20 py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              {siteConfig.services.subtitle}
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mt-4">
              {siteConfig.services.description}
            </p>
          </div>

          {/* 服务列表 - 一行三个，共三行 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-[#3A5C79] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目案例 */}
      <section id="projects" className="scroll-mt-[120px] md:scroll-mt-20 py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.projects.title}
            </h2>
          </div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.projects.items.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* 项目图片 */}
                <div className="aspect-[4/3] overflow-hidden group-hover:scale-105 transition-transform duration-500 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/project-placeholder.svg';
                    }}
                  />
                  {/* 悬停提示 - 仅在桌面显示 */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">点击查看详情</span>
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 text-center md:text-left group-hover:text-[#3A5C79] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2 text-center md:text-left">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" variant="outline" className="rounded-full">
              查看更多案例
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 新闻动态 */}
      <section id="news" className="scroll-mt-[120px] md:scroll-mt-20 py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.news.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {siteConfig.news.subtitle}
            </p>
          </div>

          {/* 新闻列表 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {newsItems.map((news, index) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="group bg-muted/30 rounded-2xl p-6 md:p-8 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground line-clamp-2 mb-4">
                  {news.summary}
                </p>

                <div className="flex items-center text-sm text-primary font-medium">
                  阅读更多
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 招贤纳士 */}
      <section id="careers" className="scroll-mt-[120px] md:scroll-mt-20 py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.careers.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {siteConfig.careers.subtitle}
            </p>
          </div>

          {/* 简介描述 */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {siteConfig.careers.description}
            </p>
          </div>

          {/* 公司福利 */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">我们的福利</h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {siteConfig.careers.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 md:p-6 border border-border hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-[#3A5C79] mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3A5C79]/10 flex items-center justify-center mx-auto">
                      <span className="text-xl md:text-2xl">✓</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 职位列表 */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">热招职位</h3>
            <div className="space-y-6">
              {siteConfig.careers.positions.map((position) => (
                <div
                  key={position.id}
                  className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-0 text-center md:text-left">
                      {position.title}
                    </h4>
                    <Button className="md:w-auto w-full">
                      投递简历
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-[#3A5C79]/10 flex items-center justify-center">
                        <span className="text-xs">部门</span>
                      </div>
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-[#3A5C79]/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-[#3A5C79]/10 flex items-center justify-center">
                        <span className="text-xs">经验</span>
                      </div>
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-[#3A5C79]/10 flex items-center justify-center">
                        <span className="text-xs">学历</span>
                      </div>
                      <span>{position.education}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-2">职位描述</h5>
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">任职要求</h5>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-[#3A5C79] mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">有意者请将简历发送至</h3>
            <p className="text-2xl font-bold text-primary mb-4">
              {siteConfig.careers.email}
            </p>
            <p className="text-muted-foreground">我们会在收到简历后尽快与您联系</p>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="scroll-mt-[120px] md:scroll-mt-20 py-16 md:py-24 bg-gradient-to-br from-[#3A5C79]/5 to-[#3A5C79]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3A5C79] mb-4">
              {siteConfig.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {siteConfig.contact.subtitle}
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.contact.description}
            </p>
          </div>

          {/* 联系信息 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-background rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3A5C79]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#3A5C79]" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">公司地址</h4>
              <p className="text-sm md:text-base font-bold text-foreground/80">
                {siteConfig.contact.info.address}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3A5C79]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-[#3A5C79]" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">联系电话</h4>
              <p className="text-sm md:text-base font-bold text-foreground/80">
                {siteConfig.contact.info.phone}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3A5C79]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#3A5C79]" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">电子邮箱</h4>
              <p className="text-sm md:text-base font-bold text-foreground/80">
                {siteConfig.contact.info.email}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3A5C79]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#3A5C79]" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">工作时间</h4>
              <p className="text-sm md:text-base font-bold text-foreground/80">
                {siteConfig.contact.info.workingHours}
              </p>
            </div>
          </div>

          {/* CTA 按钮 */}
          <div className="text-center">
            <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 text-sm md:text-base rounded-full font-semibold bg-[#3A5C79] text-white hover:bg-[#2d4a62]">
              立即联系我们
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
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
              <h3 className="text-2xl font-black font-brand text-foreground mb-4">
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

          {/* SEO服务链接 - 搜索引擎可见但样式简洁 */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-4">服务范围</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台办公楼装修装饰设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台餐厅装修装饰设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台洗浴装修装饰设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台家装别墅住宅装饰装修设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台酒店装饰装修设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台会所装饰装修设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台娱乐KTV装饰装修设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台公共建筑装饰装修设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台医疗康养装饰装修设计
              </button>
            </div>
          </div>

          {/* 室内设计链接 - 搜索引擎可见 */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-4">室内设计</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台办公楼室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台餐厅室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台洗浴室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台别墅室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台酒店室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台会所室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台KTV室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台公共建筑室内设计
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                烟台医院室内设计
              </button>
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
