import albumImage from '../assets/识别相册.png'
import homeImage from '../assets/主页.png'
import profileImage from '../assets/我的.png'
import safetyImage from '../assets/安全辅助.png'
import searchImage from '../assets/手动搜索.png'
import recognitionImage from '../assets/识别.png'
import settingsLightImage from '../assets/Screenshot_1774437088.png'

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
    caption: '首页把下一条提醒、常用功能入口和今日提醒放进同一块主视图里。',
    imageUrl: homeImage,
    thumbUrl: homeImage,
    available: true,
  },
  {
    id: 'medicine-recognition',
    title: '识别结果页',
    caption: '识别失败、重新识别、添加到相册和继续搜索都会留在同一张结果页里。',
    imageUrl: recognitionImage,
    thumbUrl: recognitionImage,
    available: true,
  },
  {
    id: 'manual-search-detail',
    title: '手动搜索',
    caption: '搜索页支持关键词检索、常用搜索和最近搜索记录，适合拍照不方便的场景。',
    imageUrl: searchImage,
    thumbUrl: searchImage,
    available: true,
  },
  {
    id: 'today-reminders',
    title: '首页中的今日提醒',
    caption: '当前素材里，今日提醒以首页卡片的形式出现，重点是下一条提醒和当日安排的快速查看。',
    imageUrl: homeImage,
    thumbUrl: homeImage,
    available: true,
  },
  {
    id: 'safety-assist',
    title: '安全辅助',
    caption: '单药建议与两药相互作用共用一套安全辅助界面，强调辅助判断而不是直接下结论。',
    imageUrl: safetyImage,
    thumbUrl: safetyImage,
    available: true,
  },
  {
    id: 'recognition-album',
    title: '识别相册',
    caption: '识别记录可在相册里轻量归档，并区分本地保存与登录后同步的状态。',
    imageUrl: albumImage,
    thumbUrl: albumImage,
    available: true,
  },
  {
    id: 'my-profile',
    title: '我的与设置入口',
    caption: '个人页把登录状态、常用入口和更多设置集中在一起，适合作为偏好管理的中枢页。',
    imageUrl: profileImage,
    thumbUrl: profileImage,
    available: true,
  },
  {
    id: 'settings-theme',
    title: '主题与显示设置',
    caption: '设置页可以切换跟随系统、浅色、深色，并配置柔岚、月雾、神树、虚霭、浅砂五套主题。',
    imageUrl: settingsLightImage,
    thumbUrl: settingsLightImage,
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



