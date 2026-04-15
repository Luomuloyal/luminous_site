<script setup>
import { computed, ref } from 'vue'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const featureGroups = computed(() =>
  siteContent.featureGroups.map((group) => ({
    ...group,
    cardCount: group.cards.length,
  })),
)

const proofPoints = [
  {
    title: '主导航可见',
    body: '首页、搜索、扫描、提醒、打卡、安全辅助与设置等核心模块覆盖主要使用场景。',
  },
  {
    title: '控制器已拆分',
    body: '识别、提醒、打卡、安全辅助与相册等体验均有独立模块支撑，结构清晰稳定。',
  },
  {
    title: '前后端分工明确',
    body: '移动端、服务端、数据库与本地存储协同工作，保障查询、提醒与历史记录彼此连贯。',
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
            按用户实际使用流程梳理功能，让查药、识药、提醒与记录之间的关系一目了然。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <section class="feature-proof">
        <div class="feature-proof__copy">
          <span class="feature-proof__kicker">Feature Overview</span>
          <h2>核心功能围绕用药全流程展开</h2>
          <p>
            我们将功能划分为查药与识药、提醒与记录、AI 与历史沉淀三组，
            让每一层价值都能对应真实使用场景。
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
              <div class="feature-group__meta">
                <small>{{ group.cardCount }} 项核心能力</small>
                <strong>{{ group.lead }}</strong>
              </div>
            </header>

            <div class="feature-group__cards">
              <article
                v-for="(card, index) in group.cards"
                :key="card.title"
                class="feature-detail-card"
                :class="{
                  'feature-detail-card--featured': card.span === 'wide',
                  'feature-detail-card--full': group.cards.length % 2 === 1 && index === group.cards.length - 1,
                }"
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
        lead="能力说明应当准确克制，让用户更容易判断产品适合解决什么问题。"
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
  border: 1px solid var(--route-border);
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-tertiary) 14%));
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
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--route-accent-secondary) 18%, white), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--route-accent-tertiary) 12%));
}

.feature-group__header h3 {
  font-size: 1.5rem;
}

.feature-group__header {
  display: grid;
  gap: 0.55rem;
}

.feature-group__meta {
  display: grid;
  gap: 0.8rem;
  margin-top: 0.4rem;
  padding-top: 0.95rem;
  border-top: 1px solid color-mix(in srgb, var(--route-accent) 16%, white);
}

.feature-group__meta small {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 2rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: color-mix(in srgb, white 82%, var(--route-accent) 18%);
  border: 1px solid color-mix(in srgb, var(--route-accent) 24%, white);
  color: rgba(93, 80, 74, 0.82);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
}

.feature-group__meta strong {
  color: rgba(93, 80, 74, 0.78);
  line-height: 1.72;
  font-size: 0.96rem;
  font-weight: 500;
}

.feature-group__cards {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
  gap: 1rem;
  margin-top: 1.2rem;
  align-items: stretch;
}

.feature-detail-card {
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  border-radius: 1.35rem;
  min-height: 100%;
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    border-color 0.32s ease,
    background 0.32s ease;
}

.feature-detail-card::before {
  content: '';
  position: absolute;
  inset: auto -18% -32% auto;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--route-accent-secondary) 22%, white);
  opacity: 0;
  filter: blur(26px);
  transform: scale(0.84);
  transition: opacity 0.32s ease, transform 0.32s ease;
  pointer-events: none;
}

.feature-detail-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 12%,
    rgba(255, 255, 255, 0.28) 28%,
    transparent 44%
  );
  opacity: 0;
  transform: translateX(-20%);
  transition: opacity 0.32s ease, transform 0.45s ease;
  pointer-events: none;
}

.feature-detail-card--featured {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent) 24%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), color-mix(in srgb, white 84%, var(--route-accent-tertiary) 16%));
}

.feature-detail-card--full {
  grid-column: 1 / -1;
}

.feature-detail-card__body {
  margin: 0.8rem 0 0;
  font-weight: 600;
  color: rgba(82, 68, 63, 0.92);
  transition: transform 0.28s ease, color 0.28s ease;
}

.feature-detail-card__detail {
  margin: 0.7rem 0 0;
  font-size: 0.92rem;
  transition: transform 0.28s ease, color 0.28s ease;
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
  background: color-mix(in srgb, white 84%, var(--route-accent) 16%);
  border: 1px solid color-mix(in srgb, var(--route-accent) 28%, white);
  color: rgba(93, 80, 74, 0.82);
  font-size: 0.82rem;
  transition: transform 0.28s ease, background 0.28s ease, border-color 0.28s ease;
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
  transition: transform 0.28s ease, color 0.28s ease;
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

.proof-card:nth-child(2),
.feature-detail-card:nth-child(2),
.boundary-card-local:nth-child(2) {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-secondary) 20%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 88%, var(--route-accent-secondary) 12%));
}

.proof-card:nth-child(3),
.feature-detail-card:nth-child(3),
.boundary-card-local:nth-child(3) {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-tertiary) 20%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 88%, var(--route-accent-tertiary) 12%));
}

.proof-card,
.feature-group,
.boundary-card-local {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.proof-card::before,
.feature-group::before,
.boundary-card-local::before {
  content: '';
  position: absolute;
  inset: -18% auto auto -10%;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--route-accent) 18%, white);
  opacity: 0;
  filter: blur(24px);
  transform: scale(0.82);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
  .proof-card:hover,
  .boundary-card-local:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 52px rgba(126, 111, 103, 0.12);
    border-color: color-mix(in srgb, var(--route-accent) 38%, white);
  }

  .feature-group:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 58px rgba(126, 111, 103, 0.1);
    border-color: color-mix(in srgb, var(--route-accent-secondary) 36%, white);
  }

  .proof-card:hover::before,
  .feature-group:hover::before,
  .boundary-card-local:hover::before {
    opacity: 0.72;
    transform: scale(1);
  }

  .feature-detail-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 46px rgba(126, 111, 103, 0.12);
    border-color: color-mix(in srgb, var(--route-accent) 42%, white);
  }

  .feature-detail-card:hover::before {
    opacity: 0.9;
    transform: scale(1);
  }

  .feature-detail-card:hover::after {
    opacity: 1;
    transform: translateX(8%);
  }

  .feature-detail-card:hover .feature-detail-card__body,
  .feature-detail-card:hover .feature-detail-card__detail {
    transform: translateY(-1px);
    color: rgba(80, 66, 61, 0.94);
  }

  .feature-detail-card:hover .feature-detail-card__tags span {
    transform: translateY(-3px);
    background: color-mix(in srgb, white 76%, var(--route-accent) 24%);
    border-color: color-mix(in srgb, var(--route-accent) 38%, white);
  }

  .feature-detail-card:hover .feature-detail-card__facts li {
    transform: translateX(4px);
    color: rgba(93, 80, 74, 0.84);
  }

  .feature-detail-card--featured:hover {
    transform: translateY(-10px) scale(1.01);
  }

  .feature-group:hover .feature-group__meta small {
    background: color-mix(in srgb, white 76%, var(--route-accent-secondary) 24%);
    border-color: color-mix(in srgb, var(--route-accent-secondary) 34%, white);
  }
}

@media (max-width: 1180px) {
  .feature-proof,
  .feature-proof__grid,
  .feature-group__cards,
  .boundary-grid {
    grid-template-columns: 1fr;
  }

  .feature-detail-card--full {
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
