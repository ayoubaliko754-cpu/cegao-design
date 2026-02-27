import type { Metadata } from 'next';
import './globals.css';

// Polyfill for toSorted() method
if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function(compareFn) {
    return [...this].sort(compareFn);
  };
}

export const metadata: Metadata = {
  title: {
    default: '烟台策高装饰设计 | 烟台高端室内设计与空间美学',
    template: '%s | 烟台策高装饰设计',
  },
  description:
    '烟台策高装饰设计有限公司专注于烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计、烟台公共建筑装饰装修设计、烟台医疗康养装饰装修设计、烟台办公楼室内设计、烟台餐厅室内设计等专业室内设计服务。我们拥有经验丰富的设计团队，秉承"设计创造价值"的理念，为每一个项目注入独特的艺术灵魂。',
  keywords: [
    '烟台策高装饰设计',
    '烟台装饰设计',
    '烟台室内设计',
    '烟台办公楼装修装饰设计',
    '烟台办公楼室内设计',
    '烟台办公室装修',
    '烟台写字楼装修',
    '烟台办公楼设计',
    '烟台餐厅装修装饰设计',
    '烟台餐厅室内设计',
    '烟台餐饮空间设计',
    '烟台饭店装修',
    '烟台餐厅设计',
    '烟台洗浴装修装饰设计',
    '烟台洗浴室内设计',
    '烟台洗浴中心设计',
    '烟台桑拿装修',
    '烟台洗浴设计',
    '烟台家装别墅住宅装饰装修设计',
    '烟台别墅室内设计',
    '烟台家装设计',
    '烟台住宅装修',
    '烟台别墅设计',
    '烟台酒店装饰装修设计',
    '烟台酒店室内设计',
    '烟台宾馆装修',
    '烟台精品酒店设计',
    '烟台酒店设计',
    '烟台会所装饰装修设计',
    '烟台会所室内设计',
    '烟台私人会所设计',
    '烟台商务会所设计',
    '烟台会所设计',
    '烟台娱乐KTV装饰装修设计',
    '烟台KTV室内设计',
    '烟台KTV设计',
    '烟台夜总会设计',
    '烟台娱乐场所装修',
    '烟台公共建筑装饰装修设计',
    '烟台公共建筑室内设计',
    '烟台市政空间设计',
    '烟台文化场馆设计',
    '烟台公共空间设计',
    '烟台医疗康养装饰装修设计',
    '烟台医院室内设计',
    '烟台康养中心设计',
    '烟台养老院设计',
    '烟台医疗空间设计',
    '烟台商业空间设计',
    '烟台软装搭配',
    '烟台展厅设计',
    '策高装饰设计',
    '室内设计',
    '空间设计',
    '商业空间设计',
  ],
  authors: [{ name: '烟台策高装饰设计团队' }],
  generator: '烟台策高装饰设计',
  openGraph: {
    title: '烟台策高装饰设计 | 烟台高端室内设计与空间美学',
    description:
      '烟台策高装饰设计有限公司专注于烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计、烟台公共建筑装饰装修设计、烟台医疗康养装饰装修设计等专业室内设计服务',
    siteName: '烟台策高装饰设计',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 结构化数据 - 组织信息
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "烟台策高装饰设计有限公司",
    "url": "https://www.ytcegao.com",
    "logo": "https://www.ytcegao.com/logo.png",
    "description": "烟台策高装饰设计有限公司专注于烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计、烟台公共建筑装饰装修设计、烟台医疗康养装饰装修设计、烟台办公楼室内设计、烟台餐厅室内设计等专业室内设计服务",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "烟台",
      "addressRegion": "山东省",
      "addressCountry": "CN",
      "streetAddress": "烟台市莱山区港城东大街1172号"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-13884666525",
      "email": "design@ytcegao.com",
      "contactType": "customer service"
    }
  };

  // 结构化数据 - 服务列表
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "烟台策高装饰设计服务范围",
    "description": "专业提供烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计、烟台公共建筑装饰装修设计、烟台医疗康养装饰装修设计、烟台办公楼室内设计、烟台餐厅室内设计等服务",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "烟台办公楼装修装饰设计",
        "description": "为企业打造现代化、专业化的办公空间，提升企业形象和工作效率。提供烟台办公楼室内设计、办公室装修设计、写字楼设计服务"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "烟台餐厅装修装饰设计",
        "description": "打造独特的餐饮空间，营造舒适用餐环境，提升顾客体验。提供烟台餐厅室内设计、餐饮空间设计、饭店装修服务"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "烟台洗浴装修装饰设计",
        "description": "专业的洗浴空间设计，注重功能分区与隐私保护。提供烟台洗浴室内设计、洗浴中心设计、桑拿装修服务"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "烟台家装别墅住宅装饰装修设计",
        "description": "高端住宅定制设计，打造温馨舒适的居家环境。提供烟台别墅室内设计、家装设计、住宅装修服务"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "烟台酒店装饰装修设计",
        "description": "精品酒店设计，营造独特的入住体验，提升酒店竞争力。提供烟台酒店室内设计、宾馆装修、精品酒店设计服务"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "烟台会所装饰装修设计",
        "description": "高端会所设计，打造私密、尊贵、独特的社交空间。提供烟台会所室内设计、私人会所设计、商务会所设计服务"
      },
      {
        "@type": "Service",
        "position": 7,
        "name": "烟台娱乐KTV装饰装修设计",
        "description": "时尚KTV空间设计，营造娱乐氛围，提升顾客体验。提供烟台KTV室内设计、夜总会设计、娱乐场所装修服务"
      },
      {
        "@type": "Service",
        "position": 8,
        "name": "烟台公共建筑装饰装修设计",
        "description": "专业的公共空间设计，涵盖文化场馆、交通枢纽、教育机构等公共建筑，注重功能性与人文关怀。提供烟台公共建筑室内设计、市政空间设计、文化场馆设计服务"
      },
      {
        "@type": "Service",
        "position": 9,
        "name": "烟台医疗康养装饰装修设计",
        "description": "专业的医疗康养空间设计，营造舒适、安全、人性化的就医环境。提供烟台医院室内设计、康养中心设计、养老院设计、医疗空间设计服务"
      }
    ]
  };

  return (
    <html lang="zh-CN">
      <head>
        {/* 百度站点验证 */}
        <meta name="baidu-site-verification" content="codeva-CoXOovlf9x" />
        {/* Google 站点验证 */}
        <meta name="google-site-verification" content="62cLheBf29cp5c7JviIHNs6nByWCWDLCcWrFnmy1z_Y" />
        {/* 搜狗站点验证 */}
        <meta name="sogou_site_verification" content="OuC88QZwsI" />
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`antialiased`}>
        {/* 隐藏的SEO关键词 - 搜索引擎可见但用户不可见 */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>烟台策高装饰设计 烟台办公楼装修装饰设计 烟台办公楼室内设计 烟台餐厅装修装饰设计 烟台餐厅室内设计 烟台洗浴装修装饰设计 烟台洗浴室内设计 烟台家装别墅住宅装饰装修设计 烟台别墅室内设计 烟台酒店装饰装修设计 烟台酒店室内设计 烟台会所装饰装修设计 烟台会所室内设计 烟台娱乐KTV装饰装修设计 烟台KTV室内设计 烟台公共建筑装饰装修设计 烟台公共建筑室内设计 烟台医疗康养装饰装修设计 烟台医院室内设计</h1>
          <h2>烟台办公室装修 烟台写字楼装修 烟台办公楼设计 烟台餐饮空间设计 烟台饭店装修 烟台餐厅设计 烟台洗浴中心设计 烟台桑拿装修 烟台洗浴设计 烟台别墅设计 烟台家装设计 烟台住宅装修 烟台宾馆装修 烟台精品酒店设计 烟台酒店设计 烟台私人会所设计 烟台商务会所设计 烟台会所设计 烟台KTV设计 烟台夜总会设计 烟台娱乐场所装修 烟台市政空间设计 烟台文化场馆设计 烟台公共空间设计 烟台康养中心设计 烟台养老院设计 烟台医疗空间设计 烟台商业空间设计 烟台软装搭配 烟台展厅设计</h2>
        </div>

        {children}
      </body>
    </html>
  );
}
