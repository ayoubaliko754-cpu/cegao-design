import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
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
    '烟台策高装饰设计有限公司专注于烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计等专业室内设计服务。我们拥有经验丰富的设计团队，秉承"设计创造价值"的理念，为每一个项目注入独特的艺术灵魂。',
  keywords: [
    '烟台策高装饰设计',
    '烟台装饰设计',
    '烟台室内设计',
    '烟台办公楼装修装饰设计',
    '烟台餐厅装修装饰设计',
    '烟台洗浴装修装饰设计',
    '烟台家装别墅住宅装饰装修设计',
    '烟台酒店装饰装修设计',
    '烟台会所装饰装修设计',
    '烟台娱乐KTV装饰装修设计',
    '烟台办公室装修',
    '烟台商业空间设计',
    '烟台软装搭配',
    '烟台别墅设计',
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
      '烟台策高装饰设计有限公司专注于烟台办公楼装修装饰设计、烟台餐厅装修装饰设计、烟台洗浴装修装饰设计、烟台家装别墅住宅装饰装修设计、烟台酒店装饰装修设计、烟台会所装饰装修设计、烟台娱乐KTV装饰装修设计等专业室内设计服务',
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
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
