<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  brand: {
    type: Object,
    required: true,
  },
  panels: {
    type: Array,
    required: true,
  },
  highlights: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="hero-scene hero-scene--2d">
    <div class="hero-scene__inner">
      <div class="hero-scene__copy">
        <span class="hero-scene__eyebrow" data-hero-item>Official Website</span>
        <div class="hero-title">
          <span class="hero-title-line1" data-hero-item>{{ props.brand.name }}</span>
          <span class="hero-title-line2" data-hero-item>{{ props.brand.cnName }}</span>
        </div>
        <p class="hero-scene__lead" data-hero-item>
          这次官网重构回到真实源码能力之上，把查药、识药、提醒、打卡、AI 解读和安全辅助整理成一条
          更温和、更清楚、也更可信的产品叙事。
        </p>

        <div class="hero-scene__actions" data-hero-item>
          <RouterLink to="/features" class="hero-scene__button hero-scene__button--primary">
            <span>查看功能全景</span>
            <small>Features Atlas</small>
          </RouterLink>
          <RouterLink to="/download" class="hero-scene__button hero-scene__button--secondary">
            <span>进入下载页</span>
            <small>Android Beta</small>
          </RouterLink>
        </div>
        
        <!-- Decorative blobs -->
        <div class="hero-blobs">
          <div class="blob blob-1"></div>
          <div class="blob blob-2"></div>
          <div class="blob blob-3"></div>
          <div class="blob blob-4"></div>
        </div>

        <div class="hero-scene__highlights" data-hero-item>
          <article v-for="item in props.highlights" :key="item.value" class="hero-scene__highlight">
            <strong>{{ item.value }}</strong>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="hero-scene__panels" data-hero-item>
        <article
          v-for="panel in props.panels"
          :key="panel.title"
          class="hero-scene__panel"
        >
          <span>{{ panel.label }}</span>
          <h3>{{ panel.title }}</h3>
          <p>{{ panel.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
