<script setup>
import { computed, ref } from 'vue'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const featureGroups = computed(() => siteContent.featureGroups)

const proofPoints = [
  {
    title: '主导航可见',
    body: '首页、搜索、扫描、提醒、打卡、安全辅助、设置等页面都在主项目里有对应入口和路由。',
  },
  {
    title: '控制器已拆分',
    body: '扫描、提醒、打卡、安全辅助、相册、首页等流程都有各自的控制器或 viewmodel，不是单文件试玩项目。',
  },
  {
    title: '前后端分工明确',
    body: '客户端页面、服务端 API、数据库与本地存储之间已经开始按职责分层，不需要靠官网脑补。',
  },
]

const boundaryCards = [
  {
    title: 'AI 是解释层，不是替代判断',
    body: 'AI 解读负责把信息翻译得更好懂，安全辅助负责把风险提醒得更靠前，但两者都不应该伪装成诊断。',
  },
  {
    title: '提醒强调持续执行',
    body: '提醒页、今日视图和打卡页说明产品重心并不只是“查到药”，而是“之后如何长期坚持”。',
  },
  {
    title: '历史沉淀服务复查效率',
    body: '识别相册与历史记录的意义不是囤积数据，而是让用户在之后更快找到自己已经看过的药。',
  },
]
</script>

<template>
  <div ref="pageRef" class="page page--features">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Feature Atlas</span>
          <h1>功能全景</h1>
          <p>
            这页不再用夸张数字来撑气氛，而是把当前代码里已经落地的功能模块按顺序讲清楚。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="feature-proof">
        <div class="feature-proof__copy">
          <span class="feature-proof__kicker">Source-Aligned</span>
          <h2>每一层功能都能在主项目里找到对应实现</h2>
          <p>
            我们把功能拆成查药与识药、提醒与记录、AI 与历史沉淀三组，不是为了排版工整，
            而是因为这就是当前仓库里最清晰的能力分层。
          </p>
        </div>

        <div class="feature-proof__grid">
          <article v-for="item in proofPoints" :key="item.title" class="proof-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </section>

      <GlassSection
        eyebrow="Feature Breakdown"
        title="按真实产品结构拆开的能力地图"
        lead="每一个功能模块都由页面、控制器、数据流和边界描述共同组成，而不是单张概念图。"
      >
        <div class="feature-stack">
          <article v-for="group in featureGroups" :key="group.title" class="feature-group">
            <header class="feature-group__header">
              <span>{{ group.orbit }}</span>
              <h3>{{ group.title }}</h3>
              <p>{{ group.description }}</p>
            </header>

            <div class="feature-group__cards">
              <article
                v-for="card in group.cards"
                :key="card.title"
                class="feature-detail-card"
                :class="{ 'feature-detail-card--wide': card.span === 'wide' }"
              >
                <small>{{ card.label }}</small>
                <h4>{{ card.title }}</h4>
                <p class="feature-detail-card__body">{{ card.body }}</p>
                <p class="feature-detail-card__detail">{{ card.detail }}</p>

                <div class="feature-detail-card__tags">
                  <span v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</span>
                </div>

                <ul class="feature-detail-card__facts">
                  <li v-for="fact in card.facts" :key="fact">{{ fact }}</li>
                </ul>
              </article>
            </div>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Boundaries"
        title="能力可以完整，但表达必须克制"
        lead="这次官网重构把边界说得更具体，因为可信度并不来自更大的词，而是来自更清楚的解释。"
      >
        <div class="boundary-grid">
          <article v-for="item in boundaryCards" :key="item.title" class="boundary-card-local">
            <h4>{{ item.title }}</h4>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.featuresMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.feature-proof {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 1.2rem;
}

.feature-proof__copy,
.proof-card,
.feature-group,
.feature-detail-card,
.boundary-card-local {
  border: 1px solid rgba(132, 120, 113, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(247, 241, 236, 0.84));
  box-shadow: 0 22px 48px rgba(126, 111, 103, 0.08);
}

.feature-proof__copy {
  padding: 2rem;
  border-radius: 1.9rem;
}

.feature-proof__kicker,
.feature-group__header span,
.feature-detail-card small {
  display: inline-flex;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(112, 98, 92, 0.7);
}

.feature-proof__copy h2 {
  margin: 1rem 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: rgba(72, 59, 53, 0.96);
}

.feature-proof__copy p,
.feature-group__header p,
.feature-detail-card p,
.boundary-card-local p {
  color: rgba(98, 85, 79, 0.78);
  line-height: 1.75;
}

.feature-proof__grid,
.boundary-grid {
  display: grid;
  gap: 1rem;
}

.feature-proof__grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.proof-card,
.boundary-card-local {
  padding: 1.4rem;
  border-radius: 1.5rem;
}

.proof-card h3,
.feature-group__header h3,
.feature-detail-card h4,
.boundary-card-local h4 {
  margin: 0.7rem 0 0;
  color: rgba(72, 59, 53, 0.95);
}

.proof-card p {
  margin: 0.75rem 0 0;
}

.feature-stack {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.feature-group {
  padding: 1.5rem;
  border-radius: 1.7rem;
}

.feature-group__header h3 {
  font-size: 1.5rem;
}

.feature-group__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.2rem;
}

.feature-detail-card {
  padding: 1.25rem;
  border-radius: 1.35rem;
}

.feature-detail-card--wide {
  grid-column: span 2;
}

.feature-detail-card__body {
  margin: 0.8rem 0 0;
  font-weight: 600;
  color: rgba(82, 68, 63, 0.92);
}

.feature-detail-card__detail {
  margin: 0.7rem 0 0;
  font-size: 0.92rem;
}

.feature-detail-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.feature-detail-card__tags span {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(132, 120, 113, 0.1);
  color: rgba(93, 80, 74, 0.82);
  font-size: 0.82rem;
}

.feature-detail-card__facts {
  padding: 0;
  margin: 1rem 0 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.feature-detail-card__facts li {
  color: rgba(98, 85, 79, 0.74);
  font-size: 0.9rem;
}

.feature-detail-card__facts li::before {
  content: '·';
  margin-right: 0.45rem;
  color: rgba(112, 98, 92, 0.72);
}

.boundary-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

@media (max-width: 1180px) {
  .feature-proof,
  .feature-proof__grid,
  .feature-group__cards,
  .boundary-grid {
    grid-template-columns: 1fr;
  }

  .feature-detail-card--wide {
    grid-column: auto;
  }
}

@media (max-width: 767px) {
  .feature-proof__copy,
  .proof-card,
  .feature-group,
  .feature-detail-card,
  .boundary-card-local {
    padding: 1.2rem;
    border-radius: 1.3rem;
  }
}
</style>
