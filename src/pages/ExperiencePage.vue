<script setup>
import { ref } from 'vue'
import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import RuntimeShotCard from '../components/RuntimeShotCard.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)
</script>

<template>
  <div ref="pageRef" class="page page--experience">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Use Journey</span>
          <h1>体验之旅</h1>
          <p>
            从拍照识别、智能理解、到日常提醒和安全护航，我们把复杂的用药管理变成自然而然的日常节奏。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="experience-hero">
        <div class="experience-intro">
          <span class="experience-eyebrow">Product Journey</span>
          <h2>用药变得更顺手</h2>
          <p>不是冷冰冰的工具堆砌，而是从识别、理解、记录、提醒到守护，每个环节都经过精心设计。让用药管理从复杂变得自然。</p>
        </div>
        <div class="experience-flow-preview">
          <div class="flow-badge">📷</div>
          <div class="flow-badge">📖</div>
          <div class="flow-badge">💾</div>
          <div class="flow-badge">🔔</div>
          <div class="flow-badge">🛡️</div>
        </div>
      </section>

      <section class="experience-timeline">
        <div
          v-for="(scene, index) in siteContent.experienceScenes"
          :key="scene.label"
          class="timeline-item"
          :class="{ 'timeline-item--alt': index % 2 === 1 }"
        >
          <div class="timeline-number">{{ String(index + 1).padStart(2, '0') }}</div>
          
          <div class="timeline-body">
            <div class="timeline-content">
              <span class="timeline-label">{{ scene.en }}</span>
              <h3>{{ scene.title }}</h3>
              <p class="timeline-desc">{{ scene.body }}</p>
              <ul class="timeline-points">
                <li v-for="point in scene.points" :key="point">{{ point }}</li>
              </ul>
            </div>

            <div class="timeline-visual">
              <RuntimeShotCard
                :shot-id="scene.shotId"
                :title="scene.title"
                :caption="scene.body"
                :fallback-scene="scene"
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <GlassSection
        eyebrow="Core Flow"
        title="五环节无缝流转"
        lead="从拿起手机的那一刻，五个精心设计的环节从容流转，最终你会感受到这不是工具，而是陪伴。"
      >
        <div class="flow-detailed">
          <div class="flow-item">
            <div class="flow-title">
              <span class="flow-emoji">📷</span>
              <h4>识别</h4>
            </div>
            <p>拍一张照片，AI 秒识别药品信息。成分、用法、禁忌一览无遗。</p>
          </div>
          <div class="flow-connector">→</div>
          <div class="flow-item">
            <div class="flow-title">
              <span class="flow-emoji">📖</span>
              <h4>理解</h4>
            </div>
            <p>复杂的医学信息被翻译成简单易懂的文字。你快速抓住关键。</p>
          </div>
          <div class="flow-connector">→</div>
          <div class="flow-item">
            <div class="flow-title">
              <span class="flow-emoji">💾</span>
              <h4>记录</h4>
            </div>
            <p>自动保存，手动标记。你的用药历史变成有迹可循的故事。</p>
          </div>
          <div class="flow-connector">→</div>
          <div class="flow-item">
            <div class="flow-title">
              <span class="flow-emoji">🔔</span>
              <h4>提醒</h4>
            </div>
            <p>个性化节奏，不烦人。按时用药再也不会遗漏。</p>
          </div>
          <div class="flow-connector">→</div>
          <div class="flow-item">
            <div class="flow-title">
              <span class="flow-emoji">🛡️</span>
              <h4>守护</h4>
            </div>
            <p>实时检测风险，药物相互作用一览无遗。为你的健康把关。</p>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Personalization"
        title="贴身的视觉陪伴"
        lead="从深浅切换到风格定制，每个选择都是为了让你感受到这是为你设计的产品。"
      >
        <div class="personalization-grid">
          <div class="personalization-card">
            <h4>🌓 深浅主题</h4>
            <p>护眼深色夜用，清爽浅色日用。一键切换，无缝适应你的使用习惯。</p>
          </div>
          <div class="personalization-card">
            <h4>🎨 7 种风格</h4>
            <p>柔岚月雾神树虚霭，霜尘浅砂烟波。每种风格都有独特气质，总有一款是你的。</p>
          </div>
          <div class="personalization-card">
            <h4>⏰ 节奏定制</h4>
            <p>提醒时间、提醒频率、提醒方式，全由你主导。真正的个性化体验。</p>
          </div>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.experienceMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.experience-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 3rem 0;
}

.experience-intro {
  padding: 0;
}

.experience-eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(100, 110, 120, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
}

.experience-intro h2 {
  margin: 0 0 1rem 0;
  font-size: 2.2rem;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.95);
  line-height: 1.2;
}

.experience-intro > p {
  margin: 0;
  font-size: 1rem;
  color: rgba(71, 85, 105, 0.75);
  line-height: 1.7;
}

.experience-flow-preview {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
}

.flow-badge {
  padding: 2rem 0.5rem;
  background: linear-gradient(135deg, #FFF9F7 0%, #FFFBF9 100%);
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experience-timeline {
  margin: 4rem 0;
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: start;
}

.timeline-item--alt {
  grid-template-columns: 1fr 60px;
}

.timeline-item--alt .timeline-body {
  grid-template-columns: 1fr 1fr;
}

.timeline-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(200, 240, 216, 0.12);
  border: 2px solid rgba(200, 240, 216, 0.3);
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2rem;
  color: rgba(41, 50, 65, 0.8);
  flex-shrink: 0;
}

.timeline-item--alt .timeline-number {
  order: 2;
}

.timeline-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.timeline-content {
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.timeline-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(100, 110, 120, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.timeline-desc {
  margin: 0 0 1rem 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

.timeline-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-points li {
  padding-left: 1.5rem;
  position: relative;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
}

.timeline-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: rgba(200, 240, 216, 0.6);
  font-weight: bold;
}

.timeline-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-detailed {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 2rem 0;
  flex-wrap: wrap;
  padding: 2rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid rgba(100, 116, 139, 0.06);
}

.flow-item {
  flex: 0 1 160px;
  padding: 1rem;
  text-align: center;
}

.flow-title {
  margin-bottom: 0.75rem;
}

.flow-emoji {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.5rem;
}

.flow-item h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.flow-item p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  font-size: 0.8rem;
  line-height: 1.4;
}

.flow-connector {
  color: rgba(200, 240, 216, 0.4);
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 0.5rem;
}

.personalization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.personalization-card {
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
}

.personalization-card h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.95);
}

.personalization-card p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .experience-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .timeline-body {
    grid-template-columns: 1fr;
  }

  .experience-flow-preview {
    grid-template-columns: repeat(5, 1fr);
  }

  .flow-item {
    flex: 0 1 140px;
  }
}

@media (max-width: 768px) {
  .experience-hero {
    margin: 2rem 0;
  }

  .experience-intro h2 {
    font-size: 1.6rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-item--alt {
    grid-template-columns: 1fr;
  }

  .timeline-number {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }

  .experience-flow-preview {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .flow-badge {
    padding: 1.5rem 0.25rem;
    font-size: 1.3rem;
  }

  .flow-detailed {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
  }

  .flow-item {
    flex: 1 1 100%;
  }

  .flow-connector {
    transform: rotate(90deg);
  }

  .personalization-grid {
    grid-template-columns: 1fr;
  }
}
</style>
