'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Upload, Save, Trash2 } from 'lucide-react';

export default function AdminPage() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: '湖畔别墅',
      category: '住宅设计',
      description: '现代简约风格，融合自然元素，打造舒适宜居的生活空间',
      image: '/images/project1.jpg',
      area: '320㎡',
      location: '杭州',
    },
    {
      id: 2,
      title: '科技创新园',
      category: '办公空间',
      description: '开放式办公设计，提升工作效率，展现企业创新精神',
      image: '/images/project2.jpg',
      area: '2000㎡',
      location: '上海',
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    description: '',
    area: '',
    location: '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddProject = async () => {
    if (!newProject.title || !newProject.category || !newProject.description) {
      alert('请填写完整的项目信息');
      return;
    }

    setIsSaving(true);

    // 模拟添加项目（实际项目中会调用API）
    const projectWithImage = {
      ...newProject,
      id: projects.length + 1,
      image: imageFile ? `/images/${imageFile.name}` : '/images/placeholder.jpg',
    };

    setProjects([...projects, projectWithImage]);
    setNewProject({ title: '', category: '', description: '', area: '', location: '' });
    setImageFile(null);
    setIsSaving(false);

    alert('项目添加成功！\n\n注意：这是演示版本，实际使用时需要配置后端API。');
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('确定要删除这个项目吗？')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  返回首页
                </a>
              </Button>
              <h1 className="text-xl font-bold">网站管理后台</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左侧：添加新项目 */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  添加新项目案例
                </CardTitle>
                <CardDescription>
                  填写项目信息并上传图片，添加新的案例展示
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">项目名称 *</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="例如：湖畔别墅"
                    value={newProject.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="category">项目分类 *</Label>
                  <Input
                    id="category"
                    name="category"
                    placeholder="例如：住宅设计、办公空间、商业空间"
                    value={newProject.category}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="description">项目描述 *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="详细描述这个项目的特色和亮点..."
                    rows={4}
                    value={newProject.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="area">项目面积</Label>
                    <Input
                      id="area"
                      name="area"
                      placeholder="例如：320㎡"
                      value={newProject.area}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">项目位置</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="例如：杭州"
                      value={newProject.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">项目图片</Label>
                  <div className="mt-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />
                    {imageFile && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        已选择: {imageFile.name}
                      </p>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    建议尺寸：800x600px，支持 JPG、PNG 格式
                  </p>
                </div>

                <Button
                  onClick={handleAddProject}
                  disabled={isSaving}
                  className="w-full"
                  size="lg"
                >
                  <Save className="mr-2 h-5 w-5" />
                  {isSaving ? '保存中...' : '添加项目'}
                </Button>
              </CardContent>
            </Card>

            {/* 使用说明 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>💡 使用说明</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. 填写项目信息（带 * 号为必填项）</p>
                <p>2. 上传项目图片（建议800x600px）</p>
                <p>3. 点击"添加项目"按钮</p>
                <p>4. 项目会立即显示在首页案例区</p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="font-semibold text-primary">注意：</p>
                  <p>当前为演示版本，实际使用时需要配置后端API来保存图片和数据。</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧：项目列表 */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>现有项目列表</CardTitle>
                <CardDescription>
                  当前共有 {projects.length} 个项目案例
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span>{project.area}</span>
                            <span>📍 {project.location}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
