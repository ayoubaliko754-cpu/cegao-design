'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Globe, CheckCircle2, XCircle } from 'lucide-react';

interface SubmitResult {
  engine: string;
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * SEO URL 提交工具
 *
 * 允许管理员手动提交 URL 到搜索引擎
 */
export default function SEOSubmitTool() {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SubmitResult[]>([]);

  /**
   * 提交 URL
   */
  const handleSubmit = async () => {
    if (!url.trim()) {
      toast({
        variant: 'destructive',
        title: '请输入 URL',
        description: '请输入要提交的网站 URL',
      });
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch('/api/submit-to-bing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();

      if (result.success) {
        setResults([
          {
            engine: 'Bing',
            success: true,
            message: result.message,
          },
        ]);

        toast({
          title: '提交成功',
          description: result.message,
        });
      } else {
        setResults([
          {
            engine: 'Bing',
            success: false,
            error: result.error,
          },
        ]);

        toast({
          variant: 'destructive',
          title: '提交失败',
          description: result.error,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : '未知错误';

      setResults([
        {
          engine: 'Bing',
          success: false,
          error: errorMessage,
        },
      ]);

      toast({
        variant: 'destructive',
        title: '提交失败',
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * 提交所有重要页面
   */
  const handleSubmitAll = async () => {
    setLoading(true);
    setResults([]);

    const urls = [
      'https://www.ytcegao.com/',
      'https://www.ytcegao.com/about',
      'https://www.ytcegao.com/services',
      'https://www.ytcegao.com/projects',
      'https://www.ytcegao.com/news',
      'https://www.ytcegao.com/contact',
      'https://www.ytcegao.com/join',
    ];

    try {
      const response = await fetch('/api/submit-to-bing', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls }),
      });

      const result = await response.json();

      if (result.success) {
        setResults([
          {
            engine: 'Bing',
            success: true,
            message: result.message,
          },
        ]);

        toast({
          title: '批量提交成功',
          description: result.message,
        });
      } else {
        setResults([
          {
            engine: 'Bing',
            success: false,
            error: result.error,
          },
        ]);

        toast({
          variant: 'destructive',
          title: '批量提交失败',
          description: result.error,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : '未知错误';

      setResults([
        {
          engine: 'Bing',
          success: false,
          error: errorMessage,
        },
      ]);

      toast({
        variant: 'destructive',
        title: '批量提交失败',
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">搜索引擎 URL 提交工具</h2>
        <p className="text-muted-foreground">
          将您的 URL 自动提交到 Bing 搜索引擎，加快收录速度
        </p>
      </div>

      {/* 单个 URL 提交 */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            提交单个 URL
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="https://www.ytcegao.com/news/1"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            <Button
              onClick={handleSubmit}
              disabled={loading || !url.trim()}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  提交中...
                </>
              ) : (
                <>
                  <Globe className="mr-2 h-4 w-4" />
                  提交
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* 批量提交 */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            批量提交所有重要页面
          </label>
          <Button
            variant="outline"
            onClick={handleSubmitAll}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                批量提交中...
              </>
            ) : (
              <>
                <Globe className="mr-2 h-4 w-4" />
                提交所有页面（7 个）
              </>
            )}
          </Button>
        </div>
      </div>

      {/* 提交结果 */}
      {results.length > 0 && (
        <div className="space-y-3 pt-4 border-t">
          <h3 className="font-semibold">提交结果</h3>
          {results.map((result, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg ${
                result.success
                  ? 'bg-green-50 dark:bg-green-950'
                  : 'bg-red-50 dark:bg-red-950'
              }`}
            >
              {result.success ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
              )}
              <div className="flex-1">
                <div className="font-medium">{result.engine}</div>
                <div className="text-sm mt-1">
                  {result.success ? (
                    <span className="text-green-600 dark:text-green-400">
                      {result.message}
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">
                      {result.error}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 使用说明 */}
      <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
        <p>
          <strong>提示：</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            发布新新闻或项目后，建议手动提交相应 URL 以加快收录
          </li>
          <li>
            每天最多可提交 10000 个 URL，一般情况足够使用
          </li>
          <li>
            Bing 通常在 1-3 天内开始抓取已提交的 URL
          </li>
          <li>
            提交后，可以在{' '}
            <a
              href="https://www.bing.com/webmasters/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Bing Webmaster Tools
            </a>{' '}
            查看提交状态
          </li>
        </ul>
      </div>
    </Card>
  );
}
