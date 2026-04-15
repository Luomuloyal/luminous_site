<script setup>
import { onBeforeUnmount, ref, watch, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { pageThemeTokens } from '../content/siteContent'
import { animationLevel, animationLevels, setAnimationLevel } from '../composables/useAnimationLevel'

const props = defineProps({
  brand: {
    type: Object,
    required: true,
  },
  navItems: {
    type: Array,
    required: true,
  },
})

const route = useRoute()
const menuOpen = ref(false)
const animationDropdownOpen = ref(false)

const currentTheme = computed(() => pageThemeTokens[route.meta?.themeKey || 'home'])

const navStyle = computed(() => ({
  '--nav-accent': currentTheme.value.accent,
  '--nav-accent-secondary': currentTheme.value.accentSecondary,
}))

const currentAnimationLabel = computed(() => {
  const level = animationLevels.find(l => l.value === animationLevel.value)
  return level ? level.label : '高'
})

function handleAnimationLevelChange(level) {
  setAnimationLevel(level)
  animationDropdownOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    animationDropdownOpen.value = false
  },
)

watch(menuOpen, (value) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.classList.toggle('site-nav-menu-open', value)
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.classList.remove('site-nav-menu-open')
})
</script>

<template>
  <header class="site-nav" :style="navStyle">
    <div class="site-nav__inner">
      <RouterLink to="/" class="site-nav__brand">
        <img src="/favicon.svg" alt="" width="34" height="34" />
        <div>
          <strong>{{ props.brand.name }}</strong>
          <span>{{ props.brand.tagline }}</span>
        </div>
      </RouterLink>

      <nav class="site-nav__links" aria-label="Primary">
        <RouterLink
          v-for="item in props.navItems"
          :key="item.to"
          :to="item.to"
          class="site-nav__link"
          :class="{ 'is-active': route.path === item.to }"
        >
          <span>{{ item.label }}</span>
          <small>{{ item.en }}</small>
        </RouterLink>
      </nav>

      <div class="site-nav__actions">
        <div class="animation-selector">
          <button
            type="button"
            class="animation-selector__button"
            :aria-expanded="animationDropdownOpen ? 'true' : 'false'"
            aria-label="选择动画程度"
            @click="animationDropdownOpen = !animationDropdownOpen"
          >
            <span class="animation-selector__label">动画</span>
            <span class="animation-selector__value">{{ currentAnimationLabel }}</span>
          </button>
          <div v-if="animationDropdownOpen" class="animation-selector__dropdown">
            <button
              v-for="level in animationLevels"
              :key="level.value"
              type="button"
              class="animation-selector__option"
              :class="{ 'is-active': animationLevel === level.value }"
              @click="handleAnimationLevelChange(level.value)"
            >
              <span class="animation-selector__option-label">{{ level.label }}</span>
              <span class="animation-selector__option-desc">{{ level.description }}</span>
            </button>
          </div>
        </div>
        <RouterLink to="/download" class="site-nav__cta">
          <span>查看内测状态</span>
          <small>Android Beta</small>
        </RouterLink>

        <button
          type="button"
          class="site-nav__toggle"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Transition name="nav-scrim">
      <button
        v-if="menuOpen"
        type="button"
        class="site-nav__scrim"
        aria-label="Close navigation"
        @click="menuOpen = false"
      ></button>
    </Transition>

    <Transition name="nav-float">
      <div v-if="menuOpen" class="site-nav__mobile-wrap">
        <div class="site-nav__mobile">
          <div class="site-nav__mobile-header">
            <div>
              <strong>{{ props.brand.name }}</strong>
              <span>{{ props.brand.tagline }}</span>
            </div>
            <small>Android Beta</small>
          </div>

          <RouterLink
            v-for="item in props.navItems"
            :key="item.to"
            :to="item.to"
            class="site-nav__mobile-link"
            :class="{ 'is-active': route.path === item.to }"
          >
            <div>
              <strong>{{ item.label }}</strong>
              <span>{{ item.en }}</span>
            </div>
            <small>Open</small>
          </RouterLink>

          <RouterLink to="/download" class="site-nav__mobile-cta">
            <span>查看内测状态</span>
            <small>Android Beta</small>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
