import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'Luminous',
      themeKey: 'home',
    },
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('../pages/FeaturesPage.vue'),
    meta: {
      title: '功能全景',
      themeKey: 'features',
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../pages/ExperiencePage.vue'),
    meta: {
      title: '体验叙事',
      themeKey: 'experience',
    },
  },
  {
    path: '/usecases',
    name: 'usecases',
    component: () => import('../pages/UseCasesPage.vue'),
    meta: {
      title: '使用场景',
      themeKey: 'usecases',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue'),
    meta: {
      title: '关于我们',
      themeKey: 'about',
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../pages/PrivacyPage.vue'),
    meta: {
      title: '隐私与安全',
      themeKey: 'privacy',
    },
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../pages/DownloadPage.vue'),
    meta: {
      title: '下载与内测',
      themeKey: 'download',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      left: 0,
    }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title ? `${to.meta.title} · Luminous` : 'Luminous · 智慧用药助手'
  document.title = title
})

export default router
