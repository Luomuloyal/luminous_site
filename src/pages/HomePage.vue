<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import HeroScene from '../components/HeroScene.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const coreFeatures = [
  {
    icon: '📷',
    title: '智能识别',
    description: '拍照扫描药品信息，秒识别成分、用法、禁忌。',
    href: '/features'
  },
  {
    icon: '🔔',
    title: '定时提醒',
    description: '个性化用药日程，不会漏掉任何一次用药提醒。',
    href: '/features'
  },
  {
    icon: '🛡️',
    title: '安全卫士',
    description: '实时监测用药风险，药物相互作用一览无遗。',
    href: '/features'
  }
]

const themeOptions = [
  {
    label: 'Light / Dark',
    description: '自由切换深浅模式，护眼舒适看一整天。'
  },
  {
    label: '7 Style Themes',
    description: '柔岚月雾神树虚霭，打造贴心的视觉节奏。'
  }
]
</script>

<template>
  <div ref="pageRef" class="page page--home">
    <HeroScene
      :brand="siteContent.brand"
      :panels="siteContent.heroPanels"
      :highlights="siteContent.homeHighlights"
    />

    <section class="core-features-section">
      <div class="core-features-grid">
        <div class="feature-card">
          <div class="feature-number">01</div>
          <h3>识别不是孤立功能</h3>
          <p>识别、理解、保存与提醒被设计成连续旋转，而不是四个分散按钮。</p>
        </div>
        <div class="feature-card">
          <div class="feature-number">02</div>
          <h3>UI像未来感工具能</h3>
          <p>深浅色双模式与七套主题并存，视觉有辨识度但不刺眼日常可读性。</p>
        </div>
        <div class="feature-card">
          <div class="feature-number">03</div>
          <h3>AI只做辅助，不越界</h3>
          <p>信息解释与风险提示被明确定位为辅助参考，不替代专业医疗建议。</p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="intro-section">
        <div class="intro-content">
          <span class="intro-eyebrow">Three Pillars</span>
          <h2>三重功能，层层护航</h2>
          <p class="intro-lead">从识别、管理到安全辅助，让每个用药环节都有所依靠。不是功能的堆砌，而是用心的设计。</p>
          <div class="intro-cta">
            <a href="#features" class="learn-more">了解更多功能 →</a>
          </div>
        </div>
        <div class="intro-visual">
          <div class="feature-preview">
            <span class="feature-icon">📷</span>
            <h4>智能识别</h4>
            <p>拍照即可识别药品</p>
          </div>
          <div class="feature-preview">
            <span class="feature-icon">🔔</span>
            <h4>定时提醒</h4>
            <p>用药时间不会漏</p>
          </div>
          <div class="feature-preview">
            <span class="feature-icon">🛡️</span>
            <h4>安全卫士</h4>
            <p>风险提示保护你</p>
          </div>
        </div>
      </section>

      <GlassSection
        eyebrow="Experience Design"
        title="不只看得舒服，更要用得贴心"
        lead="深浅主题自由切换，7种风格任你选择，打造属于你的用药生活。"
      >
        <div class="experience-layout">
          <div class="experience-info">
            <div class="experience-item">
              <h4>🌓 深浅主题</h4>
              <p>护眼深色夜用，清爽浅色日用，一键无缝切换。无论何时何地，都有舒适的视觉陪伴。</p>
            </div>
            <div class="experience-item">
              <h4>🎨 7 种风格</h4>
              <p>柔岚月雾神树虚霭，霜尘浅砂烟波。每种风格都有独特气质，选择最适合你的那一款。</p>
            </div>
            <div class="experience-item">
              <h4>✨ 个性定制</h4>
              <p>从色彩到排版，从动画到提醒，所有设置都由你主导。真正的个性化体验。</p>
            </div>
          </div>
          <div class="experience-showcase">
            <!-- 这里可以放你的产品示意图 -->
            <div class="theme-comparison">
              <div class="theme-demo light-theme">
                <span>浅色模式</span>
              </div>
              <div class="theme-demo dark-theme">
                <span>深色模式</span>
              </div>
            </div>
          </div>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.homeMeta" />
    </div>
  </div>
</template>

<style scoped>
.core-features-section {
  padding: 3rem 1.5rem;
  margin: 2rem 0;
  background: linear-gradient(135deg, rgba(255, 217, 227, 0.08) 0%, rgba(232, 186, 213, 0.06) 100%);
  border: 1px solid rgba(255, 217, 227, 0.15);
}

.core-features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 1.75rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(200, 240, 216, 0.2);
  background: rgba(200, 240, 216, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.feature-number {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 800;
  color: rgba(100, 110, 120, 0.5);
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.feature-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.feature-card p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

.intro-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 4rem 0;
  padding: 0;
}

.intro-content {
  padding: 0;
}

.intro-eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(100, 110, 120, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
}

.intro-content h2 {
  margin: 0 0 1rem 0;
  font-size: 2.2rem;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.95);
  line-height: 1.2;
}

.intro-lead {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: rgba(71, 85, 105, 0.75);
  line-height: 1.7;
}

.intro-cta {
  margin-top: 2rem;
}

.learn-more {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  background: rgba(200, 240, 216, 0.12);
  border: 1px solid rgba(200, 240, 216, 0.3);
  border-radius: 0.5rem;
  color: rgba(41, 50, 65, 0.9);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.learn-more:hover {
  background: rgba(200, 240, 216, 0.2);
  border-color: rgba(200, 240, 216, 0.5);
}

.intro-visual {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(255, 217, 227, 0.08) 0%, rgba(232, 186, 213, 0.06) 100%);
  border: 1px solid rgba(255, 217, 227, 0.15);
  border-radius: 1rem;
}

.feature-preview {
  padding: 1.75rem 1rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.25s ease;
}

.feature-preview:hover {
  border-color: rgba(200, 240, 216, 0.2);
  background: rgba(200, 240, 216, 0.05);
  transform: translateY(-2px);
}

.feature-preview span {
  display: block;
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.feature-preview h4 {
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.feature-preview p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.85rem;
  line-height: 1.5;
}

.experience-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 2rem 0;
}

.experience-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.experience-item h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.experience-item p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

.experience-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.theme-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.theme-demo {
  padding: 3rem 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-weight: 700;
  font-size: 1rem;
  color: rgba(15, 23, 42, 0.9);
  border: 2px dashed rgba(100, 116, 139, 0.2);
}

.light-theme {
  background: linear-gradient(135deg, #FFF9F7 0%, #FFFBF9 100%);
  color: rgba(15, 23, 42, 0.8);
}

.dark-theme {
  background: linear-gradient(135deg, rgba(41, 50, 65, 0.95) 0%, rgba(30, 37, 50, 0.98) 100%);
  color: rgba(240, 243, 247, 0.9);
}

@media (max-width: 1024px) {
  .core-features-section {
    padding: 2.5rem 1rem;
    margin: 1.5rem 0;
  }

  .core-features-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .intro-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .intro-visual {
    grid-template-columns: 1fr;
  }

  .experience-layout {
    grid-template-columns: 1fr;
  }

  .intro-content h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .core-features-section {
    padding: 1.5rem 0.75rem;
  }

  .core-features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .intro-section {
    margin: 2rem 0;
  }

  .intro-visual {
    grid-template-columns: 1fr;
  }

  .theme-comparison {
    grid-template-columns: 1fr;
  }
}
</style>
