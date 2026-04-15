<script setup>
import { computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { pageThemeTokens, siteContent } from '../content/siteContent'
import { useSiteManifest } from '../composables/useSiteManifest'
import { useSmoothScroll } from '../composables/useSmoothScroll'
import { animationLevel, isAnimationEnabled, canShowBgFlow } from '../composables/useAnimationLevel'
import PageBackdrop from './PageBackdrop.vue'
import TopNav from './TopNav.vue'

useSmoothScroll()
useSiteManifest()

const route = useRoute()

const currentTheme = computed(() => pageThemeTokens[route.meta?.themeKey || 'home'])

const shellStyle = computed(() => ({
  '--route-accent': currentTheme.value.accent,
  '--route-accent-secondary': currentTheme.value.accentSecondary,
  '--route-accent-tertiary': currentTheme.value.accentTertiary,
  '--route-glow': currentTheme.value.glow,
  '--route-glow-secondary': currentTheme.value.glowSecondary,
  '--route-mesh': currentTheme.value.mesh,
  '--route-border': currentTheme.value.border,
  background: currentTheme.value.background,
}))

function updateBodyClasses() {
  document.body.classList.remove(
    'animation-level-none',
    'animation-level-low',
    'animation-level-medium',
    'animation-level-high',
    'has-bg-animation',
    'has-card-animation'
  )
  
  document.body.classList.add(`animation-level-${animationLevel.value}`)
  
  if (canShowBgFlow.value) {
    document.body.classList.add('has-bg-animation')
  }
  
  if (isAnimationEnabled.value) {
    document.body.classList.add('has-card-animation')
  }
}

onMounted(() => {
  updateBodyClasses()
})

watch(animationLevel, () => {
  updateBodyClasses()
  ScrollTrigger.refresh()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    ScrollTrigger.refresh()
  },
)
</script>

<template>
  <div class="site-shell" :style="shellStyle">
    <PageBackdrop :theme="currentTheme" />
    <TopNav :brand="siteContent.brand" :nav-items="siteContent.navItems" />

    <main class="site-main">
      <RouterView v-slot="{ Component, route: viewRoute }">
        <Transition name="route-shift" mode="out-in">
          <component :is="Component" :key="viewRoute.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <div class="site-footer__inner">
        <RouterLink to="/" class="site-footer__brand">
          <img src="/favicon.svg" alt="" width="36" height="36" />
          <div>
            <strong>{{ siteContent.brand.name }}</strong>
            <span>{{ siteContent.brand.cnName }}</span>
          </div>
        </RouterLink>

        <div class="site-footer__copy">
          <p>
            围绕识别、提醒、历史记录与安全辅助，持续提供清晰一致的产品信息。
          </p>
          <small>
            AI 解读与安全辅助仅作信息参考，不替代专业医生或药师建议。
          </small>
        </div>

        <nav class="site-footer__links" aria-label="Footer">
          <RouterLink
            v-for="item in siteContent.footerLinks"
            :key="item.to"
            :to="item.to"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <div class="site-footer__beian">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          津ICP备2026003615号
        </a>
        <span aria-hidden="true"> | </span>
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=12011602300919"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png" alt="" width="16" height="16" />
          津公网安备12011602300919号
        </a>
      </div>
    </footer>
  </div>
</template>
