'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Lock, Shield, LogIn } from 'lucide-react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 管理员密码
  const ADMIN_PASSWORD = 'solo514135';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 模拟验证延迟
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // 设置登录状态到 localStorage
        localStorage.setItem('cegao_admin_login', 'true');
        localStorage.setItem('cegao_admin_login_time', Date.now().toString());
        // 跳转到管理首页
        window.location.href = '/admin';
      } else {
        setError('密码错误，请重试');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo 和标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            管理后台登录
          </h1>
          <p className="text-sm text-muted-foreground">
            请输入密码以访问管理后台
          </p>
        </div>

        {/* 登录卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              身份验证
            </CardTitle>
            <CardDescription>
              为了安全起见，请输入管理员密码
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">管理员密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="mt-1.5"
                  autoFocus
                />
              </div>

              {error && (
                <div className="text-sm text-red-500 bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading || !password}
              >
                {loading ? (
                  '验证中...'
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    登录
                  </>
                )}
              </Button>
            </form>

            {/* 安全提示 */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-muted-foreground mb-2">
                🔒 安全提示：
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 请妥善保管管理员密码</li>
                <li>• 不要在公共场所输入密码</li>
                <li>• 定期更换密码以提高安全性</li>
                <li>• 登录会话有效期为 24 小时</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 底部说明 */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          烟台策高装饰设计有限公司 · 管理系统
        </p>
      </div>
    </div>
  );
}
