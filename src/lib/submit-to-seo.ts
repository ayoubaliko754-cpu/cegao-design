/**
 * 搜索引擎自动提交工具
 *
 * 用于在发布新内容时自动提交到各大搜索引擎
 */

export interface SubmitResult {
  engine: string;
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * 提交单个 URL 到搜索引擎
 */
export async function submitUrlToSEOs(
  url: string
): Promise<SubmitResult[]> {
  const results: SubmitResult[] = [];

  // 提交到 Bing
  try {
    const bingResult = await submitToBing(url);
    results.push(bingResult);
  } catch (error) {
    results.push({
      engine: 'Bing',
      success: false,
      error: error instanceof Error ? error.message : '未知错误',
    });
  }

  // 可以继续添加其他搜索引擎（百度、Google 等）
  // 注意：百度 API 需要申请，Google 可以使用 Indexing API

  return results;
}

/**
 * 提交到 Bing
 */
async function submitToBing(url: string): Promise<SubmitResult> {
  try {
    const response = await fetch('/api/submit-to-bing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        engine: 'Bing',
        success: true,
        message: 'URL 已成功提交到 Bing',
      };
    } else {
      return {
        engine: 'Bing',
        success: false,
        error: result.error || '提交失败',
      };
    }
  } catch (error) {
    return {
      engine: 'Bing',
      success: false,
      error: error instanceof Error ? error.message : '网络错误',
    };
  }
}

/**
 * 批量提交 URL 到搜索引擎
 */
export async function submitUrlsToSEOs(
  urls: string[]
): Promise<SubmitResult[]> {
  const results: SubmitResult[] = [];

  // 批量提交到 Bing
  try {
    const response = await fetch('/api/submit-to-bing', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      results.push({
        engine: 'Bing',
        success: true,
        message: result.message,
      });
    } else {
      results.push({
        engine: 'Bing',
        success: false,
        error: result.error || '提交失败',
      });
    }
  } catch (error) {
    results.push({
      engine: 'Bing',
      success: false,
      error: error instanceof Error ? error.message : '网络错误',
    });
  }

  return results;
}

/**
 * 从路径生成完整 URL
 */
export function getFullUrl(path: string): string {
  return `https://www.ytcegao.com${path.startsWith('/') ? path : '/' + path}`;
}

/**
 * 提交新闻 URL
 */
export async function submitNewsUrl(newsId: number): Promise<SubmitResult[]> {
  const url = getFullUrl(`/news/${newsId}`);
  return submitUrlToSEOs(url);
}

/**
 * 提交项目 URL
 */
export async function submitProjectUrl(
  projectId: string
): Promise<SubmitResult[]> {
  const url = getFullUrl(`/projects/${projectId}`);
  return submitUrlToSEOs(url);
}

/**
 * 提交主页 URL
 */
export async function submitHomepage(): Promise<SubmitResult[]> {
  const url = getFullUrl('/');
  return submitUrlToSEOs(url);
}

/**
 * 提交所有重要页面 URL
 */
export async function submitAllImportantPages(): Promise<SubmitResult[]> {
  const urls = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/news',
    '/contact',
    '/join',
  ];

  const fullUrls = urls.map(getFullUrl);
  return submitUrlsToSEOs(fullUrls);
}
