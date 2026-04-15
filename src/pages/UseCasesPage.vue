<script setup>
import { ref } from 'vue'
import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const selectedScenario = ref(0)
</script>

<template>
  <div ref="pageRef" class="page page--usecases">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Real-World Scenarios</span>
          <h1>{{ siteContent.useCasesContent.title }}</h1>
          <p>{{ siteContent.useCasesContent.subtitle }}</p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="usecase-selector">
        <div class="scenario-tabs">
          <button
            v-for="(scenario, index) in siteContent.useCasesContent.scenarios"
            :key="scenario.segment"
            class="scenario-tab"
            :class="{ 'scenario-tab--active': selectedScenario === index }"
            @click="selectedScenario = index"
          >
            <span class="scenario-icon">{{ scenario.icon }}</span>
            <span class="scenario-label">{{ scenario.segment }}</span>
          </button>
        </div>
      </section>

      <section
        v-for="(scenario, idx) in siteContent.useCasesContent.scenarios"
        v-show="selectedScenario === idx"
        :key="scenario.segment"
        class="scenario-detail scenario-detail--active"
      >
        <div class="scenario-header">
          <div class="scenario-title-group">
            <h2>{{ scenario.title }}</h2>
            <p class="scenario-description">{{ scenario.description }}</p>
          </div>
        </div>

        <GlassSection
          eyebrow="Journey"
          :title="`${scenario.segment}的使用旅程`"
          :lead="scenario.description"
        >
          <div class="journey-timeline">
            <div
              v-for="(step, stepIdx) in scenario.story"
              :key="step.step"
              class="journey-step"
              :class="{ 'journey-step--last': stepIdx === scenario.story.length - 1 }"
            >
              <div class="step-marker">
                <span class="step-number">{{ stepIdx + 1 }}</span>
              </div>
              <div class="step-content">
                <h4>{{ step.step }}</h4>
                <p>{{ step.detail }}</p>
              </div>
              <div
                v-if="stepIdx < scenario.story.length - 1"
                class="step-connector"
              ></div>
            </div>
          </div>
        </GlassSection>

        <GlassSection
          eyebrow="Value Delivered"
          :title="`为 ${scenario.segment} 创造的价值`"
          lead="每个场景都专注于解决特定用户群体的核心痛点"
        >
          <div class="benefits-grid">
            <article
              v-for="benefit in scenario.benefits"
              :key="benefit"
              class="benefit-card"
            >
              <span class="benefit-icon">✨</span>
              <p>{{ benefit }}</p>
            </article>
          </div>
        </GlassSection>
      </section>

      <GlassSection
        eyebrow="More Stories"
        title="一条工具能否真正融入四种不同的日常用药场景？"
        lead="Luminous 的设计把识别、提醒、安全辅助与历史沉淀编织在一起，更适合服务个人、家庭与照护协作等当前能力可支撑的场景。"
      >
        <div class="story-summary">
          <article class="summary-card">
            <span>识别层</span>
            <h4>多场景统一的用药对象</h4>
            <p>无论是个人还是代理护理，识别与理解这一步都保持一致，降低学习成本。</p>
          </article>
          <article class="summary-card">
            <span>管理层</span>
            <h4>提醒与打卡构成稳定节奏</h4>
            <p>提醒和打卡让一次临时查药，继续变成真正能长期执行的用药管理路径。</p>
          </article>
          <article class="summary-card">
            <span>安全层</span>
            <h4>风险提示先说边界</h4>
            <p>安全辅助先帮助用户意识到哪里需要继续核对，而不是制造虚假的确定感。</p>
          </article>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.usecasesMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.page--usecases {
  --color-accent: var(--theme-accent, #c8f0d8);
  --color-accent-secondary: var(--theme-accent-secondary, #ffd9e3);
  --color-glow: var(--theme-glow, rgba(200, 240, 216, 0.1));
}

.usecase-selector {
  margin: 3rem 0;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.75rem;
  background: #ffffff;
}

.scenario-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.scenario-tab {
  padding: 0.875rem;
  border: 1px solid rgba(100, 116, 139, 0.08);
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: rgba(71, 85, 105, 0.7);
  will-change: background-color, border-color;
}

.scenario-tab:hover {
  background: rgba(200, 240, 216, 0.06);
  border-color: rgba(200, 240, 216, 0.15);
}

.scenario-tab--active {
  background: rgba(200, 240, 216, 0.12);
  border-color: var(--color-accent);
  color: rgba(41, 50, 65, 1);
  font-weight: 500;
}

.scenario-icon {
  font-size: 1.5rem;
}

.scenario-label {
  font-size: 0.8rem;
  font-weight: 500;
}

.scenario-detail {
  animation: fadeIn 0.3s ease-in-out;
}

.scenario-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(200, 240, 216, 0.08);
}

.scenario-title-group h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: rgba(15, 23, 42, 0.95);
}

.scenario-description {
  font-size: 1rem;
  color: rgba(71, 85, 105, 0.75);
  max-width: 600px;
}

.journey-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.journey-step {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 1.25rem;
  position: relative;
}

.journey-step--last .step-connector {
  display: none;
}

.step-marker {
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(200, 240, 216, 0.12);
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  font-weight: 700;
  color: rgba(41, 50, 65, 0.9);
  font-size: 1.05rem;
}

.step-content {
  padding: 1rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.step-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: rgba(15, 23, 42, 0.95);
}

.step-content p {
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  margin: 0;
  font-size: 0.9rem;
}

.step-connector {
  position: absolute;
  left: 35px;
  top: 48px;
  width: 2px;
  height: calc(100% + 1.5rem);
  background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
  opacity: 0.4;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.benefit-card {
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  transition: background-color 0.25s ease;
}

.benefit-card:hover {
  background: rgba(200, 240, 216, 0.06);
}

.benefit-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.benefit-card p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  font-size: 0.9rem;
}

.story-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.summary-card {
  padding: 1.5rem;
  background: rgba(200, 240, 216, 0.06);
  border: 1px solid rgba(200, 240, 216, 0.12);
  border-radius: 0.5rem;
}

.summary-card span {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(100, 110, 120, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.summary-card h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.4rem 0;
  color: rgba(15, 23, 42, 0.95);
}

.summary-card p {
  font-size: 0.9rem;
  color: rgba(71, 85, 105, 0.7);
  margin: 0;
  line-height: 1.5;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .scenario-tabs {
    grid-template-columns: repeat(2, 1fr);
  }

  .journey-step {
    grid-template-columns: 60px 1fr;
    gap: 1rem;
  }

  .step-number {
    width: 44px;
    height: 44px;
    font-size: 0.9rem;
  }

  .step-connector {
    left: 22px;
  }

  .scenario-title-group h2 {
    font-size: 1.4rem;
  }

  .benefits-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.75rem;
  }

  .story-summary {
    grid-template-columns: 1fr;
  }
}

.scenario-tab {
  padding: 1rem;
  border: 1px solid rgba(100, 116, 139, 0.12);
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: rgba(51, 65, 85, 0.7);
}

.scenario-tab:hover {
  background: rgba(212, 184, 224, 0.08);
  border-color: rgba(212, 184, 224, 0.2);
}

.scenario-tab--active {
  background: linear-gradient(180deg, rgba(213, 232, 224, 0.15), rgba(197, 232, 229, 0.1));
  border-color: var(--color-accent);
  color: rgba(41, 50, 65, 1);
  font-weight: 500;
}

.scenario-icon {
  font-size: 1.75rem;
}

.scenario-label {
  font-size: 0.85rem;
  font-weight: 500;
}

.scenario-detail {
  animation: fadeIn 0.4s ease-in-out;
}

.scenario-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(212, 184, 224, 0.1);
}

.scenario-title-group h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: rgba(15, 23, 42, 0.95);
}

.scenario-description {
  font-size: 1.05rem;
  color: rgba(71, 85, 105, 0.8);
  max-width: 600px;
}

.journey-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.journey-step {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  position: relative;
}

.journey-step--last .step-connector {
  display: none;
}

.step-marker {
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-number {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(213, 232, 224, 0.2), rgba(197, 232, 229, 0.15));
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  font-weight: 700;
  color: rgba(41, 50, 65, 0.9);
  font-size: 1.25rem;
}

.step-content {
  padding: 1.25rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(245, 247, 250, 0.85));
  border: 1px solid rgba(100, 116, 139, 0.12);
  border-radius: 0.5rem;
}

.step-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(15, 23, 42, 0.95);
}

.step-content p {
  color: rgba(71, 85, 105, 0.75);
  line-height: 1.6;
  margin: 0;
}

.step-connector {
  position: absolute;
  left: 40px;
  top: 56px;
  width: 2px;
  height: calc(100% + 2rem);
  background: linear-gradient(
    180deg,
    var(--color-accent) 0%,
    var(--color-accent) 50%,
    transparent 100%
  );
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.benefit-card {
  padding: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(245, 247, 250, 0.8));
  border: 1px solid rgba(100, 116, 139, 0.12);
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: linear-gradient(180deg, rgba(213, 232, 224, 0.1), rgba(197, 232, 229, 0.08));
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.benefit-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-card p {
  margin: 0;
  color: rgba(71, 85, 105, 0.8);
  line-height: 1.6;
}

.story-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.summary-card {
  padding: 1.75rem;
  background: linear-gradient(180deg, rgba(245, 230, 211, 0.1), rgba(252, 228, 214, 0.08));
  border: 1px solid rgba(252, 228, 214, 0.2);
  border-radius: 0.5rem;
}

.summary-card span {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(100, 110, 120, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.summary-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0 0.75rem;
  color: rgba(15, 23, 42, 0.95);
}

.summary-card p {
  font-size: 0.95rem;
  color: rgba(71, 85, 105, 0.75);
  margin: 0;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .scenario-tabs {
    grid-template-columns: repeat(2, 1fr);
  }

  .journey-step {
    grid-template-columns: 60px 1fr;
    gap: 1rem;
  }

  .step-marker {
    align-items: flex-start;
    margin-top: 0.25rem;
  }

  .step-number {
    width: 48px;
    height: 48px;
    font-size: 1rem;
  }

  .step-connector {
    left: 24px;
  }

  .scenario-title-group h2 {
    font-size: 1.5rem;
  }
}
</style>
