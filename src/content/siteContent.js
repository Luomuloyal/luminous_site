export const motionTokens = {
  heroDuration: 0.8,
  revealDuration: 0.65,
  heroStagger: 0.08,
  sectionStagger: 0.06,
  smoothDuration: 0.9,
}

export const glowTokens = {
  halo:
    '0 0 0 1px rgba(150, 160, 170, 0.15), 0 2px 8px rgba(100, 110, 120, 0.06)',
  edge: '0 0 0 1px rgba(150, 160, 170, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
}

export const surfaceTokens = {
  glass:
    'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,247,250,0.85))',
  panel:
    'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,243,247,0.9))',
  border: '1px solid rgba(100, 116, 139, 0.12)',
}

export const pageThemeTokens = {
  home: {
    accent: '#E8BAD5',
    accentSecondary: '#FFD4D8',
    accentTertiary: '#FFE8D6',
    glow: 'rgba(232, 186, 213, 0.1)',
    glowSecondary: 'rgba(255, 212, 216, 0.08)',
    mesh: 'rgba(255, 232, 214, 0.06)',
    border: 'rgba(232, 186, 213, 0.15)',
    background: 'linear-gradient(180deg, #FFFBF9 0%, #FFF7F5 50%, #FFF3F0 100%)',
    orbs: [
      { size: '44rem', top: '-16rem', left: '-12rem', color: 'rgba(232, 186, 213, 0.08)' },
      { size: '34rem', top: '18vh', right: '-10rem', color: 'rgba(255, 212, 216, 0.06)' },
      { size: '28rem', bottom: '-10rem', left: '28%', color: 'rgba(255, 232, 214, 0.05)' },
    ],
  },
  features: {
    accent: '#D8E0FF',
    accentSecondary: '#C5E8DD',
    accentTertiary: '#FFF0C8',
    glow: 'rgba(216, 224, 255, 0.1)',
    glowSecondary: 'rgba(197, 232, 221, 0.08)',
    mesh: 'rgba(255, 240, 200, 0.06)',
    border: 'rgba(216, 224, 255, 0.15)',
    background: 'linear-gradient(180deg, #F7F7FF 0%, #F3F5FF 50%, #EEFAFF 100%)',
    orbs: [
      { size: '36rem', top: '4rem', left: '-10rem', color: 'rgba(216, 224, 255, 0.08)' },
      { size: '28rem', top: '24rem', right: '-8rem', color: 'rgba(197, 232, 221, 0.06)' },
      { size: '26rem', bottom: '-6rem', left: '34%', color: 'rgba(255, 240, 200, 0.05)' },
    ],
  },
  experience: {
    accent: '#C8F0D8',
    accentSecondary: '#FFD9E3',
    accentTertiary: '#FCF0D4',
    glow: 'rgba(200, 240, 216, 0.1)',
    glowSecondary: 'rgba(255, 217, 227, 0.08)',
    mesh: 'rgba(252, 240, 212, 0.06)',
    border: 'rgba(200, 240, 216, 0.15)',
    background: 'linear-gradient(180deg, #F5FFF9 0%, #F1FDF7 50%, #EDF9F5 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', right: '-8rem', color: 'rgba(200, 240, 216, 0.08)' },
      { size: '30rem', top: '30vh', left: '-10rem', color: 'rgba(255, 217, 227, 0.06)' },
      { size: '22rem', bottom: '-4rem', right: '24%', color: 'rgba(252, 240, 212, 0.05)' },
    ],
  },
  about: {
    accent: '#FFF0C8',
    accentSecondary: '#FFE8D6',
    accentTertiary: '#D8E0FF',
    glow: 'rgba(255, 240, 200, 0.1)',
    glowSecondary: 'rgba(255, 232, 214, 0.08)',
    mesh: 'rgba(216, 224, 255, 0.06)',
    border: 'rgba(255, 240, 200, 0.15)',
    background: 'linear-gradient(180deg, #FFFDF5 0%, #FFFBF0 50%, #FFF9E8 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', left: '-12rem', color: 'rgba(255, 240, 200, 0.08)' },
      { size: '28rem', top: '25vh', right: '-10rem', color: 'rgba(255, 232, 214, 0.06)' },
      { size: '22rem', bottom: '-8rem', left: '35%', color: 'rgba(216, 224, 255, 0.05)' },
    ],
  },
  download: {
    accent: '#FFE6D5',
    accentSecondary: '#E8D4FF',
    accentTertiary: '#D4F0E8',
    glow: 'rgba(255, 230, 213, 0.1)',
    glowSecondary: 'rgba(232, 212, 255, 0.08)',
    mesh: 'rgba(212, 240, 232, 0.06)',
    border: 'rgba(255, 230, 213, 0.15)',
    background: 'linear-gradient(180deg, #FFFAF7 0%, #FFF8F5 50%, #FFF6F0 100%)',
    orbs: [
      { size: '28rem', top: '-6rem', left: '-8rem', color: 'rgba(255, 230, 213, 0.08)' },
      { size: '24rem', top: '22rem', right: '-7rem', color: 'rgba(232, 212, 255, 0.06)' },
      { size: '22rem', bottom: '-6rem', left: '38%', color: 'rgba(212, 240, 232, 0.05)' },
    ],
  },
  usecases: {
    accent: '#C8F0D8',
    accentSecondary: '#FFD9E3',
    accentTertiary: '#FFF0C8',
    glow: 'rgba(200, 240, 216, 0.1)',
    glowSecondary: 'rgba(255, 217, 227, 0.08)',
    mesh: 'rgba(255, 240, 200, 0.06)',
    border: 'rgba(200, 240, 216, 0.15)',
    background: 'linear-gradient(180deg, #F5FFF9 0%, #F1FEF7 50%, #EFF9F5 100%)',
    orbs: [
      { size: '36rem', top: '-8rem', left: '-12rem', color: 'rgba(200, 240, 216, 0.08)' },
      { size: '28rem', top: '28vh', right: '-9rem', color: 'rgba(255, 217, 227, 0.06)' },
      { size: '24rem', bottom: '-5rem', left: '32%', color: 'rgba(255, 240, 200, 0.05)' },
    ],
  },
  privacy: {
    accent: '#FFD9E3',
    accentSecondary: '#D8E0FF',
    accentTertiary: '#C8F0D8',
    glow: 'rgba(255, 217, 227, 0.1)',
    glowSecondary: 'rgba(216, 224, 255, 0.08)',
    mesh: 'rgba(200, 240, 216, 0.06)',
    border: 'rgba(255, 217, 227, 0.15)',
    background: 'linear-gradient(180deg, #FFFAF8 0%, #FFF7F5 50%, #FFF4F0 100%)',
    orbs: [
      { size: '32rem', top: '-10rem', right: '-10rem', color: 'rgba(255, 217, 227, 0.08)' },
      { size: '28rem', top: '32vh', left: '-8rem', color: 'rgba(216, 224, 255, 0.06)' },
      { size: '22rem', bottom: '-6rem', right: '28%', color: 'rgba(200, 240, 216, 0.05)' },
    ],
  },
}

export const siteContent = {
  brand: {
    name: 'Luminous',
    cnName: '智慧用药助手',
    tagline: 'Glow Through Every Dose',
  },
  navItems: [
    { label: '首页', en: 'Portal', to: '/' },
    { label: '功能', en: 'Features', to: '/features' },
    { label: '体验', en: 'Experience', to: '/experience' },
    { label: '场景', en: 'Use Cases', to: '/usecases' },
    { label: '关于', en: 'About', to: '/about' },
    { label: '隐私', en: 'Privacy', to: '/privacy' },
    { label: '下载', en: 'Download', to: '/download' },
  ],
  techStackDetails: [
    {
      category: '前端框架',
      items: [
        { name: 'Flutter', version: '3.x', desc: '跨平台原生应用框架，支持 Android、iOS 与 Web' },
        { name: 'Dart', version: '3.x', desc: '应用开发语言，保证编译效率与运行时性能' },
        { name: 'GetX', version: '4.x', desc: '状态管理与路由管理库，保持代码清爽与递性' },
      ],
    },
    {
      category: '后端框架',
      items: [
        { name: 'Node.js', version: '18+', desc: '异步事件驱动的 runtime，高吞吐量 API 服务' },
        { name: 'Express', version: '4.x', desc: 'RESTful API 框架，400+ 中间件生态支持' },
        { name: 'TypeScript', version: '5.x', desc: '类型安全的 JavaScript 超集，减少运行时错误' },
      ],
    },
    {
      category: '数据存储',
      items: [
        { name: 'MongoDB', version: '6.x', desc: '用户数据存储，支持灵活的文档模型与富查询' },
        { name: 'MySQL', version: '8.x', desc: '药物信息库，保证查询稳定性与数据一致性' },
        { name: 'Redis', version: '7.x', desc: '缓存层与会话存储，加快 API 响应速度' },
      ],
    },
    {
      category: '外部服务',
      items: [
        { name: '豆包 API', version: '稳定版', desc: 'AI 解读服务，支持文本生成与理解' },
        { name: 'JWT 认证', version: 'RFC 7519', desc: '无状态身份验证，支持双 Token 刷新机制' },
        { name: 'OSS 存储', version: '云服务', desc: '配置云端备份，更换设备也不怕丢失数据' },
      ],
    },
    {
      category: '开发工具',
      items: [
        { name: 'VS Code', version: '最新', desc: '主要编辑器，支持 Flutter、TypeScript 调试' },
        { name: 'Android Studio', version: '2023+', desc: 'Android 原生部分开发与 SDK 管理' },
        { name: 'Git', version: '2.40+', desc: '版本控制，采用 GitHub Flow 分支策略' },
      ],
    },
  ],
  releaseNotes: [
    {
      version: 'Beta 3.0.0+33',
      date: '2026 年 3 月',
      highlights: [
        '识别准确率优化到 96%+',
        '官网上线使用场景与隐私政策页面',
        '支持跨设备用药数据同步',
        '新增药物相互作用查询功能',
      ],
    },
    {
      version: 'Beta 2.8.0+28',
      date: '2026 年 2 月',
      highlights: [
        '完成识别相册核心链路',
        '后端迁移至云服务器',
        '推进 RESTful API 标准化',
        '优化提醒推送延迟',
      ],
    },
    {
      version: 'Beta 2.5.0+25',
      date: '2026 年 1 月',
      highlights: [
        '上线安全辅助功能',
        '支持多用户家庭管理',
        'AI 解读准确率达到生产级别',
      ],
    },
  ],
  heroPanels: [
    {
      label: 'AI Assisted Scan',
      title: '拍照识别药盒与药板',
      body: '把包装、说明与药物名称转成可读结果，减少在凌乱药盒里来回翻找。',
    },
    {
      label: 'Safe Rhythm',
      title: '提醒、打卡与历史沉淀',
      body: '从提醒到记录都留在同一条体验链路里，不再在多个工具间切换。',
    },
    {
      label: 'Risk Signal',
      title: '安全辅助保持克制提醒',
      body: '把 AI 解读和安全辅助放在同一视野里，帮助你更稳地做出下一步判断。',
    },
  ],
  screenshotSlots: [
    {
      id: 'home-dashboard',
      title: '首页总览',
      caption: '今日提醒、快捷入口和整体节奏集中在首页主视图里。',
      fallbackScene: {
        label: 'Shot 01',
        screen: {
          tag: 'Home Pulse',
          headline: '主视图把节奏聚到一起',
          body: '提醒、识别入口和最近结果被压进同一块更容易扫读的首页面板。',
          panels: [
            { title: '今日提醒', value: '3 Pending' },
            { title: '快捷入口', value: 'Scan / Search' },
            { title: '最近结果', value: 'Album Ready' },
          ],
        },
      },
    },
    {
      id: 'medicine-recognition',
      title: '药物识别',
      caption: '从拍照到识别结果，第一时间进入信息理解链路。',
      fallbackScene: {
        label: 'Shot 02',
        screen: {
          tag: 'Camera Sync',
          headline: '识别结果已落到主链路',
          body: '拍照之后立即进入结果阅读，而不是停留在原始的拍照完成状态。',
          panels: [
            { title: '识别稳定度', value: 'Stable' },
            { title: '药物名称', value: 'Matched' },
            { title: '下一步', value: 'AI Readout' },
          ],
        },
      },
    },
    {
      id: 'manual-search-detail',
      title: '手动搜索与药物信息',
      caption: '无法拍照时，依旧能快速检索并查看药物详情。',
      fallbackScene: {
        label: 'Shot 03',
        screen: {
          tag: 'Query Layer',
          headline: '备用搜索也保持完整阅读感',
          body: '手动搜索不会把体验打断，结果依旧会接续到药物信息与 AI 解读。',
          panels: [
            { title: 'Search', value: 'Quick Query' },
            { title: 'Drug Detail', value: 'Readable Card' },
            { title: 'AI Notes', value: 'Optional' },
          ],
        },
      },
    },
    {
      id: 'today-reminders',
      title: '今日提醒',
      caption: '提醒与状态收敛成清晰的当日视图，节奏一眼可读。',
      fallbackScene: {
        label: 'Shot 04',
        screen: {
          tag: 'Rhythm Board',
          headline: '今天该做什么一眼就能看清',
          body: '提醒时间、完成状态和剩余任务被压缩进清爽的日内视图。',
          panels: [
            { title: 'Pending', value: '03 Reminders' },
            { title: 'Progress', value: '2 / 3 Done' },
            { title: 'Next Alert', value: '20:30' },
          ],
        },
      },
    },
    {
      id: 'safety-assist',
      title: '安全辅助',
      caption: '单药建议与双药相互作用保持克制提示，不越界。',
      fallbackScene: {
        label: 'Shot 05',
        screen: {
          tag: 'Risk Signal',
          headline: '安全提示先说边界再说结论',
          body: '单药建议和两药相互作用保持谨慎表达，让你知道什么时候继续核对。',
          panels: [
            { title: 'Single Drug', value: 'Gentle Prompt' },
            { title: 'Interaction', value: 'Check Needed' },
            { title: 'AI Tone', value: 'Assist Only' },
          ],
        },
      },
    },
    {
      id: 'recognition-album',
      title: '识别相册',
      caption: '缩略图和识别结果被沉淀下来，方便回看与复核。',
      fallbackScene: {
        label: 'Shot 06',
        screen: {
          tag: 'Memory Fold',
          headline: '识别条目会留下轻量档案',
          body: '缩略图、结果摘要与关键信息被打包成更像私人资料夹的回看体验。',
          panels: [
            { title: 'Thumbs', value: 'Visual History' },
            { title: 'Results', value: 'Stored Summary' },
            { title: 'Recall', value: 'Easy Review' },
          ],
        },
      },
    },
  ],
  featuredShotIds: ['home-dashboard', 'medicine-recognition', 'safety-assist'],
  downloadGalleryIds: [
      'home-dashboard',
      'medicine-recognition',
      'manual-search-detail',
      'today-reminders',
      'safety-assist',
      'recognition-album',
      'my-profile',
    ],
  homeHighlights: [
    {
      value: '01',
      title: '识别不是孤立功能',
      body: '识别、理解、保存与提醒被设计成连续旅程，而不是四个分散按钮。',
    },
    {
      value: '02',
      title: 'UI 像未来感工具舱',
      body: '深浅色双模式与七套主题并存，视觉有辨识度但不牺牲日常可读性。',
    },
    {
      value: '03',
      title: 'AI 只做辅助，不越界',
      body: '信息解释与风险提示被明确定位为辅助参考，不替代专业医疗建议。',
    },
  ],
  featureGroups: [
    {
      orbit: 'Vision Layer',
      title: '识别与理解',
      lead: '先把药盒、药板与药物名称看明白，再把信息组织成真正可读的结果。',
      cards: [
        {
          label: 'Photo Recognition',
          title: '药物识别',
          body: '通过相机快速读取药物外观与包装信息，进入后续理解流程。',
          detail:
            '识别结果会直接衔接到药物信息与 AI 解读，不需要在多页之间反复跳转。',
          bullets: ['药盒拍摄', '结果回看', '轻量历史沉淀'],
          facts: ['识别后可直达详情', '支持后续结果复查'],
          span: 'wide',
        },
        {
          label: 'AI Readout',
          title: 'AI 智能解读',
          body: '把机械条目转成更容易理解的解释语气，适合快速浏览。',
          detail:
            '输出保持辅助边界，重点呈现关键信息与注意事项，帮助先读懂再决策。',
          bullets: ['重点提炼', '注意事项', '阅读负担更低'],
          facts: ['强调风险边界', '不替代诊断结论'],
        },
        {
          label: 'Drug Library',
          title: '药物信息',
          body: '对识别结果继续展开药物信息，减少跳出搜索的次数。',
          detail:
            '无论是识别进入还是手动检索，最终都会收敛到统一的药物信息阅读界面。',
          bullets: ['名称信息', '基础说明', '后续查看入口'],
          facts: ['识别/搜索双入口统一', '结构化信息可回看'],
        },
      ],
    },
    {
      orbit: 'Control Layer',
      title: '主动管理',
      lead: '把主动搜索、提醒和每日打卡放进同一节奏里，让工具真正参与日常。',
      cards: [
        {
          label: 'Manual Search',
          title: '手动搜索',
          body: '当拍照不方便时，直接用名称检索药物，维持体验链路不断裂。',
          detail:
            '搜索入口与识别入口采用同一结果流转逻辑，避免形成两套不一致体验。',
          bullets: ['快速检索', '备用入口', '结果接续 AI 解读'],
          facts: ['搜索结果可直接选药', '适配无图场景'],
        },
        {
          label: 'Reminder Core',
          title: '用药提醒',
          body: '把需要记住的时间点压缩成干净的提示流，减少漏服焦虑。',
          detail:
            '提醒状态会和首页、今日提醒视图联动，完成情况可以在同一处持续追踪。',
          bullets: ['今日提醒', '状态可见', '节奏更稳定'],
          facts: ['提醒与首页联动', '支持完成状态追踪'],
          span: 'wide',
        },
        {
          label: 'Dose Check',
          title: '用药打卡',
          body: '从提醒到确认形成闭环，帮助你知道今天到底有没有完成。',
          detail:
            '打卡结果会进入日内进度视图，避免“提醒已看但是否执行”这类断层。',
          bullets: ['完成标记', '连续记录', '一眼可读'],
          facts: ['日内进度可视化', '连续行为可沉淀'],
        },
      ],
    },
    {
      orbit: 'Safety Layer',
      title: '安全与沉淀',
      lead: '识别相册和安全辅助不是附属页，而是帮助你回看与谨慎判断的重要层。',
      cards: [
        {
          label: 'Safe Assist',
          title: '安全辅助',
          body: '围绕单药建议与组合相互作用提供克制提示，让风险感知更靠前。',
          detail:
            '支持单药建议与双药相互作用两种模式，并明确提示仅作为辅助参考。',
          bullets: ['单药建议', '双药相互作用', '提示保持克制'],
          facts: ['支持模式切换', '云端 AI 查询'],
          span: 'wide',
        },
        {
          label: 'Recognition Album',
          title: '识别相册',
          body: '把缩略图与识别结果沉淀成可回看的档案，方便回忆与复核。',
          detail:
            '历史条目优先保存轻量摘要与关键字段，确保回看速度和信息定位效率。',
          bullets: ['缩略图回看', '识别结果聚合', '更像私人资料夹'],
          facts: ['轻量存储优先', '支持结果复核'],
        },
        {
          label: 'History Glow',
          title: '历史条目',
          body: '把散落在过去的识别、查看与提醒记录串成连续轨迹。',
          detail:
            '历史不是堆列表，而是帮助你快速回到“这次查看之后做了什么”的上下文。',
          bullets: ['时间脉络', '结果可追溯', '降低重复操作'],
          facts: ['按时间串联行为', '降低重复识别成本'],
        },
      ],
    },
  ],
  experienceScenes: [
    {
      label: 'Scene 01',
      en: 'Scan the Package',
      shotId: 'medicine-recognition',
      title: '拍照，先把陌生药盒看清楚',
      body: '镜头对准包装之后，系统先完成药物识别，再把结果引导到后续的信息理解层。',
      points: ['识别结果优先出现', '名称与药物信息衔接', '从第一步就能继续阅读'],
      screen: {
        tag: 'Camera Sync',
        headline: '识别结果已生成',
        body: '包装、名称与关键提示聚合在同一张信息面板里。',
        panels: [
          { title: '结果标签', value: 'Scan Stable' },
          { title: 'AI 解读', value: 'Readable Summary' },
          { title: '后续动作', value: '保存 / 查看信息' },
        ],
      },
    },
    {
      label: 'Scene 02',
      en: 'Read and Save',
      shotId: 'recognition-album',
      title: '理解结果，然后沉淀到自己的相册里',
      body: '识别完并不是终点，AI 解读、药物信息和相册沉淀会把这次识别留下来。',
      points: ['信息阅读压力更低', '可回看缩略图与结果', '不再反复拍同一个药盒'],
      screen: {
        tag: 'Memory Fold',
        headline: '识别结果进入资料夹',
        body: '缩略图和结果摘要被保留，方便以后快速回看。',
        panels: [
          { title: '识别相册', value: 'Visual History' },
          { title: '药物信息', value: 'Drug Detail' },
          { title: 'AI 提炼', value: 'Quick Notes' },
        ],
      },
    },
    {
      label: 'Scene 03',
      en: 'Stay on Rhythm',
      shotId: 'today-reminders',
      title: '提醒、打卡与安全辅助接上日常节奏',
      body: '当药物被识别并留下记录后，真正重要的是它如何继续陪伴日常的用药节奏。',
      points: ['提醒转成今日视图', '打卡形成行为闭环', '安全辅助在关键时机出现'],
      screen: {
        tag: 'Signal Keeper',
        headline: '今天的节奏正在发光',
        body: '提醒、完成状态与安全提示被压缩成清晰的状态面板。',
        panels: [
          { title: '今日提醒', value: '03 Pending' },
          { title: '打卡进度', value: '2 / 3 Done' },
          { title: '安全辅助', value: 'Low Risk Alert' },
        ],
      },
    },
  ],
  featuresMeta: {
    status: 'Core Features',
    title: '三层递进的功能体系',
    body:
      '从扫描识别、智能管理到安全辅助，每项功能都是为了让用药变得更简单、更安全、更贴心。了解完整功能后，来看看产品设计理念。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '体验设计细节',
      note: 'Next: Experience',
      to: '/experience',
    },
  },
  experienceMeta: {
    status: 'Experience Design',
    title: '不只看得舒服，更要用得贴心',
    body:
      '深浅主题自由切换，打造属于你的用药生活。了解完设计理念后，敬请期待后续上线。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '查看使用场景',
      note: 'Next: Use Cases',
      to: '/usecases',
    },
  },
  usecasesMeta: {
    status: 'Use Cases',
    title: '贴近生活的使用场景',
    body:
      '从日常服药到突发状况，了解 Luminous 如何全面融入你的生活。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '关于我们',
      note: 'Next: About',
      to: '/about',
    },
  },
  aboutMeta: {
    status: 'About Us',
    title: '关于开发者与技术',
    body:
      '这是基于 Flutter 与 Node.js 的全栈作品，致力于为用户在移动端提供现代化医药助手。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '隐私政策',
      note: 'Next: Privacy',
      to: '/privacy',
    },
  },
  privacyMeta: {
    status: 'Privacy Policy',
    title: '透明、克制的数据处理',
    body:
      '作为辅助工具，我们尊重用户隐私。各项权限仅在必要时请求，不会滥用数据。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '返回首页',
      note: 'Back Home',
      to: '/',
    },
  },
  homeMeta: {
    status: 'Welcome',
    title: '三重功能，层层护航',
    body:
      '从识别、管理到安全辅助，让每个用药环节都有所依靠。不是功能的堆砌，而是用心的设计。',
    primaryAction: {
      label: '即将上线',
      note: 'Get Started',
      to: '/download',
    },
    secondaryAction: {
      label: '了解更多功能',
      note: 'Next: Features',
      to: '/features',
    },
  },
  downloadMeta: {
    status: 'Android Beta',
    title: '把识别、提醒与安全辅助装进同一个轻量工具箱',
    body:
      '官网默认保留品牌与体验叙事；当运行时媒体服务在线时，这里会直接切换成真实 APK 下载、版本号、更新时间和截图画廊。',
    primaryAction: {
      label: '目前仅为展示',
      note: 'Runtime Manifest',
      href: '',
    },
    secondaryAction: {
      label: '返回首页',
      note: 'Back Home',
      to: '/',
    },
    platforms: [
      {
        name: 'Android',
        status: '当前主方向',
        detail: '当前提供 Android 内测版本，优先验证主流程稳定性与页面体验一致性。',
      },
      {
        name: 'Privacy',
        status: '辅助型产品',
        detail: '识别、提醒与 AI 解读都以辅助为核心，不包装成诊断工具。',
      },
      {
        name: 'Backend Architecture',
        status: '双数据库架构',
        detail: '服务端采用 Express + JWT 认证，MongoDB 存储用户数据，MySQL 承载药物查询数据。',
      },
      {
        name: 'API Design',
        status: 'RESTful + 云服务器',
        detail: '后端已转向云服务器部署，接口按 RESTful 规范迭代，替代旧云函数路径。',
      },
    ],
  },
  faqItems: [
    {
      question: 'Luminous 是医疗诊断产品吗？',
      answer:
        '不是。它更像一个未来感的智慧用药工具，把识别、提醒、资料沉淀和安全辅助组织在一起。AI 解读仅作辅助参考。',
    },
    {
      question: '什么时候可以体验？',
      answer:
        '软件正在紧张打磨中，敬请期待后续的正式上线。',
    },
    {
      question: '现在的后端架构是什么？',
      answer:
        '当前服务端使用 Express + JWT 认证，MongoDB 负责用户数据，MySQL 负责药物查询数据，并在云服务器部署后逐步替换旧云函数入口。',
    },
    {
      question: '识别后能留下什么内容？',
      answer:
        '产品方向上更偏向保留缩略图、识别结果和可回看的信息摘要，让历史条目更轻、更好整理。',
    },
    {
      question: '主题支持哪些模式？',
      answer:
        '应用支持浅色/深色两种显示模式，并提供柔岚、月雾、神树、虚霭、霜尘、浅砂、烟波共七种主题风格。',
    },
    {
      question: '安全辅助会不会替代专业建议？',
      answer:
        '不会。安全辅助的目标是把风险感知提前，用更克制的方式提醒你继续核对，而不是直接替代医生或药师建议。',
    },
    {
      question: '我的用药数据会被卖给第三方吗？',
      answer:
        '绝不会。我们签订了严格的数据处理协议，用户数据只用于支持个人的药物管理。你可以随时查看和删除自己的数据，也可以在隐私页面了解我们的完整政策。',
    },
    {
      question: '支持离线使用吗？',
      answer:
        '识别、药物信息查询和提醒在本地是可以离线工作的。AI 解读和安全辅助需要网络连接。我们正在规划更多的本地优先功能。',
    },
    {
      question: '如何导出我的所有数据？',
      answer:
        '在应用设置中，有"数据与隐私"选项，可以一键导出你的全部识别结果、提醒历史、打卡记录和识别相册。导出的格式是通用的标准格式。',
    },
    {
      question: '支持家庭成员共享吗？',
      answer:
        '支持。你可以为家庭成员创建账户或邀请他们加入。家长/护理者可以监督家人的提醒与打卡情况，同时保护隐私——每个成员有自己的账户与数据。',
    },
    {
      question: 'iOS 版本何时上线？',
      answer:
        '目前我们优先打磨 Android 版本。iOS 版本已在规划中，会在 Android 核心体验稳定后推进，预计在下半年启动开发。',
    },
    {
      question: '可以与医生共享我的数据吗？',
      answer:
        '可以。应用支持生成一份加密的数据报告，你可以选择性地分享给医生或药师。医生可以看到你的用药历史与提醒完成情况，但无法修改或删除你的数据。',
    },
  ],
  footerLinks: [
    { label: '功能全景', to: '/features' },
    { label: '体验叙事', to: '/experience' },
    { label: '使用场景', to: '/usecases' },
    { label: '隐私政策', to: '/privacy' },
    { label: '产品预热', to: '/download' },
  ],
  useCasesContent: {
    title: '使用场景',
    subtitle: '看看 Luminous 如何融入不同人群的日常用药节奏',
    scenarios: [
      {
        icon: '👵',
        segment: '中老年慢病患者',
        title: '多种慢病，用药不乱',
        description: '长期用药的中老年患者常面临识别多种药物、记住复杂提醒的挑战。',
        story: [
          {
            step: '清晨识别',
            detail: '五六种药物堆在一起，拍张照片，Luminous 自动分类识别，一目了然。',
          },
          {
            step: '实时提醒',
            detail: '系统会按时间和分类给出今日服药清单，减少遗漏与重复。',
          },
          {
            step: '安全检查',
            detail: '多种药物组合时，系统会提示可能的相互作用，避免不必要风险。',
          },
          {
            step: '历史回查',
            detail: '用药历史被自动沉淀，就诊时出示给医生，加速沟通效率。',
          },
        ],
        benefits: [
          '减少识别错误和遗漏风险',
          '提高医患沟通效率',
          '自动留下用药档案，方便回看',
          '安全辅助支持组合用药管理',
        ],
      },
      {
        icon: '🏥',
        segment: '术后恢复患者',
        title: '阶段用药，循序渐进',
        description: '术后患者需要按医嘱阶段调整用药，但容易忘记何时更换药物。',
        story: [
          {
            step: '建立计划',
            detail: '每个阶段的药物组合都被识别，提醒的时间点根据康复进度调整。',
          },
          {
            step: '每日确认',
            detail: '打卡机制让患者主动确认完成，医生可通过应用看到依从性数据。',
          },
          {
            step: '风险提示',
            detail: '如果药物有明显禁忌，系统会提前告知，患者可联系医生确认。',
          },
          {
            step: '预约回访',
            detail: '当需要调整用药时，系统会关联到就诊时间，加速医患协作。',
          },
        ],
        benefits: [
          '按进度自动调整提醒',
          '医患间的实时数据同步',
          '减少用药遗漏导致的康复延误',
          '清晰的用药依从性记录',
        ],
      },
      {
        icon: '👨‍⚕️',
        segment: '家庭护理照顾者',
        title: '代理管理，责任清晰',
        description: '家庭成员为老人或患者代理管理多项用药任务，需要清晰分工。',
        story: [
          {
            step: '集中识别',
            detail: '护理者统一拍摄和识别家人的药物，建立清晰的药物大账本。',
          },
          {
            step: '分配提醒',
            detail: '系统支持为多个家人分别建立提醒，護理者一览全局。',
          },
          {
            step: '完成记录',
            detail: '每次打卡都被记录，護理者能看到每个家人的服药情况。',
          },
          {
            step: '共享与回报',
            detail: '必要时可共享给其他护理者或医生，确保信息不漏失。',
          },
        ],
        benefits: [
          '多人多药物的集中管理',
          '清晰的职责分工与记录',
          '减少护理沟通成本',
          '方便就医时提供完整用药史',
        ],
      },
      {
        icon: '📋',
        segment: '基层卫生工作者',
        title: '社区健康，精准追踪',
        description: '社区医生需要追踪辖区患者的用药依从性，但数据采集困难。',
        story: [
          {
            step: '社区建档',
            detail: 'Luminous 可作为社区随访的辅助工具，采集真实的服药数据。',
          },
          {
            step: '数据上报',
            detail: '患者数据加密后汇总到社区系统，支持统计与质量评估。',
          },
          {
            step: '风险预警',
            detail: '系统识别高风险患者（如药物相互作用），医生可主动干预。',
          },
          {
            step: '随访反馈',
            detail: '医生的调药建议可回写到应用，形成闭环管理。',
          },
        ],
        benefits: [
          '真实的患者服药数据',
          '减少社区随访的工作量',
          '快速识别高风险患者',
          '支持精准健康干预',
        ],
      },
    ],
  },
  privacyContent: {
    title: '隐私与安全政策',
    subtitle: '你的用药数据只属于你，我们用技术与流程确保它安全可控',
    sections: [
      {
        heading: '数据收集与使用',
        items: [
          {
            title: '我们收集什么',
            detail: '用户账号信息（用于身份验证）、用药识别结果、用药提醒与打卡记录、识别相册与历史数据。',
          },
          {
            title: '我们不收集什么',
            detail: '医疗诊断结论、位置信息、通讯录或其他隐私敏感数据。每次识别时都会明确告知用户数据使用方式。',
          },
          {
            title: '数据仅用于',
            detail: '支持用户个人的药物管理与提醒功能；在用户主动选择时，支持与医生或护理者的信息共享；产品改进与安全分析（完全匿名）。',
          },
        ],
      },
      {
        heading: '数据安全与加密',
        items: [
          {
            title: '传输安全',
            detail: '所有网络通信均使用 TLS 1.2+ 加密，确保数据在途中不被截获或篡改。',
          },
          {
            title: '存储安全',
            detail: 'MongoDB 中的用户数据经过加密存储；识别相册的图片文件存放在安全的对象存储中，访问控制严格。',
          },
          {
            title: '访问控制',
            detail: '用户数据只能通过认证用户本人的账号访问；任何数据共享都需要用户明确授权。',
          },
          {
            title: '定期安全审计',
            detail: '后端服务定期进行安全漏洞扫描与渗透测试，确保防御体系保持有效。',
          },
        ],
      },
      {
        heading: '用户权利',
        items: [
          {
            title: '查看权利',
            detail: '用户可随时查看和导出自己的全部用药数据，包括识别结果、提醒记录、打卡历史等。',
          },
          {
            title: '删除权利',
            detail: '用户可删除任何不需要的数据；删除操作是永久的，我们不再保留备份副本。',
          },
          {
            title: '撤销授权',
            detail: '如果用户之前授权与医生或护理者共享数据，可随时撤销，已共享的数据将立即失效。',
          },
          {
            title: '账户注销',
            detail: '用户可随时注销账户，相关的全部数据会按照法律要求的时间表安全删除。',
          },
        ],
      },
      {
        heading: 'AI 与隐私',
        items: [
          {
            title: 'AI 解读的数据处理',
            detail: '用户选择启用 AI 解读时，识别结果会被发送给 AI 服务提供商（当前使用豆包 API）进行处理，然后返回解释文本。',
          },
          {
            title: '第三方服务协议',
            detail: '我们与豆包签订数据处理协议，保证 AI 提供商不存储或二次使用识别数据，处理完成即刻删除。',
          },
          {
            title: '本地优先选项',
            detail: '用户也可以选择不启用 AI 解读，只使用本地的结构化药物库，彻底避免数据外发。',
          },
        ],
      },
      {
        heading: '合规性声明',
        items: [
          {
            title: '产品定位',
            detail: 'Luminous 不是医疗诊断工具，而是辅助性的用药管理应用。任何 AI 解读或安全提示都不能替代医生或药师的专业建议。',
          },
          {
            title: '监管遵循',
            detail: '应用符合《个人信息保护法》与《网络安全法》的要求；涉及卫生数据的部分遵循相关行业规范。',
          },
          {
            title: '责任限制',
            detail: '我们对用户遵循或忽视应用提醒等行为不承担医疗责任；用户的用药决策最终应基于医生或药师的指导。',
          },
        ],
      },
      {
        heading: '隐私政策更新',
        items: [
          {
            title: '变更通知',
            detail: '如果我们需要修改隐私政策，会提前通知用户；用户可以选择接受或停用服务。',
          },
          {
            title: '联系我们',
            detail: '如有关于隐私或安全的疑问，用户可通过应用内的反馈功能或官方邮箱联系我们。',
          },
        ],
      },
    ],
  },
}
