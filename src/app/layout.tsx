import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '策高室内装饰设计 | 专注室内设计与空间美学',
    template: '%s | 策高室内装饰设计',
  },
  description:
    '烟台策高装饰设计有限公司是一家专注于高端室内设计、商业空间设计及软装搭配的专业设计机构。我们拥有经验丰富的设计团队，秉承"设计创造价值"的理念，为每一个项目注入独特的艺术灵魂。',
  keywords: [
    '烟台策高装饰设计',
    '烟台装饰设计',
    '烟台室内设计',
    '策高装饰设计',
    '室内设计',
    '空间设计',
    '商业空间设计',
    '软装搭配',
    '别墅设计',
    '办公室设计',
    '酒店设计',
    '展厅设计',
    '家居设计',
  ],
  authors: [{ name: '烟台策高装饰设计团队' }],
  generator: '烟台策高装饰设计',
  openGraph: {
    title: '策高室内装饰设计 | 专注室内设计与空间美学',
    description:
      '专注于高端室内设计与空间美学，为您打造独具匠心的品质空间',
    siteName: '策高室内装饰设计',
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
