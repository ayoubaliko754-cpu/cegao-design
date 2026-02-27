import { NextResponse } from 'next/server';

/**
 * Bing URL Submission API
 * 自动将 URL 提交到 Bing 搜索引擎
 *
 * API 文档: https://www.bing.com/webmasters/help/url-submission-api
 *
 * 使用方法:
 * POST /api/submit-to-bing
 * Body: { url: string }
 */
export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    // 验证 URL
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { success: false, error: '请提供有效的 URL' },
        { status: 400 }
      );
    }

    // 验证 URL 格式
    const urlPattern = /^https?:\/\/(www\.)?ytcegao\.com\/.*/;
    if (!urlPattern.test(url)) {
      return NextResponse.json(
        { success: false, error: 'URL 格式不正确，必须是 ytcegao.com 域名' },
        { status: 400 }
      );
    }

    // 获取 Bing API Key（从环境变量读取）
    const apiKey = process.env.BING_API_KEY;

    if (!apiKey) {
      console.error('[Bing Submit] API Key 未配置');
      return NextResponse.json(
        {
          success: false,
          error: 'Bing API Key 未配置，请联系管理员',
          note: '请在 Bing Webmaster Tools 获取 API Key'
        },
        { status: 500 }
      );
    }

    // 提交到 Bing API
    const response = await fetch(
      'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=' + apiKey,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siteUrl: 'https://www.ytcegao.com',
          url: url,
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      console.log('[Bing Submit] 成功提交 URL:', url);

      return NextResponse.json({
        success: true,
        message: 'URL 已成功提交到 Bing',
        submittedUrl: url,
        response: result,
      });
    } else {
      console.error('[Bing Submit] 提交失败:', result);

      return NextResponse.json(
        {
          success: false,
          error: 'Bing API 返回错误',
          details: result,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[Bing Submit] 请求错误:', error);

    return NextResponse.json(
      {
        success: false,
        error: '服务器内部错误',
        details: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}

/**
 * 批量提交 URL 到 Bing
 */
export async function PUT(request: Request) {
  try {
    const { urls } = await request.json();

    // 验证 URLs
    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { success: false, error: '请提供有效的 URL 数组' },
        { status: 400 }
      );
    }

    // 验证每个 URL
    const urlPattern = /^https?:\/\/(www\.)?ytcegao\.com\/.*/;
    const invalidUrls = urls.filter((url) => !urlPattern.test(url));

    if (invalidUrls.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: '以下 URL 格式不正确',
          invalidUrls,
        },
        { status: 400 }
      );
    }

    // 获取 Bing API Key
    const apiKey = process.env.BING_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Bing API Key 未配置',
        },
        { status: 500 }
      );
    }

    // 逐个提交 URL
    const results = [];
    let successCount = 0;
    let failCount = 0;

    for (const url of urls) {
      try {
        const response = await fetch(
          'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=' +
            apiKey,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              siteUrl: 'https://www.ytcegao.com',
              url: url,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          successCount++;
          results.push({ url, success: true });
        } else {
          failCount++;
          results.push({ url, success: false, error: result });
        }
      } catch (error) {
        failCount++;
        results.push({
          url,
          success: false,
          error: error instanceof Error ? error.message : '未知错误',
        });
      }
    }

    console.log(
      `[Bing Submit] 批量提交完成: 成功 ${successCount} 个, 失败 ${failCount} 个`
    );

    return NextResponse.json({
      success: true,
      message: `批量提交完成: 成功 ${successCount} 个, 失败 ${failCount} 个`,
      results,
      summary: {
        total: urls.length,
        success: successCount,
        failed: failCount,
      },
    });
  } catch (error) {
    console.error('[Bing Submit] 批量提交错误:', error);

    return NextResponse.json(
      {
        success: false,
        error: '服务器内部错误',
        details: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}

/**
 * GET 方法：返回 API 信息
 */
export async function GET() {
  return NextResponse.json({
    name: 'Bing URL Submission API',
    version: '1.0.0',
    endpoints: {
      'POST /api/submit-to-bing': '提交单个 URL',
      'PUT /api/submit-to-bing': '批量提交 URL',
    },
    usage: {
      post: {
        method: 'POST',
        body: { url: 'https://www.ytcegao.com/news/1' },
      },
      put: {
        method: 'PUT',
        body: { urls: ['https://www.ytcegao.com/news/1', 'https://www.ytcegao.com/news/2'] },
      },
    },
  });
}
