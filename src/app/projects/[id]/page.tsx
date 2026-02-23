'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-content';
import { ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const [project, setProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    // 根据 ID 查找项目
    const projectId = parseInt(params.id);
    const foundProject = siteConfig.projects.items.find((p) => p.id === projectId);
    setProject(foundProject);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">项目未找到</p>
      </div>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 返回按钮 */}
      <div className="fixed top-4 left-4 z-40">
        <Link href="/#projects">
          <Button variant="outline" size="sm" className="rounded-full bg-background/80 backdrop-blur">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回案例列表
          </Button>
        </Link>
      </div>

      {/* 项目标题 */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3A5C79] mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5" />
                <span>{project.area}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 图片展示 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 主图 */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              className="w-full aspect-[16/9] object-cover cursor-pointer"
              onClick={() => openLightbox(currentImageIndex)}
            />
            {/* 导航按钮 */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            {/* 图片计数 */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>

          {/* 缩略图网格 */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-[16/9] rounded-xl overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? 'ring-4 ring-[#3A5C79] scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 返回按钮 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#projects">
            <Button size="lg" variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-5 w-5" />
              返回案例列表
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              className="w-full max-h-[90vh] object-contain"
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur transition-all"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur transition-all"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
