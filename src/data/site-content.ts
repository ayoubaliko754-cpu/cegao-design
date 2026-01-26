// 策高室内装饰设计 - 网站内容配置
// 便于后期管理和更新网站内容

export const siteConfig = {
  // 基本信息
  companyName: '烟台策高装饰设计有限公司',
  slogan: '设计·创造·品质生活',
  tagline: '专注高端室内设计与空间美学',

  // 导航菜单
  navMenu: [
    { name: '首页', href: '#home' },
    { name: '关于我们', href: '#about' },
    { name: '项目案例', href: '#projects' },
    { name: '新闻动态', href: '#news' },
    { name: '联系我们', href: '#contact' },
  ],

  // Hero 区域
  hero: {
    title: '策高設計',
    subtitle: '专注于高端室内设计与空间美学，为您打造独具匠心的品质空间',
    slogan: '专注室内设计',
    ctaText: '了解更多',
    ctaLink: '#about',
    backgroundImage: '/images/hero-bg.jpg', // 可以后期替换为真实图片
  },

  // 企业介绍
  about: {
    title: '关于我们',
    subtitle: '专业团队，匠心设计',
    description: [
      '策高室内装饰设计成立于2015年，是一家专注于高端室内设计、商业空间设计及软装搭配的专业设计机构。',
      '我们拥有经验丰富的设计团队，秉承"设计创造价值"的理念，为每一个项目注入独特的艺术灵魂，为客户提供从概念设计到最终落地的一站式解决方案。',
      '多年来，我们服务了众多知名企业和高端住宅项目，以优秀的设计作品和专业的服务赢得了客户的广泛认可。'
    ],
    stats: [
      { number: '10+', label: '年专业经验' },
      { number: '500+', label: '成功案例' },
      { number: '30+', label: '专业设计师' },
      { number: '98%', label: '客户满意度' },
    ],
    image: '/images/about-image.jpg', // 可以后期替换为真实图片
  },

  // 项目案例
  projects: {
    title: '项目案例',
    subtitle: '优秀作品，实力见证',
    items: [
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
      {
        id: 3,
        title: '艺术酒店',
        category: '商业空间',
        description: '艺术与现代的完美结合，打造独具特色的高端酒店体验',
        image: '/images/project3.jpg',
        area: '5000㎡',
        location: '北京',
      },
      {
        id: 4,
        title: '精品展厅',
        category: '展示空间',
        description: '沉浸式设计理念，完美呈现产品特色与品牌理念',
        image: '/images/project4.jpg',
        area: '800㎡',
        location: '深圳',
      },
      {
        id: 5,
        title: '私宅改造',
        category: '住宅设计',
        description: '老房焕新颜，保留原有建筑特色，注入现代设计元素',
        image: '/images/project5.jpg',
        area: '180㎡',
        location: '广州',
      },
      {
        id: 6,
        title: '品牌旗舰店',
        category: '商业空间',
        description: '品牌形象与空间设计的深度融合，提升品牌价值',
        image: '/images/project6.jpg',
        area: '600㎡',
        location: '成都',
      },
    ],
  },

  // 新闻动态
  news: {
    title: '新闻动态',
    subtitle: '最新资讯，行业洞察',
    items: [
      {
        id: 1,
        title: '策高设计荣获2024年度室内设计金奖',
        date: '2024-01-15',
        category: '公司新闻',
        summary: '在刚刚结束的2024年度室内设计大赛中，策高设计的"湖畔别墅"项目荣获住宅设计金奖。',
        image: '/images/news1.jpg',
      },
      {
        id: 2,
        title: '受邀参加国际设计周，展现中国设计力量',
        date: '2024-02-20',
        category: '活动动态',
        summary: '策高设计受邀参加2024年米兰设计周，向世界展示中国设计的独特魅力和创新理念。',
        image: '/images/news2.jpg',
      },
      {
        id: 3,
        title: '设计趋势：2024年室内设计五大流行趋势',
        date: '2024-03-10',
        category: '行业洞察',
        summary: '随着人们对生活品质要求的提升，室内设计也在不断演变。本文为您解读2024年室内设计的五大流行趋势。',
        image: '/images/news3.jpg',
      },
      {
        id: 4,
        title: '策高设计与知名地产商达成战略合作',
        date: '2024-04-05',
        category: '公司新闻',
        summary: '策高设计与国内知名房地产企业签署战略合作协议，共同打造高品质住宅项目。',
        image: '/images/news4.jpg',
      },
    ],
  },

  // 联系方式
  contact: {
    title: '联系我们',
    subtitle: '期待与您的合作',
    description: '如果您有任何设计需求或疑问，欢迎随时联系我们，我们将竭诚为您服务。',
    info: {
      address: '浙江省杭州市西湖区文三路398号',
      phone: '400-888-8888',
      email: 'contact@cegao-design.com',
      workingHours: '周一至周五 9:00-18:00',
    },
    social: {
      wechat: 'cegaodesign',
      weibo: '@策高设计',
      douyin: '策高设计',
    },
  },

  // 页脚
  footer: {
    copyright: '© 2024 策高室内装饰设计有限公司 版权所有',
    icp: '浙ICP备XXXXXXXX号',
    quickLinks: [
      { name: '关于我们', href: '#about' },
      { name: '项目案例', href: '#projects' },
      { name: '新闻动态', href: '#news' },
      { name: '联系我们', href: '#contact' },
    ],
  },
};
