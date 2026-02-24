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
    { name: '服务范围', href: '#services' },
    { name: '项目案例', href: '#projects' },
    { name: '新闻动态', href: '#news' },
    { name: '招贤纳士', href: '#careers' },
    { name: '联系我们', href: '#contact' },
  ],

  // Hero 区域
  hero: {
    title: '策高設計',
    subtitle: '专注于高端室内设计与空间美学，打造独具匠心的品质空间',
    slogan: '办公空间 商业空间 公共空间 家居别墅 娱乐会所',
    ctaText: '了解更多',
    ctaLink: '#services',
    backgroundImage: '/images/hero-bg.jpg', // 可以后期替换为真实图片
  },

  // 企业介绍
  about: {
    title: '关于我们',
    subtitle: '专业团队，匠心设计',
    description: [
      '　　策高设计是一家拥有二十余年专业沉淀的室内设计机构。我们深耕办公空间，商业空间，精品酒店，地产售楼处、样板间、会所及高端住宅等领域，秉承"设计创造价值"的理念，为每一个项目注入独特的艺术灵魂。',
      '　　多年来我们成功服务了众多业主及施工方，工作领域涉及空间装饰设计、视觉陈设，景观设计、工程量清单、建筑结构改造等方面。为客户提供从概念设计到最终落地的一站式解决方案。我们强调项目全局统筹意识与一体化设计切入，在丰富的项目落地实践中不断总结与赋能，优化设计迭代。'
    ],
    stats: [
      { number: '10+', label: '年专业经验' },
      { number: '500+', label: '成功案例' },
      { number: '30+', label: '专业设计师' },
      { number: '98%', label: '客户满意度' },
    ],
    image: '/images/about-image.jpg', // 可以后期替换为真实图片
  },

  // 服务范围
  services: {
    title: '服务范围',
    subtitle: '全方位空间设计解决方案',
    description: '我们提供专业的室内设计服务，涵盖多个领域，为不同类型的项目提供定制化解决方案。',
    items: [
      {
        title: '烟台办公楼装修装饰设计',
        description: '为企业打造现代化、专业化的办公空间，提升企业形象和工作效率。提供烟台办公楼室内设计、办公室装修设计、写字楼设计服务',
        icon: '🏢',
        keywords: ['烟台办公楼装修装饰设计', '烟台办公楼室内设计', '烟台办公室装修', '烟台写字楼装修', '烟台办公室设计']
      },
      {
        title: '烟台餐厅装修装饰设计',
        description: '打造独特的餐饮空间，营造舒适用餐环境，提升顾客体验。提供烟台餐厅室内设计、餐饮空间设计、饭店装修服务',
        icon: '🍽️',
        keywords: ['烟台餐厅装修装饰设计', '烟台餐厅室内设计', '烟台餐饮空间设计', '烟台饭店装修', '烟台餐厅设计']
      },
      {
        title: '烟台洗浴装修装饰设计',
        description: '专业的洗浴空间设计，注重功能分区与隐私保护。提供烟台洗浴室内设计、洗浴中心设计、桑拿装修服务',
        icon: '♨️',
        keywords: ['烟台洗浴装修装饰设计', '烟台洗浴室内设计', '烟台洗浴中心设计', '烟台桑拿装修', '烟台洗浴设计']
      },
      {
        title: '烟台家装别墅住宅装饰装修设计',
        description: '高端住宅定制设计，打造温馨舒适的居家环境。提供烟台别墅室内设计、家装设计、住宅装修服务',
        icon: '🏠',
        keywords: ['烟台家装别墅住宅装饰装修设计', '烟台别墅室内设计', '烟台家装设计', '烟台住宅装修', '烟台别墅设计']
      },
      {
        title: '烟台酒店装饰装修设计',
        description: '精品酒店设计，营造独特的入住体验，提升酒店竞争力。提供烟台酒店室内设计、宾馆装修、精品酒店设计服务',
        icon: '🏨',
        keywords: ['烟台酒店装饰装修设计', '烟台酒店室内设计', '烟台宾馆装修', '烟台精品酒店设计', '烟台酒店设计']
      },
      {
        title: '烟台会所装饰装修设计',
        description: '高端会所设计，打造私密、尊贵、独特的社交空间。提供烟台会所室内设计、私人会所设计、商务会所设计服务',
        icon: '🎯',
        keywords: ['烟台会所装饰装修设计', '烟台会所室内设计', '烟台私人会所设计', '烟台商务会所设计', '烟台会所设计']
      },
      {
        title: '烟台娱乐KTV装饰装修设计',
        description: '时尚KTV空间设计，营造娱乐氛围，提升顾客体验。提供烟台KTV室内设计、夜总会设计、娱乐场所装修服务',
        icon: '🎤',
        keywords: ['烟台娱乐KTV装饰装修设计', '烟台KTV室内设计', '烟台夜总会设计', '烟台娱乐场所装修', '烟台KTV设计']
      },
      {
        title: '烟台公共建筑装饰装修设计',
        description: '专业的公共空间设计，涵盖文化场馆、交通枢纽、教育机构等公共建筑，注重功能性与人文关怀。提供烟台公共建筑室内设计、市政空间设计、文化场馆设计服务',
        icon: '🏛️',
        keywords: ['烟台公共建筑装饰装修设计', '烟台公共建筑室内设计', '烟台市政空间设计', '烟台文化场馆设计', '烟台公共空间设计']
      },
      {
        title: '烟台医疗康养装饰装修设计',
        description: '专业的医疗康养空间设计，营造舒适、安全、人性化的就医环境。提供烟台医院室内设计、康养中心设计、养老院设计、医疗空间设计服务',
        icon: '🏥',
        keywords: ['烟台医疗康养装饰装修设计', '烟台医院室内设计', '烟台康养中心设计', '烟台养老院设计', '烟台医疗空间设计']
      }
    ]
  },

  // 项目案例
  projects: {
    title: '项目案例',
    subtitle: '优秀作品，实力见证',
    items: [
      {
        id: 1,
        title: '黄石湾科创中心',
        category: '科创空间',
        description: '科技企业创新孵化空间，激发无限创意',
        images: [
          '/images/黄石湾科创中心-001.jpg',
          '/images/黄石湾科创中心-002.jpg',
          '/images/黄石湾科创中心-003.jpg',
          '/images/黄石湾科创中心-004.jpg',
        ],
        image: '/images/黄石湾科创中心-001.jpg',
        area: '38000㎡',
        location: '烟台',
      },
      {
        id: 2,
        title: '东化新材料办公楼',
        category: '办公空间',
        description: '现代化企业办公空间，彰显企业文化与实力',
        images: [
          '/images/东化新材料办公楼-001.jpg',
          '/images/东化新材料办公楼-002.jpg',
          '/images/东化新材料办公楼-003.jpg',
          '/images/东化新材料办公楼-004.jpg',
          '/images/东化新材料办公楼-005.jpg',
          '/images/东化新材料办公楼-006.jpg',
          '/images/东化新材料办公楼-007.jpg',
        ],
        image: '/images/东化新材料办公楼-001.jpg',
        area: '15000㎡',
        location: '烟台',
      },
      {
        id: 3,
        title: 'ZHD 科技公司的案例',
        category: '办公空间',
        description: 'ZHD科技公司的案例',
        images: [
          '/images/ZHD科技公司办公-01.jpg',
          '/images/ZHD科技公司办公-02.jpg',
          '/images/ZHD科技公司办公-03.jpg',
          '/images/ZHD科技公司办公-04.jpg',
        ],
        image: '/images/ZHD科技公司办公-01.jpg',
        area: '待定',
        location: '烟台',
      },
      {
        id: 4,
        title: '中创云谷里营销中心',
        category: '营销中心',
        description: '方案以 "智慧升维·总部镜像" 为核心理念。我们将营销中心本身塑造为一个可感知、可交互、可体验的"智慧建筑微缩模型"。来访者在此亲身体验未来在其独栋办公总部中可能实现的智能化场景、高效工作方式及卓越生态形象。',
        images: [
          '/images/中创云谷里营销中心-001.jpg',
          '/images/中创云谷里营销中心-002.jpg',
          '/images/中创云谷里营销中心-003.jpg',
          '/images/中创云谷里营销中心-004.jpg',
          '/images/中创云谷里营销中心-005.jpg',
          '/images/中创云谷里营销中心-006.jpg',
          '/images/中创云谷里营销中心-007.jpg',
          '/images/中创云谷里营销中心-008.jpg',
        ],
        image: '/images/中创云谷里营销中心-001.jpg',
        area: '1800㎡',
        location: '烟台',
      },
      {
        id: 5,
        title: '潮水医院',
        category: '医疗空间',
        description: '现代化医院空间设计，注重功能性与人性化关怀',
        images: [
          '/images/潮水医院-001.jpg',
          '/images/潮水医院-002.jpg',
          '/images/潮水医院-003.jpg',
          '/images/潮水医院-004.jpg',
          '/images/潮水医院-005.jpg',
        ],
        image: '/images/潮水医院-001.jpg',
        area: '16000㎡',
        location: '烟台',
      },
      {
        id: 6,
        title: '易居酒店',
        category: '酒店空间',
        description: '精品商务酒店设计，营造温馨舒适的入住体验',
        images: [
          '/images/易居酒店-001.jpg',
          '/images/易居酒店-002.jpg',
          '/images/易居酒店-003.jpg',
          '/images/易居酒店-004.jpg',
          '/images/易居酒店-005.jpg',
        ],
        image: '/images/易居酒店-001.jpg',
        area: '2000㎡',
        location: '烟台',
      },
      {
        id: 7,
        title: '贝斯特韦斯特酒店',
        category: '酒店空间',
        description: '国际连锁品牌酒店设计，融合中西文化元素',
        images: [
          '/images/贝斯特韦斯特酒店-001.jpg',
          '/images/贝斯特韦斯特酒店-002.jpg',
        ],
        image: '/images/贝斯特韦斯特酒店-001.jpg',
        area: '3000㎡',
        location: '烟台',
      },
      {
        id: 8,
        title: 'LIANG TANG 女装品牌旗舰店',
        category: '商业空间',
        description: '高端女装品牌空间设计，融合时尚与艺术',
        images: [
          '/images/LIANG TANG 女装品牌旗舰店-001.jpg',
          '/images/LIANG TANG 女装品牌旗舰店-002.jpg',
          '/images/LIANG TANG 女装品牌旗舰店-003.jpg',
          '/images/LIANG TANG 女装品牌旗舰店-004.jpg',
          '/images/LIANG TANG 女装品牌旗舰店-005.jpg',
        ],
        image: '/images/LIANG TANG 女装品牌旗舰店-001.jpg',
        area: '800㎡',
        location: '烟台',
      },
      {
        id: 9,
        title: '坤泰办公楼',
        category: '办公空间',
        description: '现代化企业总部办公楼，展现企业形象',
        images: [
          '/images/坤泰办公楼-001.jpg',
          '/images/坤泰办公楼-002.jpg',
          '/images/坤泰办公楼-003.jpg',
          '/images/坤泰办公楼-004.jpg',
          '/images/坤泰办公楼-005.jpg',
          '/images/坤泰办公楼-006.jpg',
          '/images/坤泰办公楼-007.jpg',
        ],
        image: '/images/坤泰办公楼-001.jpg',
        area: '8000㎡',
        location: '烟台',
      },
      {
        id: 10,
        title: '干部培训中心',
        category: '酒店空间',
        description: '高端培训会议与住宿一体化空间设计',
        images: [
          '/images/干部培训中心-001.jpg',
          '/images/干部培训中心-002.jpg',
          '/images/干部培训中心-003.jpg',
          '/images/干部培训中心-004.jpg',
          '/images/干部培训中心-005.jpg',
          '/images/干部培训中心-006.jpg',
        ],
        image: '/images/干部培训中心-001.jpg',
        area: '18000㎡',
        location: '烟台',
      },
      {
        id: 11,
        title: '千代置业办公楼',
        category: '办公空间',
        description: '精致办公空间，打造舒适高效的工作环境',
        images: [
          '/images/千代置业办公楼-001.jpg',
          '/images/千代置业办公楼-002.jpg',
        ],
        image: '/images/千代置业办公楼-001.jpg',
        area: '3500㎡',
        location: '烟台',
      },
      {
        id: 12,
        title: '东山宾馆',
        category: '宾馆',
        description: '高端接待宾馆，展现地方特色与服务品质',
        images: [
          '/images/东山宾馆-001.jpg',
          '/images/东山宾馆-002.jpg',
          '/images/东山宾馆-003.jpg',
        ],
        image: '/images/东山宾馆-001.jpg',
        area: '1000㎡',
        location: '烟台',
      },
      {
        id: 13,
        title: '招金贵金属办公楼',
        category: '办公空间',
        description: '金融企业办公空间，稳重与创新的完美结合',
        images: [
          '/images/招金贵金属办公楼001.jpg',
          '/images/招金贵金属办公楼002.jpg',
        ],
        image: '/images/招金贵金属办公楼001.jpg',
        area: '8000㎡',
        location: '烟台',
      },
      {
        id: 14,
        title: '运动商城',
        category: '商业空间',
        description: '运动主题商业空间，活力与激情的完美呈现',
        images: [
          '/images/运动商城-001.jpg',
          '/images/运动商城-002.jpg',
        ],
        image: '/images/运动商城-001.jpg',
        area: '6000㎡',
        location: '烟台',
      },
      {
        id: 15,
        title: '中惠地热办公楼',
        category: '办公空间',
        description: '绿色环保办公空间，融入可持续发展理念',
        images: [
          '/images/中惠地热办公楼-001.jpg',
          '/images/中惠地热办公楼-002.jpg',
          '/images/中惠地热办公楼-003.jpg',
        ],
        image: '/images/中惠地热办公楼-001.jpg',
        area: '9500㎡',
        location: '烟台',
      },
      {
        id: 16,
        title: '餐饮空间设计',
        category: '餐饮空间',
        description: '多元化餐饮空间设计，营造独特的用餐体验',
        images: [
          '/images/餐饮空间设计-01.jpg',
          '/images/餐饮空间设计-02.jpg',
          '/images/餐饮空间设计-03.jpg',
          '/images/餐饮空间设计-04.jpg',
        ],
        image: '/images/餐饮空间设计-01.jpg',
        area: '500㎡',
        location: '烟台',
      },
      {
        id: 17,
        title: '华苑夜总会',
        category: '娱乐空间',
        description: '高端娱乐空间设计，打造极致的夜生活体验',
        images: [
          '/images/华玺夜总会-001.jpg',
          '/images/华玺夜总会-002.jpg',
          '/images/华玺夜总会-003.jpg',
        ],
        image: '/images/华玺夜总会-001.jpg',
        area: '6000㎡',
        location: '烟台',
      },
      {
        id: 18,
        title: '想唱就唱量贩KTV',
        category: '娱乐空间',
        description: '现代KTV空间设计，时尚与舒适的完美融合',
        images: [
          '/images/想唱就唱量贩KTV-001.jpg',
          '/images/想唱就唱量贩KTV-002.jpg',
          '/images/想唱就唱量贩KTV-003.jpg',
          '/images/想唱就唱量贩KTV-004.jpg',
        ],
        image: '/images/想唱就唱量贩KTV-001.jpg',
        area: '4500㎡',
        location: '烟台',
      },
      {
        id: 19,
        title: '住宅空间',
        category: '住宅别墅',
        description: '高端住宅空间设计，打造理想生活之家',
        images: [
          '/images/住宅空间-01.jpg',
          '/images/住宅空间-02.jpg',
          '/images/住宅空间-03.jpg',
          '/images/住宅空间-04.jpg',
          '/images/住宅空间-05.jpg',
          '/images/住宅空间-06.jpg',
          '/images/住宅空间-07.jpg',
        ],
        image: '/images/住宅空间-01.jpg',
        area: '400㎡',
        location: '烟台',
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
    email: 'design@ytcegao.com',
  },

  // 联系方式
  contact: {
    title: '联系我们',
    subtitle: '期待与您的合作',
    description: '如果您有任何设计需求或疑问，欢迎随时联系我们，我们将竭诚为您服务。',
    info: {
      address: '烟台市莱山区港城东大街1172号',
      phone: '13884666525',
      email: 'design@ytcegao.com',
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
