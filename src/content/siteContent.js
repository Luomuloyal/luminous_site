import previewImage from '../assets/主页.png'

export const motionTokens = {
  heroDuration: 0.8,
  revealDuration: 0.65,
  heroStagger: 0.08,
  sectionStagger: 0.06,
  smoothDuration: 0.9,
}

export const glowTokens = {
  halo:
    '0 0 0 1px rgba(142, 129, 121, 0.12), 0 16px 36px rgba(125, 112, 103, 0.08)',
  edge:
    '0 0 0 1px rgba(142, 129, 121, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.92)',
}

export const surfaceTokens = {
  glass:
    'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(250,246,242,0.72))',
  panel:
    'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(247,242,237,0.92))',
  border: '1px solid rgba(132, 118, 108, 0.12)',
}

export const pageThemeTokens = {
  home: {
    accent: '#AFC6DD',
    accentSecondary: '#E0C3CB',
    accentTertiary: '#C7DABF',
    glow: 'rgba(175, 198, 221, 0.2)',
    glowSecondary: 'rgba(224, 195, 203, 0.16)',
    mesh: 'rgba(199, 218, 191, 0.14)',
    border: 'rgba(175, 198, 221, 0.28)',
    background: 'linear-gradient(180deg, #F4F7FA 0%, #F3F5FA 38%, #F7F1F2 100%)',
    orbs: [
      { size: '44rem', top: '-16rem', left: '-12rem', color: 'rgba(183, 196, 211, 0.12)' },
      { size: '30rem', top: '16vh', right: '-8rem', color: 'rgba(201, 213, 199, 0.1)' },
      { size: '26rem', bottom: '-8rem', left: '34%', color: 'rgba(215, 194, 190, 0.1)' },
    ],
  },
  features: {
    accent: '#AFCFE8',
    accentSecondary: '#D4C5EA',
    accentTertiary: '#CBE0D3',
    glow: 'rgba(175, 207, 232, 0.2)',
    glowSecondary: 'rgba(212, 197, 234, 0.16)',
    mesh: 'rgba(203, 224, 211, 0.14)',
    border: 'rgba(175, 207, 232, 0.28)',
    background: 'linear-gradient(180deg, #F2F7FB 0%, #F2F2FA 48%, #F2F7F2 100%)',
    orbs: [
      { size: '36rem', top: '4rem', left: '-10rem', color: 'rgba(183, 207, 228, 0.12)' },
      { size: '28rem', top: '24rem', right: '-8rem', color: 'rgba(206, 198, 230, 0.1)' },
      { size: '26rem', bottom: '-6rem', left: '34%', color: 'rgba(211, 224, 211, 0.1)' },
    ],
  },
  experience: {
    accent: '#BDD9C1',
    accentSecondary: '#E5C7BD',
    accentTertiary: '#E5DEB8',
    glow: 'rgba(189, 217, 193, 0.2)',
    glowSecondary: 'rgba(229, 199, 189, 0.16)',
    mesh: 'rgba(229, 222, 184, 0.14)',
    border: 'rgba(189, 217, 193, 0.28)',
    background: 'linear-gradient(180deg, #F1F7F2 0%, #EEF6F0 42%, #F8F2EA 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', right: '-8rem', color: 'rgba(191, 214, 193, 0.12)' },
      { size: '30rem', top: '30vh', left: '-10rem', color: 'rgba(225, 199, 192, 0.1)' },
      { size: '22rem', bottom: '-4rem', right: '24%', color: 'rgba(230, 223, 195, 0.1)' },
    ],
  },
  about: {
    accent: '#DFC6A9',
    accentSecondary: '#BCCFE0',
    accentTertiary: '#E8CFC6',
    glow: 'rgba(223, 198, 169, 0.2)',
    glowSecondary: 'rgba(188, 207, 224, 0.16)',
    mesh: 'rgba(232, 207, 198, 0.14)',
    border: 'rgba(223, 198, 169, 0.28)',
    background: 'linear-gradient(180deg, #F8F3EC 0%, #F3F6F8 46%, #F8F0EE 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', left: '-12rem', color: 'rgba(216, 198, 178, 0.12)' },
      { size: '28rem', top: '25vh', right: '-10rem', color: 'rgba(197, 208, 218, 0.1)' },
      { size: '22rem', bottom: '-8rem', left: '35%', color: 'rgba(226, 211, 204, 0.1)' },
    ],
  },
  download: {
    accent: '#D2BDE0',
    accentSecondary: '#BFD3E2',
    accentTertiary: '#E6CDBD',
    glow: 'rgba(210, 189, 224, 0.2)',
    glowSecondary: 'rgba(191, 211, 226, 0.16)',
    mesh: 'rgba(230, 205, 189, 0.14)',
    border: 'rgba(210, 189, 224, 0.28)',
    background: 'linear-gradient(180deg, #F7F2FA 0%, #F2F6FA 46%, #F9F1EC 100%)',
    orbs: [
      { size: '28rem', top: '-6rem', left: '-8rem', color: 'rgba(200, 183, 201, 0.12)' },
      { size: '24rem', top: '22rem', right: '-7rem', color: 'rgba(184, 198, 207, 0.1)' },
      { size: '22rem', bottom: '-6rem', left: '38%', color: 'rgba(216, 200, 184, 0.1)' },
    ],
  },
  usecases: {
    accent: '#C7DDC7',
    accentSecondary: '#E3C8C1',
    accentTertiary: '#CBDADF',
    glow: 'rgba(199, 221, 199, 0.2)',
    glowSecondary: 'rgba(227, 200, 193, 0.16)',
    mesh: 'rgba(203, 218, 223, 0.14)',
    border: 'rgba(199, 221, 199, 0.28)',
    background: 'linear-gradient(180deg, #F1F6F0 0%, #EEF5F0 42%, #F7F0F0 100%)',
    orbs: [
      { size: '36rem', top: '-8rem', left: '-12rem', color: 'rgba(199, 218, 200, 0.12)' },
      { size: '28rem', top: '28vh', right: '-9rem', color: 'rgba(222, 203, 192, 0.1)' },
      { size: '24rem', bottom: '-5rem', left: '32%', color: 'rgba(212, 223, 215, 0.1)' },
    ],
  },
  privacy: {
    accent: '#E3C5D1',
    accentSecondary: '#C3D8E8',
    accentTertiary: '#D0E0D2',
    glow: 'rgba(227, 197, 209, 0.2)',
    glowSecondary: 'rgba(195, 216, 232, 0.16)',
    mesh: 'rgba(208, 224, 210, 0.14)',
    border: 'rgba(227, 197, 209, 0.28)',
    background: 'linear-gradient(180deg, #FAF1F5 0%, #F2F5FA 46%, #F3F6F1 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', right: '-10rem', color: 'rgba(222, 198, 205, 0.12)' },
      { size: '28rem', top: '32vh', left: '-8rem', color: 'rgba(200, 215, 228, 0.1)' },
      { size: '22rem', bottom: '-6rem', right: '28%', color: 'rgba(208, 221, 210, 0.1)' },
    ],
  },
}

export const siteContent = {
  brand: {
    name: 'Luminous',
    cnName: '智慧用药助手',
    tagline: '识药、懂药、记药',
  },
  navItems: [
    { label: '首页', en: 'Home', to: '/' },
    { label: '功能', en: 'Features', to: '/features' },
    { label: '体验', en: 'Experience', to: '/experience' },
    { label: '场景', en: 'Use Cases', to: '/usecases' },
    { label: '关于', en: 'About', to: '/about' },
    { label: '隐私', en: 'Privacy', to: '/privacy' },
    { label: '下载', en: 'Download', to: '/download' },
  ],
  techStackDetails: [
    {
      category: '移动应用',
      items: [
        { name: 'Flutter', version: 'App Frontend', desc: '承载 Android 主应用，页面、交互与多端工程都在统一代码仓中维护。' },
        { name: 'Dart', version: '3.11', desc: '应用层语言，支撑页面逻辑、状态编排与本地能力接入。' },
        { name: 'GetX', version: 'State Layer', desc: '用于控制器组织与依赖管理，保持提醒、扫描、设置等模块分层清晰。' },
      ],
    },
    {
      category: '服务端',
      items: [
        { name: 'Node.js', version: '18+', desc: '承载 API 运行时，处理认证、查药、识别与 AI 相关请求。' },
        { name: 'Express', version: 'REST API', desc: '当前后端骨架，路由按资源划分，逐步替代旧的云函数式路径。' },
        { name: 'TypeScript', version: 'Strict TS', desc: '为接口、模型与处理器提供类型边界，减少联调时的隐性错误。' },
      ],
    },
    {
      category: '数据与缓存',
      items: [
        { name: 'MongoDB', version: 'User Data', desc: '存放用户、提醒、识别记录与我的药品等偏业务型数据。' },
        { name: 'MySQL', version: 'Medicine Data', desc: '承载药品查询与详情所依赖的结构化数据源。' },
        { name: 'Redis', version: 'Runtime Cache', desc: '用于缓存与运行时加速，在 Docker Compose 部署中作为标准配套出现。' },
      ],
    },
    {
      category: '终端能力',
      items: [
        { name: 'sqflite', version: 'Local Store', desc: '支撑本地提醒、相册、今日视图等离线可留存的数据层。' },
        { name: 'image_picker', version: 'Scan Input', desc: '接入拍照与图库入口，让识别和相册回看形成闭环。' },
        { name: 'flutter_local_notifications', version: 'Reminder Engine', desc: '用于本地提醒投递，与今日提醒、打卡等日内节奏页面配合。' },
      ],
    },
    {
      category: '工程与部署',
      items: [
        { name: 'Docker Compose', version: 'Dev / Prod', desc: '项目根目录内提供应用、数据库与缓存的联动启动方案。' },
        { name: 'Nginx', version: 'Deploy', desc: '部署目录保留了反向代理配置，适配正式环境的静态资源与接口转发。' },
        { name: 'Test Suites', version: 'Flutter + Node', desc: '已覆盖提醒、相册、AI 流程和缓存等测试，帮助核心链路持续稳定。' },
      ],
    },
  ],
  releaseNotes: [
    {
      version: '3.1.0-rc.1+36',
      date: '2026 年 4 月',
      highlights: [
        '设置页支持跟随系统、浅色、深色三种显示模式',
        '主题样式整理为柔岚、月雾、神树、虚霭、浅砂五套预设',
        '补齐提醒、相册、AI 缓存与首页相关测试用例',
        '产品信息与能力说明进一步梳理',
      ],
    },
    {
      version: '3.0.0+33',
      date: '2026 年 3 月',
      highlights: [
        '首页、今日提醒、打卡与识别相册链路进一步稳定',
        '后端保留 JWT、MongoDB、MySQL、Redis 的组合部署方案',
        '站点开始接入运行时清单与真实截图展示',
      ],
    },
    {
      version: '2.8.0+28',
      date: '2026 年 2 月',
      highlights: [
        '扫描识别、手动搜索与药品详情页面完成基础闭环',
        '安全辅助与 AI 解读接口开始进入实际联调阶段',
        'Docker 与云端部署文档逐步完善',
      ],
    },
  ],
  heroPanels: [
    {
      label: 'Photo Scan',
      title: '拍照识别与候选确认',
      body: '把相机入口、候选结果与药品详情串成一条更顺手的阅读路径，而不是停在识别结果页。',
    },
    {
      label: 'Daily Rhythm',
      title: '提醒、今日视图与打卡',
      body: '提醒不是单点通知，而是会继续落到首页和今日视图里，帮助你确认今天到底做到了哪一步。',
    },
    {
      label: 'Safe Reading',
      title: 'AI 解读与安全辅助',
      body: '复杂信息会先被翻译成人话，再用克制的提示方式把风险感知提前，但不越过专业边界。',
    },
  ],
  screenshotSlots: [
    {
      id: 'home-dashboard',
      title: '首页总览',
      caption: '首页把下一条提醒、常用功能入口和今日提醒汇合在一起，先解决“今天先做什么”。',
      fallbackScene: {
        label: 'Shot 01',
        screen: {
          tag: 'Home Pulse',
          headline: '下一条提醒和常用入口先在首页出现',
          body: '顶部提醒卡和功能入口共存，让用户先看到今天的安排，再决定是否继续深挖。',
          panels: [
            { title: '今日提醒', value: '3 条待处理' },
            { title: '快捷入口', value: '扫描 / 搜索' },
            { title: '最近记录', value: '可继续回看' },
          ],
        },
      },
    },
    {
      id: 'medicine-recognition',
      title: '识别结果页',
      caption: '当前这张图展示的是识别结果页本身，重点在重新识别、加入相册和继续搜索这些后续动作。',
      fallbackScene: {
        label: 'Shot 02',
        screen: {
          tag: 'Camera Sync',
          headline: '识别页更像一个后续动作分发点',
          body: '识别完成后，页面会集中呈现继续处理当前结果的常用入口。',
          panels: [
            { title: '识别反馈', value: '可再次识别' },
            { title: '保存动作', value: '加入相册' },
            { title: '兜底路径', value: '转手动搜索' },
          ],
        },
      },
    },
    {
      id: 'manual-search-detail',
      title: '手动搜索',
      caption: '这张图更准确地说是搜索页，而不是详情页，重点在关键词检索、常用搜索和最近搜索。',
      fallbackScene: {
        label: 'Shot 03',
        screen: {
          tag: 'Query Layer',
          headline: '手动搜索适合无法拍照或想直接输入的时候',
          body: '搜索框、常用词和最近记录共同降低了重新输入药名的成本。',
          panels: [
            { title: '搜索方式', value: '关键词检索' },
            { title: '常用项', value: '一键回填' },
            { title: '最近记录', value: '减少重复输入' },
          ],
        },
      },
    },
    {
      id: 'today-reminders',
      title: '首页中的今日提醒',
      caption: '当前可用素材里，今日提醒出现在首页顶部卡片中，更接近“今日入口”而不是独立列表页。',
      fallbackScene: {
        label: 'Shot 04',
        screen: {
          tag: 'Rhythm Board',
          headline: '今天还有什么安排，会先在首页被看见',
          body: '不是跳进复杂列表，而是先通过首页提醒卡快速理解接下来要做什么。',
          panels: [
            { title: '下一条提醒', value: '19:30' },
            { title: '今日安排', value: '3 条提醒' },
            { title: '入口位置', value: '首页顶部' },
          ],
        },
      },
    },
    {
      id: 'safety-assist',
      title: '安全辅助',
      caption: '围绕单药说明与双药相互作用给出提示，让风险先被看到，再由用户继续核对。',
      fallbackScene: {
        label: 'Shot 05',
        screen: {
          tag: 'Risk Signal',
          headline: '先把边界说清楚，再给辅助提示',
          body: '安全辅助强调核对与参考属性，不伪装成诊断结论。',
          panels: [
            { title: '单药建议', value: '重点提醒' },
            { title: '相互作用', value: '需要继续确认' },
            { title: '输出语气', value: '辅助而克制' },
          ],
        },
      },
    },
    {
      id: 'recognition-album',
      title: '识别相册',
      caption: '相册页面当前重点是轻量归档与同步提示，而不是大量历史图墙式展示。',
      fallbackScene: {
        label: 'Shot 06',
        screen: {
          tag: 'Memory Fold',
          headline: '识别记录会被轻量留存下来',
          body: '页面同时说明了本地保存和登录后同步之间的关系，重点是留存策略与回看效率。',
          panels: [
            { title: '归档方式', value: '轻量记录' },
            { title: '同步策略', value: '登录后可同步' },
            { title: '本地保存', value: '原图保存在本机' },
          ],
        },
      },
    },
  ],
  featuredShotIds: ['home-dashboard', 'manual-search-detail', 'safety-assist'],
  downloadGalleryIds: [
    'home-dashboard',
    'medicine-recognition',
    'manual-search-detail',
    'safety-assist',
    'recognition-album',
  ],
  homeHighlights: [
    {
      value: '01',
      title: '功能不是散点，而是闭环',
      body: '搜索、扫描、药品详情、提醒、打卡和相册回看覆盖从查找到复查的主要环节。',
    },
    {
      value: '02',
      title: '表达要克制，但足够友好',
      body: 'AI 解读和安全辅助的目标是把信息翻译得更好懂，而不是直接替代医生或药师判断。',
    },
    {
      value: '03',
      title: '视觉是可调的，不是一种固定皮肤',
      body: '支持跟随系统、浅色、深色三种模式，以及柔岚到浅砂五套预设主题。',
    },
  ],
  featureGroups: [
    {
      orbit: 'Lookup Layer',
      title: '查药与识药',
      description: '先找到药，再把药看明白，减少在不同入口之间来回切换。',
      lead: '搜索、拍照识别、候选确认与药品详情共用同一条信息理解主线，让入口不同但结果一致。',
      cards: [
        {
          label: 'Photo Recognition',
          title: '拍照识别',
          body: '通过相机或图库输入药盒、药板图片，进入候选确认与结果阅读流程。',
          detail:
            '识别流程覆盖图片输入、候选确认与结果阅读，方便从拍照快速进入后续查询与留存。',
          bullets: ['拍照 / 图库输入', '候选确认', '识别结果可回看'],
          facts: ['页面路由已接入', '扫描与后续详情互通'],
          span: 'wide',
        },
        {
          label: 'Manual Search',
          title: '手动搜索',
          body: '当拍照不方便时，仍能通过名称查询药品并进入同一套详情阅读结构。',
          detail:
            '搜索页与药品详情协同工作，在不便拍照时仍能提供稳定直接的查药入口。',
          bullets: ['名称查询', '结果列表', '可直接进入详情'],
          facts: ['搜索路由独立存在', '与详情页共用结果终点'],
        },
        {
          label: 'Drug Detail',
          title: '药品详情',
          body: '把结构化药物信息组织成更容易浏览的页面，方便继续判断和回看。',
          detail:
            '详情页控制器与数据接口分开维护，后续可以继续扩展更多字段，但当前主链路已经足够完整。',
          bullets: ['结构化信息', '统一阅读界面', '支持继续进入 AI 解读'],
          facts: ['前后端均已拆分', '搜索 / 识别共用终点'],
        },
      ],
    },
    {
      orbit: 'Rhythm Layer',
      title: '提醒与记录',
      description: '把“知道该吃药”和“确认已经吃过”接成一条真的能坚持下去的日常节奏。',
      lead: '提醒列表、今日提醒、本地通知、打卡页与本地存储能力都已经落在代码里，说明这部分是产品骨架而不是附属功能。',
      cards: [
        {
          label: 'Reminder Core',
          title: '用药提醒',
          body: '按计划触发本地提醒，让药物节奏从“记在脑子里”变成“交给系统提醒”。',
          detail:
            '提醒流程覆盖提醒列表、提醒编辑、本地通知与结果确认，便于形成稳定的日常节奏。',
          bullets: ['提醒列表', '提醒编辑', '本地通知'],
          facts: ['相关测试已存在', '本地优先的实现思路明确'],
          span: 'wide',
        },
        {
          label: 'Today View',
          title: '今日提醒视图',
          body: '把今天的待办药物集中到一个更容易理解的日内面板里。',
          detail:
            '首页与今日提醒的测试文件都已经出现，说明产品并不只是在做单条提醒，而是在做更完整的日内体验。',
          bullets: ['当日聚合', '下一次提醒', '完成状态联动'],
          facts: ['首页模块已有专项测试', '日内视图是主导航的一部分'],
        },
        {
          label: 'Check In',
          title: '用药打卡',
          body: '从提醒进入打卡，帮助用户知道自己今天是否真正完成了计划。',
          detail:
            '打卡环节让提醒与完成确认自然衔接，更适合长期记录和后续回看。',
          bullets: ['完成确认', '打卡记录', '更利于长期追踪'],
          facts: ['打卡页面独立存在', '与提醒节奏配合'],
        },
      ],
    },
    {
      orbit: 'Safety Layer',
      title: 'AI、风险与历史沉淀',
      description: '把看不懂的内容翻译清楚，也把过去发生过的事情留下来，方便之后继续核对。',
      lead: 'AI 解读、安全辅助、识别相册与本地缓存能力共同组成了“看得懂 + 想得起 + 查得到”的第三层。',
      cards: [
        {
          label: 'AI Readout',
          title: 'AI 辅助解读',
          body: '把机械化的说明内容转成更适合普通用户扫读的语言。',
          detail:
            'AI 辅助用于提炼重点信息与注意事项，帮助普通用户更快抓住需要理解的内容。',
          bullets: ['重点提炼', '注意事项', '更低的阅读负担'],
          facts: ['仅作辅助参考', '依赖服务端 AI 能力'],
        },
        {
          label: 'Safe Assist',
          title: '安全辅助',
          body: '围绕单药说明和双药相互作用给出需要继续核对的提示。',
          detail:
            '客户端存在独立安全辅助页与控制器，后端也拆出了对应处理器，说明风险辅助是单独建模的产品模块。',
          bullets: ['单药建议', '相互作用提醒', '输出克制'],
          facts: ['页面与接口成对存在', '强调“核对”而非替代判断'],
          span: 'wide',
        },
        {
          label: 'Recognition Album',
          title: '识别相册与历史',
          body: '把缩略图、识别结果与历史摘要沉淀下来，方便回看与复查。',
          detail:
            '识别结果会沉淀为可回看的历史资料，方便后续检索、对照与减少重复识别。',
          bullets: ['缩略图回看', '历史摘要', '减少重复识别'],
          facts: ['本地存储方案已接入', '相册有专项测试'],
        },
      ],
    },
  ],
  experienceScenes: [
    {
      label: 'Scene 01',
      en: 'Scan or Search',
      shotId: 'medicine-recognition',
      title: '先识别，再决定下一步是保存、重试还是继续搜索',
      body: '当前识别截图更接近“结果分发页”，它把重新识别、加入相册和转去搜索这些动作集中展示出来。',
      points: ['识别结果页承担分发作用', '失败时有明确兜底路径', '可以直接进入相册留存'],
      screen: {
        tag: 'Entry Layer',
        headline: '识别结果页负责把下一步说清楚',
        body: '识别之后不是立刻结束，而是继续引导用户保存、重试或换用搜索。',
        panels: [
          { title: '结果状态', value: '可继续处理' },
          { title: '保存动作', value: '加入相册' },
          { title: '兜底动作', value: '切到搜索' },
        ],
      },
    },
    {
      label: 'Scene 02',
      en: 'Read and Keep',
      shotId: 'recognition-album',
      title: '读懂本次结果，也把它留给未来的自己',
      body: 'AI 解读、药品信息与识别相册会把一次偶发的查看，变成之后还能继续利用的个人资料。',
      points: ['识别结果可沉淀', '药物详情更容易回看', '相册帮助减少重复识别'],
      screen: {
        tag: 'Memory Fold',
        headline: '结果会留下，不必每次重新开始',
        body: '缩略图、药物名称与摘要会变成后续回顾时的快速索引。',
        panels: [
          { title: '识别相册', value: '可回看' },
          { title: '药物详情', value: '统一阅读界面' },
          { title: '摘要', value: '更快找到重点' },
        ],
      },
    },
    {
      label: 'Scene 03',
      en: 'Stay on Rhythm',
      shotId: 'today-reminders',
      title: '提醒不是孤立通知，而是首页里能快速看到的今日入口',
      body: '当前素材里，提醒以首页卡片形式出现，所以这里更适合强调“先看到今日安排”，而不是把它说成完整独立页。',
      points: ['首页先显示下一条提醒', '今日安排会被快速汇总', '提醒和功能入口共享同一主视图'],
      screen: {
        tag: 'Daily Rhythm',
        headline: '今天先做什么，首页会先说出来',
        body: '提醒卡、快捷入口和常用功能被组织在一起，更适合高频快速查看。',
        panels: [
          { title: '下一条提醒', value: '19:30' },
          { title: '今日安排', value: '3 条' },
          { title: '查看位置', value: '首页卡片' },
        ],
      },
    },
  ],
  featuresMeta: {
    status: 'Core Features',
    title: '把查药、识药、记药拆开说清楚，也把它们重新接成闭环',
    body:
      '页面围绕查药、识药、提醒、打卡与历史沉淀展开，让用户更快理解产品如何支撑完整的用药管理流程。',
    primaryAction: {
      label: '查看体验路径',
      note: 'Experience',
      to: '/experience',
    },
    secondaryAction: {
      label: '了解下载状态',
      note: 'Android Beta',
      to: '/download',
    },
  },
  experienceMeta: {
    status: 'Experience Design',
    title: '让信息在正确的时刻出现，是体验设计的关键',
    body:
      '从入口统一、结果沉淀到提醒节奏，Luminous 想做的是一条更适合长期使用的用药路径，而不是短暂惊艳的演示稿。',
    primaryAction: {
      label: '查看使用场景',
      note: 'Use Cases',
      to: '/usecases',
    },
    secondaryAction: {
      label: '继续了解项目',
      note: 'About',
      to: '/about',
    },
  },
  usecasesMeta: {
    status: 'Use Cases',
    title: '越贴近日常，工具才越有机会被真正留下来',
    body:
      '从家庭药箱整理，到长期提醒和照护协作，产品都围绕日常用药管理场景提供对应支持。',
    primaryAction: {
      label: '查看关于页面',
      note: 'About Luminous',
      to: '/about',
    },
    secondaryAction: {
      label: '查看隐私边界',
      note: 'Privacy',
      to: '/privacy',
    },
  },
  aboutMeta: {
    status: 'About Us',
    title: '以清晰架构支撑稳定的用药管理体验',
    body:
      'Luminous 目前是一套以 Flutter App + Node/Express 后端为核心的全栈项目，重点验证的是移动端真实可用的用药管理闭环。',
    primaryAction: {
      label: '查看隐私边界',
      note: 'Privacy',
      to: '/privacy',
    },
    secondaryAction: {
      label: '查看下载页',
      note: 'Android Beta',
      to: '/download',
    },
  },
  privacyMeta: {
    status: 'Privacy Policy',
    title: '透明、克制地说明数据范围与使用边界',
    body:
      '我们重点说明数据流向、AI 参与时机与用户控制权，帮助你清楚了解产品如何处理信息。',
    primaryAction: {
      label: '返回首页',
      note: 'Back Home',
      to: '/',
    },
    secondaryAction: {
      label: '查看下载状态',
      note: 'Android Beta',
      to: '/download',
    },
  },
  homeMeta: {
    status: 'Official Website',
    title: '清晰、克制的用药工具，应当提供一目了然的产品信息',
    body:
      '围绕查药、识药、提醒与安全辅助，站点以清晰直接的方式呈现产品能力与使用路径。',
    primaryAction: {
      label: '查看功能全景',
      note: 'Feature Map',
      to: '/features',
    },
    secondaryAction: {
      label: '查看下载状态',
      note: 'Android Beta',
      to: '/download',
    },
  },
  downloadMeta: {
    status: 'Android Beta',
    title: '当前以 Android 内测验证为主，下载信息可与运行时清单同步',
    body:
      '当运行时 manifest 在线时，这里会切换成真实版本号、更新时间、下载链接与截图；离线时则保持静态展示，不制造失真的承诺。',
    primaryAction: {
      label: '下载预览图片',
      note: 'PNG Preview',
      href: previewImage,
      download: 'luminous-home-preview.png',
    },
    secondaryAction: {
      label: '返回首页',
      note: 'Back Home',
      to: '/',
    },
    platforms: [
      {
        name: 'Android',
        status: '当前主验证平台',
        detail: '项目当前对外重点仍是 Android 版本，围绕识别、提醒、打卡与安全辅助持续收敛稳定性。',
      },
      {
        name: 'Display Modes',
        status: '系统 / 浅色 / 深色',
        detail: '主题模式与五套预设风格已经落地，兼顾浅色层次、阅读舒适度与品牌统一感。',
      },
      {
        name: 'Backend',
        status: 'Express + JWT',
        detail: '服务端承担认证、药品查询、扫描记录与 AI 相关接口，采用更清晰的资源化路由组织。',
      },
      {
        name: 'Storage',
        status: 'MongoDB + MySQL + Local',
        detail: '用户侧数据、药品结构化数据和客户端本地缓存分层存在，服务于提醒与历史沉淀能力。',
      },
    ],
  },
  faqItems: [
    {
      question: 'Luminous 是医疗诊断产品吗？',
      answer:
        '不是。它的定位是智慧用药助手，重点在查药、识药、提醒、打卡、AI 解读与风险辅助。任何提示都不替代医生或药师建议。',
    },
    {
      question: '目前包含哪些核心页面？',
      answer:
        '当前包含首页、搜索、扫描、提醒、打卡、安全辅助、设置、相册、登录注册等核心页面，覆盖从查药到记录的主要环节。',
    },
    {
      question: '支持哪些主题和显示模式？',
      answer:
        '产品提供跟随系统、浅色、深色三种显示模式，以及柔岚、月雾、神树、虚霭、浅砂五套预设主题风格。',
    },
    {
      question: '哪些能力更依赖网络？',
      answer:
        '药品查询、拍照识别、AI 解读和安全辅助更依赖服务端或网络能力；提醒、部分历史沉淀和本地视图则更强调本地优先。',
    },
    {
      question: '为什么没有展示夸张的准确率或速度数字？',
      answer:
        '我们更重视清晰准确地说明产品能力，因此优先展示功能范围、使用路径与可感知体验，而不是难以核实的宣传数字。',
    },
    {
      question: '现在的后端架构是什么？',
      answer:
        '当前服务端使用 Node.js + TypeScript + Express，认证采用 JWT 双 Token，数据侧使用 MongoDB 存用户数据、MySQL 承载药品查询数据，并保留 Redis 作为运行时缓存。',
    },
    {
      question: '识别后的结果会留下什么？',
      answer:
        '当前产品方向更偏向保留缩略图、识别结果、药物摘要和相关历史记录，让之后的回看与复查更顺手。',
    },
    {
      question: 'AI 解读和安全辅助会越界吗？',
      answer:
        '不会。AI 解读与安全辅助定位为辅助理解和风险提醒，重点在帮助你继续核对，而不是直接代替专业判断。',
    },
    {
      question: '我的数据会被卖给第三方吗？',
      answer:
        '产品定位不以售卖个人数据为目的，并会围绕实际数据流向、权限边界与用户控制权进行说明。',
    },
    {
      question: 'iOS 或其他平台怎么理解？',
      answer:
        '产品已预留 iOS、Web、Linux、macOS、Windows 等平台适配基础，现阶段对外仍以 Android 主流程体验为重点。',
    },
  ],
  footerLinks: [
    { label: '功能全景', to: '/features' },
    { label: '体验路径', to: '/experience' },
    { label: '使用场景', to: '/usecases' },
    { label: '隐私边界', to: '/privacy' },
    { label: '下载状态', to: '/download' },
  ],
  useCasesContent: {
    title: '使用场景',
    subtitle: '只保留当前产品能力真正能支撑的日常场景，让叙事更贴近真实使用',
    scenarios: [
      {
        icon: '🧺',
        segment: '家庭药箱整理',
        title: '把零散药盒整理成看得懂的个人药箱',
        description: '家里常备药越来越多时，最常见的问题不是“没有药”，而是“知道它在哪，却想不起它是什么”。',
        story: [
          {
            step: '先拍照或搜索',
            detail: '通过拍照识别或手动搜索找到药物入口，避免每次都重新输入复杂名称。',
          },
          {
            step: '查看统一详情',
            detail: '药物说明、AI 解读和注意事项尽量回到同一套详情结构里，不让信息再次分散。',
          },
          {
            step: '保存进相册',
            detail: '识别结果会沉淀成可回看的轻量记录，下次再找同一种药时更快。',
          },
          {
            step: '需要时继续提醒',
            detail: '如果它是一段时间内需要持续服用的药，可以继续进入提醒和打卡流程。',
          },
        ],
        benefits: [
          '降低家庭药箱的查找成本',
          '减少重复识别同一种药物',
          '让临时查药也能留下后续线索',
          '更适合建立个人常备药清单',
        ],
      },
      {
        icon: '⏰',
        segment: '慢病长期服药',
        title: '把长期节奏说清楚，而不是只发一条提醒',
        description: '长期用药场景里，最重要的不是提醒弹出来，而是今天还剩几次、是否已经完成、之前看过什么。',
        story: [
          {
            step: '建立提醒计划',
            detail: '在提醒页设置日常节奏，让系统替代记忆去承担重复性事务。',
          },
          {
            step: '回到今日视图',
            detail: '提醒不是孤立通知，而是会继续落到首页和今日提醒页面里。',
          },
          {
            step: '用药后打卡',
            detail: '打卡让“我看到了提醒”和“我已经执行”之间不再是同一件事。',
          },
          {
            step: '需要时再核对安全提示',
            detail: '如果同时服用多种药物，可以用安全辅助先看重点，再决定是否继续咨询专业人士。',
          },
        ],
        benefits: [
          '提醒与打卡形成完整闭环',
          '今天的进度更容易被理解',
          '长期服药记录更易回看',
          '风险提示更靠前但不过界',
        ],
      },
      {
        icon: '🏥',
        segment: '术后恢复期',
        title: '阶段性用药更需要稳定而清楚的工具',
        description: '在恢复期里，药物多、时间密、阶段差异大，一个好用的工具应该把变化说清楚，而不是增加新的学习成本。',
        story: [
          {
            step: '快速确认药物',
            detail: '先通过拍照或搜索确认药品名称，避免因为药盒相似而混淆。',
          },
          {
            step: '读懂重点说明',
            detail: 'AI 解读帮助用户先抓住注意事项和重点表达，再决定是否深入查看完整信息。',
          },
          {
            step: '按阶段执行提醒',
            detail: '恢复期的提醒更强调一段时间内的稳定执行，而不是一次性的查看。',
          },
          {
            step: '回看历史记录',
            detail: '识别历史、相册和打卡信息可以作为复诊前的简单辅助材料。',
          },
        ],
        benefits: [
          '降低阶段性用药的混淆感',
          '重点信息更容易被快速读懂',
          '提醒节奏更适合短期高频场景',
          '复查前更容易整理最近记录',
        ],
      },
      {
        icon: '👨‍👩‍👧',
        segment: '家庭照护协助',
        title: '当你不是为自己管理时，清晰感比复杂表达更重要',
        description: '照护者通常需要替家人查药、记药、回看记录。工具必须足够清楚，才能减少沟通误差。',
        story: [
          {
            step: '先建立共同语言',
            detail: '通过统一的药物详情和识别记录，让家人之间说的是同一种信息，而不是各自记忆里的版本。',
          },
          {
            step: '把提醒做成可确认的事情',
            detail: '提醒与打卡帮助照护者更快知道哪些事项已经处理，哪些还需要继续跟进。',
          },
          {
            step: '复查时回看相册与历史',
            detail: '过去看过什么药、最近有没有重新识别，都可以从历史入口快速找到。',
          },
          {
            step: '风险提示先给边界',
            detail: '安全辅助会先提醒继续核对，而不是给照护者制造虚假的确定感。',
          },
        ],
        benefits: [
          '减少家庭照护中的信息错位',
          '帮助多次提醒后的执行确认',
          '历史记录更利于后续沟通',
          '风险提示语气更适合照护协作',
        ],
      },
    ],
  },
  privacyContent: {
    title: '隐私与安全政策',
    subtitle: '只描述当前产品能力与代码结构真正能支撑的数据边界，而不是写一份空洞的万能承诺',
    sections: [
      {
        heading: '我们会处理哪些数据',
        items: [
          {
            title: '账号与登录态',
            detail: '如果你使用登录能力，服务端会处理账号认证所需的基本信息，并通过 JWT 维护会话状态。',
          },
          {
            title: '识别、提醒与相册记录',
            detail: '扫描结果、提醒计划、打卡状态与相册历史属于应用核心能力需要处理的数据范围。',
          },
          {
            title: '按需申请设备权限',
            detail: '相机、相册等权限只在对应功能发生时才有意义，不会被默认设置为无差别常驻权限。',
          },
        ],
      },
      {
        heading: '数据存放与流向',
        items: [
          {
            title: '客户端本地存储',
            detail: '产品已接入 sqflite、shared_preferences 与本地提醒相关能力，本地优先是当前实现的重要方向。',
          },
          {
            title: '服务端数据分层',
            detail: '用户相关业务数据与药品结构化数据并不混在一起，而是分别由 MongoDB 与 MySQL 承担。',
          },
          {
            title: '缓存与运行时支撑',
            detail: 'Redis 出现在部署方案中，主要承担运行时加速与缓存角色，而不是单独的新数据来源。',
          },
        ],
      },
      {
        heading: 'AI 参与时机',
        items: [
          {
            title: '只在触发 AI 解读时参与',
            detail: 'AI 相关处理并不是全站默认常驻逻辑，而是在你主动使用 AI 解读或安全辅助等能力时才有意义。',
          },
          {
            title: '当前接入方式',
            detail: '后端代码中保留了豆包 / 火山方舟兼容调用与 prompt 组织，这说明 AI 是由服务端统一代理的能力。',
          },
          {
            title: '边界表达',
            detail: 'AI 输出定位为辅助理解文本，而不是医疗诊断或最终结论。',
          },
        ],
      },
      {
        heading: '你能做什么',
        items: [
          {
            title: '查看与回看',
            detail: '应用中的识别历史、提醒记录、相册条目与部分个人数据都应当尽量以用户可回看的形式存在。',
          },
          {
            title: '编辑与删除',
            detail: '提醒、历史条目和账户信息应当由用户自己决定是否保留，这是产品设计中的重要原则。',
          },
          {
            title: '停止某类能力',
            detail: '你可以选择暂时不用 AI 解读、停止提醒、删除相册记录或退出登录，而不是被迫接受整套能力。',
          },
        ],
      },
      {
        heading: '安全表达方式',
        items: [
          {
            title: '只承诺当前看得到的架构',
            detail: '例如 JWT、数据库分层、本地优先与按需权限，这些机制共同构成当前的数据处理与保护基础。',
          },
          {
            title: '不夸大“绝对安全”',
            detail: '任何涉及网络、账户和第三方服务的产品都不存在绝对风险为零的说法，因此我们会避免不必要的绝对化措辞。',
          },
          {
            title: '辅助工具定位明确',
            detail: 'Luminous 的目标是帮助用户更清楚地管理用药，不承担诊断职责，也不鼓励绕过专业意见。',
          },
        ],
      },
      {
        heading: '后续更新方式',
        items: [
          {
            title: '以产品迭代同步更新',
            detail: '当数据流、AI 参与方式或导出删除能力发生明显变化时，本页与应用内说明会同步更新。',
          },
          {
            title: '通过项目渠道沟通',
            detail: '当前更合适的沟通入口是应用内反馈与版本更新说明，便于及时了解能力变化与处理方式。',
          },
        ],
      },
    ],
  },
}
