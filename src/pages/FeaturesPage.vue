<script setup>
import { computed, ref } from 'vue'
import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const featureCategories = computed(() => {
  const groups = siteContent.featureGroups || []
  return groups.map((group, idx) => ({
    id: idx,
    icon: ['📷', '🔔', '🛡️'][idx] || '⭐',
    category: group.title,
    description: group.description || '核心功能模块',
    features: group.cards || []
  }))
})
</script>

<template>
  <div ref="pageRef" class="page page--features">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Core Features</span>
          <h1>功能全景</h1>
          <p>
            从扫描识别、智能管理到安全辅助，每项功能都是为了让用药变得更简单、更安全、更贴心。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="features-intro">
        <div class="intro-text">
          <span class="intro-eyebrow">Three Pillars</span>
          <h2>三层递进的功能体系</h2>
          <p>每个功能都围绕用药生活的真实场景设计。识别如何变得秒取决，提醒如何变得不烦人，安全辅助如何让你有底气。</p>
          <div class="intro-highlights">
            <div class="highlight-item">
              <span>50+</span>
              <p>药品信息库</p>
            </div>
            <div class="highlight-item">
              <span>7</span>
              <p>风险检测维度</p>
            </div>
            <div class="highlight-item">
              <span>99%</span>
              <p>识别准确率</p>
            </div>
          </div>
        </div>

        <div class="intro-visual">
          <div class="feature-showcase">
            <div class="showcase-card">
              <span class="showcase-icon">📷</span>
              <h4>智能识别</h4>
            </div>
            <div class="showcase-card">
              <span class="showcase-icon">🔔</span>
              <h4>贴心提醒</h4>
            </div>
            <div class="showcase-card">
              <span class="showcase-icon">🛡️</span>
              <h4>安全卫士</h4>
            </div>
          </div>
        </div>
      </section>

      <GlassSection
        eyebrow="Detailed Breakdown"
        title="功能清单"
        lead="每个功能的真实能力说清楚，不伪装，不夸大。"
      >
        <div class="features-detailed">
          <div
            v-for="category in featureCategories"
            :key="category.id"
            class="category-block"
          >
            <div class="category-header">
              <span class="category-icon">{{ category.icon }}</span>
              <div class="category-title-block">
                <h3>{{ category.category }}</h3>
                <p>{{ category.description }}</p>
              </div>
            </div>
            
            <ul class="feature-list">
              <li
                v-for="feature in category.features"
                :key="feature.title"
                class="feature-item"
              >
                <span class="feature-title">{{ feature.title }}</span>
                <span class="feature-body">{{ feature.body }}</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Trust & Boundaries"
        title="开放中的克制"
        lead="产品能力可以张扬，但产品边界必须清晰。AI 帮你理解，而不是替你决策。"
      >
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-icon">🤝</div>
            <h4>智能辅助</h4>
            <p>AI 解读帮助你快速理解医学信息，但医疗决策永远是你的权利。所有推荐都标注来源和限制。</p>
          </div>
          <div class="trust-item">
            <div class="trust-icon">⚠️</div>
            <h4>风险提示</h4>
            <p>检测药物相互作用、禁忌、注意事项，但不会武断给出"不能吃"的结论。风险认知权力属于你。</p>
          </div>
          <div class="trust-item">
            <div class="trust-icon">📚</div>
            <h4>数据沉淀</h4>
            <p>历史记录帮助回忆和核对，不制造心理负担。永远保持轻量、易用、易理解。</p>
          </div>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.featuresMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.features-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 3rem 0;
}

.intro-text {
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

.intro-text h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.95);
  line-height: 1.2;
}

.intro-text > p {
  margin: 0 0 2rem 0;
  font-size: 1rem;
  color: rgba(71, 85, 105, 0.75);
  line-height: 1.7;
}

.intro-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.highlight-item {
  padding: 1rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  text-align: center;
}

.highlight-item span {
  display: block;
  font-size: 1.75rem;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.95);
  margin-bottom: 0.25rem;
}

.highlight-item p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.85rem;
}

.intro-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.showcase-card {
  padding: 2rem 1rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  text-align: center;
}

.showcase-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.75rem;
}

.showcase-card h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.features-detailed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.category-block {
  padding: 2rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.category-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.category-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.category-title-block h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.category-title-block p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 1);
  border-left: 2px solid rgba(200, 240, 216, 0.4);
  border-radius: 0.25rem;
}

.feature-title {
  display: block;
  font-weight: 600;
  color: rgba(41, 50, 65, 0.95);
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.feature-body {
  display: block;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.85rem;
  line-height: 1.4;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.trust-item {
  padding: 2rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  text-align: center;
}

.trust-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.trust-item h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.trust-item p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .features-intro {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .intro-highlights {
    grid-template-columns: repeat(3, 1fr);
  }

  .features-detailed {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .features-intro {
    margin: 2rem 0;
  }

  .intro-text h2 {
    font-size: 1.5rem;
  }

  .intro-highlights {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .highlight-item {
    padding: 0.75rem;
  }

  .highlight-item span {
    font-size: 1.4rem;
  }

  .features-detailed {
    grid-template-columns: 1fr;
  }

  .trust-grid {
    grid-template-columns: 1fr;
  }
}
</style>
