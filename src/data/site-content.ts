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
    { name: '招贤纳士', href: '#careers' },
    { name: '联系我们', href: '#contact' },
  ],

  // Hero 区域
  hero: {
    title: '策高設計',
    subtitle: '专注于高端室内设计与空间美学，为您打造独具匠心的品质空间',
    slogan: '办公空间 商业空间 公共空间 家居别墅 娱乐会所',
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
        title: '界面新闻 - 深度报道',
        date: '2026-02-08',
        category: '行业洞察',
        summary: '了解更多行业动态和设计趋势，请访问我们的官方网站查看详细报道：https://www.jiemian.com/article/13933968.html',
        image: '/images/news1.jpg',
      },
      {
        id: 2,
        title: '新浪财经 - 市场分析',
        date: '2026-02-08',
        category: '行业洞察',
        summary: '查看最新的市场分析和行业资讯，请访问：https://k.sina.com.cn/article_1986249493_m7663c31503301gu3q.html',
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

  // 招贤纳士
  careers: {
    title: '招贤纳士',
    subtitle: '加入我们，共筑梦想',
    description: '策高设计正在寻找有才华、有激情的设计师加入我们的团队。我们提供有竞争力的薪酬福利和广阔的发展空间。',
    benefits: [
      '具有竞争力的薪酬待遇',
      '完善的社保公积金体系',
      '丰富的培训和学习机会',
      '舒适的办公环境和团队氛围',
      '国内外设计项目参与机会',
      '年度旅游和团队建设活动',
    ],
    positions: [
      {
        id: 1,
        title: '资深室内设计师',
        department: '设计部',
        location: '烟台',
        experience: '5年以上',
        education: '本科及以上',
        description: '负责高端住宅和商业空间的室内设计工作，带领设计团队完成项目。',
        requirements: [
          '室内设计、建筑学或相关专业本科及以上学历',
          '5年以上高端室内设计经验',
          '精通AutoCAD、Photoshop、SketchUp等设计软件',
          '具备优秀的创意能力和设计表现力',
          '有团队管理经验者优先',
        ],
      },
      {
        id: 2,
        title: '软装设计师',
        department: '软装部',
        location: '烟台',
        experience: '3年以上',
        education: '大专及以上',
        description: '负责项目软装方案设计、选材和搭配，提升空间整体效果。',
        requirements: [
          '室内设计、艺术设计相关专业',
          '3年以上软装设计经验',
          '熟悉各类软装材料和品牌',
          '具备良好的色彩搭配和空间感',
          '有高端项目经验者优先',
        ],
      },
      {
        id: 3,
        title: '设计助理',
        department: '设计部',
        location: '烟台',
        experience: '应届生',
        education: '本科及以上',
        description: '协助设计师完成方案设计、效果图制作和施工现场跟进。',
        requirements: [
          '室内设计、建筑学相关专业应届毕业生',
          '熟练掌握设计软件基本操作',
          '学习能力强，积极主动',
          '对设计有热情和追求',
          '有实习经验者优先',
        ],
      },
    ],
    email: 'hr@cegao-design.com',
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
