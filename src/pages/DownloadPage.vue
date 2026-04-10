<script setup>
import { computed, ref } from 'vue'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import RuntimeShotCard from '../components/RuntimeShotCard.vue'
import DeviceMockup from '../components/DeviceMockup.vue'
import { useSiteManifest } from '../composables/useSiteManifest'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'
import { formatBytes, formatUpdatedAt, formatVersion } from '../lib/siteRuntime'

const pageRef = ref(null)

usePageMotion(pageRef)

const { download, screenshots, getScreenshotById } = useSiteManifest()

const screenshotRegistry = new Map(siteContent.screenshotSlots.map((item) => [item.id, item]))

const galleryShots = computed(() =>
  siteContent.downloadGalleryIds
    .map((id) => screenshotRegistry.get(id))
    .filter(Boolean)
    .slice(0, 6)
)

const featureScene = {
  label: 'Luminous AI',
  screen: {
    tag: 'Health OS',
    headline: '极简与强大的完美平衡',
    body: '告别杂乱的医疗词汇。我们将繁琐的药品信息转译呈您能一眼读懂的智能卡片。',
    panels: [
      { title: '药品解析', value: '0.5s' },
      { title: '相互作用', value: '安全' },
      { title: '界面主题', value: '7种' },
    ],
  },
}

const activeFeatureIndex = ref(0)
const interactiveFeatures = [
  {
    title: '智能识别',
    desc: '拍照扫描，秒识别药品成分、用法、禁忌。AI 帮你理解复杂的医学信息。',
    shotId: 'medicine-recognition'
  },
  {
    title: '安全卫士',
    desc: '实时检测用药风险，药物相互作用一览无遗。为你的健康把关。',
    shotId: 'safety-assist'
  },
  {
    title: '贴心陪伴',
    desc: '个性化提醒，深浅主题切换，7 种风格选择。用来自你的设计语言。',
    shotId: 'my-profile'
  }
]

const activeFeatureImage = computed(() => {
  const shotId = interactiveFeatures[activeFeatureIndex.value].shotId;
  const shot = getScreenshotById(shotId)
  return shot ? (shot.imageUrl || shot.thumbUrl) : ''
})

const buildInfo = computed(() => [
  {
    label: 'Platform',
    value: download.value?.available ? '🤖 Android' : 'Beta Channel',
  },
  {
    label: 'Version',
    value: download.value?.available ? formatVersion(download.value) : '3.0.0',
  },
  {
    label: 'Size',
    value: download.value?.available ? formatBytes(download.value.sizeBytes) : '~85MB',
  },
  {
    label: 'Updated',
    value: download.value?.available ? formatUpdatedAt(download.value.updatedAt) : 'Latest',
  },
])
</script>

<template>
  <div ref="pageRef" class="page page--download">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Get Started</span>
          <h1>加入我们</h1>
          <p>
            现在就下载 Luminous，开始更智能、更安心的用药生活。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="download-hero">
        <CTAConsole :content="siteContent.downloadMeta" />
      </section>

      <section class="features-section">
        <div class="features-text">
          <h3>为什么选择 Luminous</h3>
          <ul class="features-list">
            <li
              v-for="(feat, idx) in interactiveFeatures"
              :key="idx"
              :class="{ 'is-active': activeFeatureIndex === idx }"
              @mouseenter="activeFeatureIndex = idx"
            >
              <strong>{{ feat.title }}</strong>
              <p>{{ feat.desc }}</p>
            </li>
          </ul>
        </div>

        <div class="features-visual features-visual-device">
          <div class="feature-mockup-wrapper">
             <transition name="fade" mode="out-in">
               <img :key="activeFeatureImage" :src="activeFeatureImage" alt="Feature Preview" class="feature-mockup-image" />
             </transition>
          </div>
        </div>
      </section>

      <GlassSection
        eyebrow="App Gallery"
        v-if="galleryShots.length > 0"
        title="实机截图集锦"
        lead="这些是从真实运行的应用中直接抓取的截图。"
      >
        <div class="screenshot-grid">
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
        title="未来的样子"
        lead="我们在持续打磨，将用药管理变得更智能、更温和、更贴心。"
      >
        <div class="roadmap-grid">
          <div class="roadmap-card">
            <h4>📱 多平台支持</h4>
            <p>iOS 版本已在开发，Web 端管理工具也在筹划中。在你喜欢的任何设备上同步管理。</p>
          </div>
          <div class="roadmap-card">
            <h4>🤝 生态联动</h4>
            <p>正在探索与医疗机构、药房的合作，让医患沟通和持续关怀更流畅自然。</p>
          </div>
          <div class="roadmap-card">
            <h4>🧬 智能深化</h4>
            <p>个性化推荐、趋势分析、预测预警在路上。AI 将以更温暖的方式陪伴你。</p>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="FAQ"
        title="你可能想了解"
        lead="关于下载、安装、数据隐私的问题都在这里。"
      >
        <div class="faq-grid">
          <details class="faq-item">
            <summary>需要什么系统版本？</summary>
            <p>兼容 Android 9.0 及以上。大多数设备都能流畅运行。我们也在优化旧设备的适配。</p>
          </details>
          <details class="faq-item">
            <summary>我的数据安全吗？</summary>
            <p>默认本地存储，你的用药数据永远不会在你未同意的情况下离开设备。我们对隐私的尊重是坚定的。</p>
          </details>
          <details class="faq-item">
            <summary>可以导出数据吗？</summary>
            <p>完全支持。我们尊重你对自己数据的所有权。可随时导出、备份或转移到其他应用。</p>
          </details>
          <details class="faq-item">
            <summary>遇到问题怎么办？</summary>
            <p>应用内反馈、邮件、社区论坛都是联系我们的途径。我们承诺 24 小时内回复。</p>
          </details>
        </div>
      </GlassSection>
    </div>
  </div>
</template>

<style scoped>
.download-hero {
  margin: 3rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255, 230, 213, 0.08) 0%, rgba(232, 212, 255, 0.06) 100%);
  border: 1px solid rgba(255, 230, 213, 0.15);
  border-radius: 1.25rem;
}

.features-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 4rem 0;
  align-items: center;
}

.features-text h3 {
  margin: 0 0 1.5rem 0;
  font-size: 1.7rem;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.95);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.features-list li {
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  border-left: 3px solid rgba(200, 240, 216, 0.1);
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateX(0);
}

.features-list li.is-active {
  opacity: 1;
  transform: translateX(10px);
  border-left-color: rgba(200, 240, 216, 1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.feature-mockup-wrapper {
  position: relative;
  width: 260px;
  height: 560px;
  border-radius: 36px;
  background: #f8fafc;
  border: 10px solid #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05);
  overflow: hidden;
}

.feature-mockup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.features-list li strong {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(15, 23, 42, 0.95);
  font-size: 1.05rem;
}

.features-list li p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

.features-visual-device {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  perspective: 1200px;
  transform: rotateY(-8deg) rotateX(4deg) scale(0.95);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: drop-shadow(-10px 25px 45px rgba(232, 186, 213, 0.15));
}

.features-visual-device:hover {
  transform: rotateY(-2deg) rotateX(1deg) scale(1.0);
}

.features-placeholder {
  width: 100%;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #FFF9F7 0%, #FFFBF9 100%);
  border: 2px dashed rgba(100, 116, 139, 0.15);
  border-radius: 0.75rem;
  text-align: center;
  color: rgba(100, 110, 120, 0.7);
}

.features-placeholder span {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.roadmap-card {
  padding: 1.75rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.roadmap-card h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.roadmap-card p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.faq-item {
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.faq-item:hover {
  border-color: rgba(100, 116, 139, 0.1);
  background: rgba(255, 255, 255, 1);
}

.faq-item summary {
  font-weight: 600;
  color: rgba(15, 23, 42, 0.95);
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item p {
  margin: 1rem 0 0 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .download-hero {
    padding: 2.5rem;
  }

  .features-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .download-hero {
    padding: 2rem;
    margin: 2rem 0;
  }

  .screenshot-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .roadmap-grid {
    grid-template-columns: 1fr;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .screenshot-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>

