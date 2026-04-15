<script setup>
import { computed, ref } from 'vue'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import RuntimeShotCard from '../components/RuntimeShotCard.vue'
import { useSiteManifest } from '../composables/useSiteManifest'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'
import { formatBytes, formatUpdatedAt, formatVersion } from '../lib/siteRuntime'

const pageRef = ref(null)

usePageMotion(pageRef)

const { download } = useSiteManifest()

const galleryShots = computed(() =>
  siteContent.downloadGalleryIds
    .map((id) => siteContent.screenshotSlots.find((item) => item.id === id))
    .filter(Boolean),
)

const activeFeatureIndex = ref(0)
const interactiveFeatures = [
  {
    title: '拍照识别',
    desc: '把药盒或药板先识别出来，再通过候选确认和详情页继续读懂它。',
    shotId: 'medicine-recognition',
  },
  {
    title: '今日提醒',
    desc: '提醒、完成状态和下一次任务会在日内视图里被统一整理，而不是散在多处。',
    shotId: 'today-reminders',
  },
  {
    title: '识别相册',
    desc: '历史条目沉淀成可回看的缩略图和摘要，帮助之后快速复查。',
    shotId: 'recognition-album',
  },
]

const activeFeature = computed(() => interactiveFeatures[activeFeatureIndex.value])

const buildInfo = computed(() => [
  {
    label: '平台',
    value: download.value?.available ? 'Android' : 'Android Beta',
  },
  {
    label: '版本',
    value: download.value?.available ? formatVersion(download.value) : '3.1.0-rc.1+36',
  },
  {
    label: '体积',
    value: download.value?.available ? formatBytes(download.value.sizeBytes) : '运行时清单在线后显示',
  },
  {
    label: '更新时间',
    value: download.value?.available ? formatUpdatedAt(download.value.updatedAt) : '等待 manifest 同步',
  },
])

const roadmap = [
  {
    title: '继续打磨 Android 主流程',
    body: '当前最重要的仍是识别、提醒、打卡、安全辅助与相册回看的稳定性，而不是过早铺陈太多承诺。',
  },
  {
    title: '版本信息持续更新',
    body: '下载入口、版本号、截图和更新时间会优先随站点清单更新，便于及时了解当前测试版本。',
  },
  {
    title: '逐步验证多端可能性',
    body: '产品已预留多端适配基础，现阶段仍以 Android 体验优化为主，其他平台会循序推进。',
  },
]
</script>

<template>
  <div ref="pageRef" class="page page--download">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Android Beta</span>
          <h1>下载与内测状态</h1>
          <p>
            这里会如实展示 Android 当前版本与可用状态，方便了解最新内测进展。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="download-overview">
        <CTAConsole :content="siteContent.downloadMeta" />
      </section>

      <section class="build-panel">
        <article v-for="item in buildInfo" :key="item.label" class="build-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </section>

      <section class="download-feature">
        <div class="download-feature__list">
          <span class="download-kicker">What You Will Actually See</span>
          <h2>重点展示当前可体验的核心能力</h2>
          <ul>
            <li
              v-for="(feature, index) in interactiveFeatures"
              :key="feature.title"
              :class="{ 'is-active': activeFeatureIndex === index }"
              @mouseenter="activeFeatureIndex = index"
              @focusin="activeFeatureIndex = index"
            >
              <strong>{{ feature.title }}</strong>
              <p>{{ feature.desc }}</p>
            </li>
          </ul>
        </div>

        <div class="download-feature__preview">
          <RuntimeShotCard
            :shot-id="activeFeature.shotId"
            :title="activeFeature.title"
            :caption="activeFeature.desc"
            :fallback-scene="siteContent.screenshotSlots.find((item) => item.id === activeFeature.shotId)?.fallbackScene"
          />
        </div>
      </section>

      <GlassSection
        eyebrow="Gallery"
        title="当前展示用截图"
        lead="这些截图会优先随站点清单更新；离线时则提供结构一致的示意内容。"
      >
        <div class="download-shot-grid">
          <RuntimeShotCard
            v-for="shot in galleryShots"
            :key="shot.id"
            :shot-id="shot.id"
            :title="shot.title"
            :caption="shot.caption"
            :fallback-scene="shot.fallbackScene"
          />
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Roadmap"
        title="接下来的重点"
        lead="围绕版本可用性、核心流程稳定性和后续平台规划持续推进。"
      >
        <div class="roadmap-grid-local">
          <article v-for="item in roadmap" :key="item.title" class="roadmap-card-local">
            <h4>{{ item.title }}</h4>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </GlassSection>
    </div>
  </div>
</template>

<style scoped>
.download-overview {
  border-radius: 2rem;
}

.build-panel,
.download-shot-grid,
.roadmap-grid-local {
  display: grid;
  gap: 1rem;
}

.build-panel {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.build-card,
.download-feature__list,
.roadmap-card-local {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--route-border);
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-tertiary) 14%));
  box-shadow: 0 22px 48px rgba(126, 111, 103, 0.08);
}

.build-card {
  padding: 1.3rem;
  border-radius: 1.4rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.build-card span,
.download-kicker {
  display: inline-flex;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(112, 98, 92, 0.7);
}

.build-card strong {
  display: block;
  margin-top: 0.7rem;
  color: rgba(72, 59, 53, 0.96);
  line-height: 1.4;
}

.download-feature {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.2rem;
  align-items: center;
}

.download-feature__list {
  padding: 2rem;
  border-radius: 1.9rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.download-feature__list h2 {
  margin: 1rem 0 0;
  color: rgba(72, 59, 53, 0.96);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.download-feature__list ul {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: grid;
  gap: 0.85rem;
}

.download-feature__list li {
  position: relative;
  overflow: hidden;
  padding: 1.1rem 1.15rem;
  border-radius: 1.2rem;
  border: 1px solid color-mix(in srgb, var(--route-accent) 20%, white);
  background: color-mix(in srgb, white 84%, var(--route-accent-secondary) 16%);
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.build-card::before,
.download-feature__list::before,
.roadmap-card-local::before,
.download-feature__list li::before {
  content: '';
  position: absolute;
  inset: auto -14% -42% auto;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--route-accent-secondary) 22%, white);
  opacity: 0;
  filter: blur(24px);
  transform: scale(0.82);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.download-feature__list li.is-active {
  transform: translateX(6px);
  border-color: var(--route-border);
  background: color-mix(in srgb, white 78%, var(--route-accent) 22%);
  box-shadow: 0 16px 30px rgba(126, 111, 103, 0.08);
}

.download-feature__list li strong,
.roadmap-card-local h4 {
  color: rgba(72, 59, 53, 0.95);
}

.download-feature__list li p,
.roadmap-card-local p {
  margin: 0.55rem 0 0;
  color: rgba(98, 85, 79, 0.76);
  line-height: 1.7;
}

.download-feature__preview {
  display: flex;
  justify-content: center;
}

.download-shot-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

.roadmap-grid-local {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

.roadmap-card-local {
  padding: 1.35rem;
  border-radius: 1.45rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.build-card:nth-child(2),
.roadmap-card-local:nth-child(2) {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-secondary) 20%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-secondary) 14%));
}

.build-card:nth-child(3),
.roadmap-card-local:nth-child(3) {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-tertiary) 20%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-tertiary) 14%));
}

@media (hover: hover) and (pointer: fine) {
  .build-card:hover,
  .roadmap-card-local:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 46px rgba(126, 111, 103, 0.12);
    border-color: color-mix(in srgb, var(--route-accent) 36%, white);
  }

  .download-feature__list:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 52px rgba(126, 111, 103, 0.1);
    border-color: color-mix(in srgb, var(--route-accent-secondary) 36%, white);
  }

  .build-card:hover::before,
  .download-feature__list:hover::before,
  .roadmap-card-local:hover::before,
  .download-feature__list li:hover::before {
    opacity: 0.9;
    transform: scale(1);
  }

  .download-feature__list li:hover:not(.is-active) {
    transform: translateX(6px);
    box-shadow: 0 16px 30px rgba(126, 111, 103, 0.08);
    border-color: color-mix(in srgb, var(--route-accent) 32%, white);
  }

  .download-feature__list li.is-active {
    transform: translateX(10px) scale(1.01);
  }
}

@media (max-width: 1180px) {
  .build-panel,
  .download-feature,
  .download-shot-grid,
  .roadmap-grid-local {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .download-feature__list,
  .build-card,
  .roadmap-card-local {
    padding: 1.2rem;
    border-radius: 1.3rem;
  }
}
</style>
