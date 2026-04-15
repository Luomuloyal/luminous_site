<script setup>
import { ref } from 'vue'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import RuntimeShotCard from '../components/RuntimeShotCard.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const themeStories = [
  {
    title: '显示模式',
    body: '跟随系统、浅色、深色三种模式，让应用和设备环境保持同频，不逼着用户适应它。',
  },
  {
    title: '五套预设主题',
    body: '柔岚、月雾、神树、虚霭、浅砂都来自主项目设置页，这次官网也借用了同样的温和气质。',
  },
  {
    title: '更少噪音，更耐看',
    body: '莫兰迪色系不靠高饱和取胜，而是靠层次、材质感和阅读舒适度把信息托起来。',
  },
]

const flowLabels = ['扫描 / 搜索', '阅读', '沉淀', '提醒', '复查']
</script>

<template>
  <div ref="pageRef" class="page page--experience">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Experience Journey</span>
          <h1>体验路径</h1>
          <p>
            这页讲的不是“看起来多未来”，而是产品如何把一次偶发操作，做成更适合长期使用的节奏。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="experience-intro">
        <div class="experience-intro__copy">
          <span class="experience-kicker">How It Flows</span>
          <h2>一次查药，之后还能继续发生什么</h2>
          <p>
            真正的体验设计不是把每一页都做得像海报，而是让入口、理解、提醒和回看能在时间上接得住彼此。
          </p>
        </div>

        <div class="experience-flow-preview">
          <span v-for="label in flowLabels" :key="label" class="flow-pill">{{ label }}</span>
        </div>
      </section>

      <section class="experience-scenes">
        <article
          v-for="(scene, index) in siteContent.experienceScenes"
          :key="scene.label"
          class="scene-row"
          :class="{ 'scene-row--reverse': index % 2 === 1 }"
        >
          <div class="scene-copy">
            <span>{{ scene.en }}</span>
            <h3>{{ scene.title }}</h3>
            <p>{{ scene.body }}</p>
            <ul>
              <li v-for="point in scene.points" :key="point">{{ point }}</li>
            </ul>
          </div>

          <div class="scene-visual">
            <RuntimeShotCard
              :shot-id="scene.shotId"
              :title="scene.title"
              :caption="scene.body"
              :fallback-scene="scene"
              compact
            />
          </div>
        </article>
      </section>

      <GlassSection
        eyebrow="Theme Direction"
        title="官网视觉也跟着应用一起收口"
        lead="我们保留层次感、材质感和少量留白，让页面更像一份耐看的产品档案，而不是短暂刺眼的展示稿。"
      >
        <div class="theme-story-grid">
          <article v-for="item in themeStories" :key="item.title" class="theme-story-card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Experience Principle"
        title="这次重构的三个体验原则"
        lead="页面风格、文案语气和功能介绍都围绕同一个目标服务：让官网和产品本身一样，尽量清楚、温和、可信。"
      >
        <div class="principle-grid">
          <article class="principle-card-local">
            <span>01</span>
            <h4>入口统一</h4>
            <p>搜索和扫描不再被描述成两套割裂逻辑，而是同一条阅读主线的不同起点。</p>
          </article>
          <article class="principle-card-local">
            <span>02</span>
            <h4>结果可继续</h4>
            <p>读过一次、识别过一次、设置过一次提醒之后，都应该能在后续页面里找到延续关系。</p>
          </article>
          <article class="principle-card-local">
            <span>03</span>
            <h4>视觉不抢答案</h4>
            <p>官网这次收敛到浅色莫兰迪基调，让阅读与理解成为第一优先级，而不是高刺激视觉秀场。</p>
          </article>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.experienceMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.experience-intro,
.scene-row {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 1.2rem;
  align-items: center;
}

.experience-intro__copy,
.scene-copy,
.theme-story-card,
.principle-card-local {
  border: 1px solid rgba(132, 120, 113, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(247, 241, 236, 0.84));
  box-shadow: 0 22px 48px rgba(126, 111, 103, 0.08);
}

.experience-intro__copy,
.scene-copy {
  padding: 2rem;
  border-radius: 1.9rem;
}

.experience-kicker,
.scene-copy span {
  display: inline-flex;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(112, 98, 92, 0.7);
}

.experience-intro__copy h2,
.scene-copy h3 {
  margin: 1rem 0 0;
  color: rgba(72, 59, 53, 0.96);
}

.experience-intro__copy h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.experience-intro__copy p,
.scene-copy p,
.theme-story-card p,
.principle-card-local p {
  margin: 0.9rem 0 0;
  color: rgba(98, 85, 79, 0.78);
  line-height: 1.75;
}

.experience-flow-preview,
.theme-story-grid,
.principle-grid {
  display: grid;
  gap: 1rem;
}

.experience-flow-preview {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.flow-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 6rem;
  padding: 1rem;
  border-radius: 1.4rem;
  border: 1px solid rgba(132, 120, 113, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(244, 238, 233, 0.9));
  color: rgba(93, 80, 74, 0.86);
  text-align: center;
  font-weight: 600;
  box-shadow: 0 18px 34px rgba(126, 111, 103, 0.07);
}

.experience-scenes {
  display: grid;
  gap: 1.2rem;
}

.scene-row--reverse {
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
}

.scene-copy ul {
  padding: 0;
  margin: 1rem 0 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.scene-copy li {
  color: rgba(98, 85, 79, 0.76);
}

.scene-copy li::before {
  content: '·';
  margin-right: 0.45rem;
  color: rgba(112, 98, 92, 0.72);
}

.scene-visual {
  display: flex;
  justify-content: center;
}

.theme-story-grid,
.principle-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

.theme-story-card,
.principle-card-local {
  padding: 1.4rem;
  border-radius: 1.45rem;
}

.theme-story-card h4,
.principle-card-local h4 {
  margin: 0;
  color: rgba(72, 59, 53, 0.95);
}

.principle-card-local span {
  display: inline-flex;
  width: 2.6rem;
  height: 2.6rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(184, 198, 177, 0.18);
  color: rgba(98, 85, 79, 0.88);
  font-weight: 700;
}

@media (max-width: 1180px) {
  .experience-intro,
  .scene-row,
  .scene-row--reverse,
  .experience-flow-preview,
  .theme-story-grid,
  .principle-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .experience-intro__copy,
  .scene-copy,
  .theme-story-card,
  .principle-card-local {
    padding: 1.2rem;
    border-radius: 1.3rem;
  }
}
</style>
