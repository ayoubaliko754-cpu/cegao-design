import { NextResponse } from 'next/server';
import { SearchClient, Config } from 'coze-coding-dev-sdk';

/**
 * 关键词竞争分析 API
 *
 * 搜索指定的关键词，返回前 10 个搜索结果
 */
export async function POST(request: Request) {
  try {
    const { keyword } = await request.json();

    if (!keyword || typeof keyword !== 'string') {
      return NextResponse.json(
        { success: false, error: '请提供有效的关键词' },
        { status: 400 }
      );
    }

    // 初始化搜索客户端
    const config = new Config();
    const client = new SearchClient(config);

    // 执行搜索
    const response = await client.webSearch(keyword, 10, false);

    // 提取关键信息
    const results = response.web_items?.map((item) => ({
      title: item.title,
      url: item.url,
      siteName: item.site_name,
      snippet: item.snippet?.substring(0, 200),
      authorityLevel: item.auth_info_level,
      authorityDesc: item.auth_info_des,
    })) || [];

    return NextResponse.json({
      success: true,
      keyword,
      totalResults: results.length,
      results,
    });
  } catch (error) {
    console.error('[Keyword Analysis] 搜索错误:', error);

    return NextResponse.json(
      {
        success: false,
        error: '搜索失败',
        details: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}

/**
 * 批量分析多个关键词
 */
export async function PUT(request: Request) {
  try {
    const { keywords } = await request.json();

    if (!Array.isArray(keywords) || keywords.length === 0) {
      return NextResponse.json(
        { success: false, error: '请提供有效的关键词数组' },
        { status: 400 }
      );
    }

    if (keywords.length > 10) {
      return NextResponse.json(
        { success: false, error: '最多同时分析 10 个关键词' },
        { status: 400 }
      );
    }

    // 初始化搜索客户端
    const config = new Config();
    const client = new SearchClient(config);

    // 批量搜索
    const results = [];

    for (const keyword of keywords) {
      try {
        const response = await client.webSearch(keyword, 10, false);

        const keywordResults = response.web_items?.map((item) => ({
          title: item.title,
          url: item.url,
          siteName: item.site_name,
          snippet: item.snippet?.substring(0, 200),
          authorityLevel: item.auth_info_level,
        })) || [];

        results.push({
          keyword,
          success: true,
          totalResults: keywordResults.length,
          results: keywordResults,
        });

        // 避免请求过快
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        results.push({
          keyword,
          success: false,
          error: error instanceof Error ? error.message : '搜索失败',
        });
      }
    }

    return NextResponse.json({
      success: true,
      totalKeywords: keywords.length,
      results,
    });
  } catch (error) {
    console.error('[Keyword Analysis] 批量搜索错误:', error);

    return NextResponse.json(
      {
        success: false,
        error: '批量搜索失败',
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
    name: 'Keyword Analysis API',
    version: '1.0.0',
    description: '分析关键词搜索结果，获取竞争对手信息',
    endpoints: {
      'POST /api/analyze-keywords': '分析单个关键词',
      'PUT /api/analyze-keywords': '批量分析多个关键词',
    },
    usage: {
      post: {
        method: 'POST',
        body: { keyword: '烟台室内设计' },
      },
      put: {
        method: 'PUT',
        body: { keywords: ['烟台室内设计', '烟台办公楼装修', '烟台餐厅设计'] },
      },
    },
  });
}
