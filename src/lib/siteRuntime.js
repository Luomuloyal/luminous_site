const DEFAULT_MANIFEST = {
  generatedAt: null,
  download: {
    label: '',
    channel: '',
    version: '',
    buildNumber: null,
    sizeBytes: 0,
    updatedAt: null,
    url: '',
    available: false,
  },
  screenshots: [],
}

const LOCAL_SCREENSHOTS = [
  {
    id: 'home-dashboard',
    title: '首页总览',
    caption: '今日提醒、快捷入口和整体节奏集中在首页主视图里。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d5.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d5.png',
    available: true,
  },
  {
    id: 'medicine-recognition',
    title: '药物识别',
    caption: '从拍照到识别结果，第一时间进入信息理解链路。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d0.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d0.png',
    available: true,
  },
  {
    id: 'manual-search-detail',
    title: '手动搜索与药物信息',
    caption: '无法拍照时，依旧能快速检索并查看药物详情。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d2.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d2.png',
    available: true,
  },
  {
    id: 'today-reminders',
    title: '今日提醒',
    caption: '提醒与状态收敛成清晰的当日视图，节奏一眼可读。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d1.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d1.png',
    available: true,
  },
  {
    id: 'safety-assist',
    title: '安全辅助',
    caption: '单药建议与双药相互作用保持克制提示，不越界。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d3.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11cee81d8282b3eb9d3.png',
    available: true,
  },
  {
    id: 'recognition-album',
    title: '识别相册',
    caption: '缩略图和识别结果被沉淀下来，方便回看与复核。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d4.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d4.png',
    available: true,
  },
  {
    id: 'my-profile',
    title: '个人中心',
    caption: '个人设置与偏好管理。',
    imageUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d5.png',
    thumbUrl: 'https://pic1.imgdb.cn/item/69d1e11dee81d8282b3eb9d5.png',
    available: true,
  }
]

export function createEmptySiteManifest() {
  return {
    generatedAt: DEFAULT_MANIFEST.generatedAt,
    download: { ...DEFAULT_MANIFEST.download },
    screenshots: LOCAL_SCREENSHOTS,
  }
}

export function resolveRuntimeUrl(pathname = '') {
  if (!pathname) return ''
  if (/^https?:\/\//i.test(pathname)) return pathname
  return pathname
}

export async function fetchSiteManifest(signal) {
  // Bypassing API to save server load
  return {
    generatedAt: new Date().toISOString(),
    download: {
      ...DEFAULT_MANIFEST.download,
      available: false,
    },
    screenshots: LOCAL_SCREENSHOTS,
  }
}

export function formatBytes(bytes) {
  return '暂不提供下载'
}

export function formatVersion(download) {
  return '功能探索中'
}

export function formatUpdatedAt(value) {
  return '暂停更新'
}



