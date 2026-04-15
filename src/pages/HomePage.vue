<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import HeroScene from '../components/HeroScene.vue'
import RuntimeShotCard from '../components/RuntimeShotCard.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const sourceFacts = [
  {
    label: '真实页面',
    value: '首页 / 搜索 / 扫描 / 提醒 / 打卡 / 安全辅助',
    body: '这些页面和控制器都已经在 Flutter 主项目里存在，官网不再用抽象概念替代真实路由。',
  },
  {
    label: '显示模式',
    value: '跟随系统 / 浅色 / 深色',
    body: '这次官网也同步切到更柔和的浅色莫兰迪基调，和应用里强调的可切换体验保持一致。',
  },
  {
    label: '主题预设',
    value: '柔岚 / 月雾 / 神树 / 虚霭 / 浅砂',
    body: '五套预设主题来自应用设置能力本身，而不是官网临时编出来的展示词。',
  },
]

const rhythmSteps = [
  {
    step: '01',
    title: '先找到药',
    body: '拍照识别和手动搜索共用同一条理解主线，不把用户留在入口页里。',
  },
  {
    step: '02',
    title: '再读懂重点',
    body: '药品详情、AI 解读和安全辅助负责把原本难读的信息翻译成更容易判断的内容。',
  },
  {
    step: '03',
    title: '最后接上日常',
    body: '提醒、今日视图、打卡和相册沉淀让一次查看能够继续变成长期可用的记录。',
  },
]

const themeModes = [
  { title: '跟随系统', desc: '适合把应用放进日常设备环境里，不强迫你学习另一套视觉节奏。', tone: 'auto' },
  { title: '浅色模式', desc: '更适合白天高频查看信息，这次官网重构也以它作为主调。', tone: 'light' },
  { title: '深色模式', desc: '在夜间或暗光环境下减少刺激感，和提醒、打卡等高频页面更好配合。', tone: 'dark' },
]

const themePresets = [
  { name: '柔岚', desc: '淡蓝、浅紫和暖金并置，明快但不刺眼。' },
  { name: '月雾', desc: '冷蓝为主，像月光下的薄雾，气质更静。' },
  { name: '神树', desc: '黄绿与柔金交织，更适合强调生机和秩序感。' },
  { name: '虚霭', desc: '偏紫主调里带一点蓝光，保留轻微的层次感。' },
  { name: '浅砂', desc: '奶茶、枯粉和陶土色更克制，接近日常器物感。' },
]

const featuredShots = computed(() =>
  siteContent.featuredShotIds.map((id) => siteContent.screenshotSlots.find((item) => item.id === id)).filter(Boolean),
)

const anchoredFeatures = computed(() =>
  siteContent.featureGroups.map((group) => ({
    orbit: group.orbit,
    title: group.title,
    lead: group.lead,
    cards: group.cards.slice(0, 2),
  })),
)
</script>

<template>
  <div ref="pageRef" class="page page--home">
    <HeroScene
      :brand="siteContent.brand"
      :panels="siteContent.heroPanels"
      :highlights="siteContent.homeHighlights"
    />

    <div class="page__container">
      <section class="home-editorial">
        <div class="home-editorial__copy">
          <span class="home-kicker">Refined Official Site</span>
          <h2>官网从“会发光的宣传页”回到“能解释产品的门面”</h2>
          <p>
            这次重构不再堆高概念词汇，而是按真实源码去讲产品：查药、识药、提醒、打卡、
            AI 解读和安全辅助分别做什么，怎样接成一条能长期使用的路径。
          </p>
          <div class="home-editorial__actions">
            <RouterLink to="/features" class="home-link home-link--primary">
              查看功能全景
            </RouterLink>
            <RouterLink to="/about" class="home-link home-link--secondary">
              对照项目结构
            </RouterLink>
          </div>
        </div>

        <div class="home-editorial__facts">
          <article v-for="fact in sourceFacts" :key="fact.label" class="fact-card">
            <span>{{ fact.label }}</span>
            <strong>{{ fact.value }}</strong>
            <p>{{ fact.body }}</p>
          </article>
        </div>
      </section>

      <GlassSection
        id="features"
        eyebrow="Source-Aligned Features"
        title="从当前源码里，能看到一条很完整的三段式能力链"
        lead="它不是炫技式的功能墙，而是按真实页面、控制器、接口和本地能力整理出来的产品地图。"
      >
        <div class="anchor-grid">
          <article v-for="group in anchoredFeatures" :key="group.title" class="anchor-card">
            <div class="anchor-card__head">
              <span>{{ group.orbit }}</span>
              <h3>{{ group.title }}</h3>
              <p>{{ group.lead }}</p>
            </div>

            <div class="anchor-card__items">
              <div v-for="card in group.cards" :key="card.title" class="anchor-item">
                <strong>{{ card.title }}</strong>
                <p>{{ card.body }}</p>
              </div>
            </div>
          </article>
        </div>
      </GlassSection>

      <section class="home-rhythm">
        <div class="home-rhythm__intro">
          <span class="home-kicker">Daily Rhythm</span>
          <h2>真正有用的不是“识别了一次”，而是之后还能继续发生什么</h2>
          <p>
            识别、阅读、提醒和历史沉淀本来就应该是一条连续路径。只把其中任何一步做得很亮眼，
            都不足以支撑长期使用。
          </p>
        </div>

        <div class="home-rhythm__grid">
          <article v-for="item in rhythmSteps" :key="item.step" class="rhythm-card">
            <span>{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </section>

      <GlassSection
        eyebrow="Runtime Gallery"
        title="官网里的截图，不只是装饰，也是在给功能叙事落锚点"
        lead="当运行时媒体在线时，这里会优先展示真实截图；离线时则回退到同样遵循产品结构的 mockup。"
      >
        <div class="home-shot-grid">
          <RuntimeShotCard
            v-for="shot in featuredShots"
            :key="shot.id"
            :shot-id="shot.id"
            :title="shot.title"
            :caption="shot.caption"
            :fallback-scene="shot.fallbackScene"
          />
        </div>
      </GlassSection>

      <section class="theme-studio">
        <div class="theme-studio__copy">
          <span class="home-kicker">Theme System</span>
          <h2>视觉风格这次也收口到更柔和的浅色莫兰迪体系</h2>
          <p>
            主应用里已经有显示模式与主题预设，这次官网不再抢戏，而是借用同样的气质去做更安静、
            更耐看的官方门面。
          </p>
        </div>

        <div class="theme-studio__modes">
          <article
            v-for="mode in themeModes"
            :key="mode.title"
            class="mode-card"
            :class="`mode-card--${mode.tone}`"
          >
            <h3>{{ mode.title }}</h3>
            <p>{{ mode.desc }}</p>
          </article>
        </div>

        <div class="theme-studio__presets">
          <article v-for="preset in themePresets" :key="preset.name" class="preset-chip">
            <strong>{{ preset.name }}</strong>
            <p>{{ preset.desc }}</p>
          </article>
        </div>
      </section>

      <CTAConsole :content="siteContent.homeMeta" />
    </div>
  </div>
</template>

<style scoped>
.home-editorial,
.theme-studio {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 1.5rem;
}

.home-editorial {
  align-items: stretch;
}

.home-editorial__copy,
.theme-studio__copy {
  padding: 2rem;
  border: 1px solid rgba(135, 121, 112, 0.12);
  border-radius: 2rem;
  background:
    radial-gradient(circle at top right, rgba(215, 199, 187, 0.16), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(248, 241, 235, 0.88));
  box-shadow: 0 24px 56px rgba(126, 111, 103, 0.08);
}

.home-kicker {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(135, 121, 112, 0.12);
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(98, 85, 79, 0.78);
}

.home-editorial__copy h2,
.home-rhythm__intro h2,
.theme-studio__copy h2 {
  margin: 1rem 0 0;
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: rgba(72, 59, 53, 0.96);
}

.home-editorial__copy p,
.home-rhythm__intro p,
.theme-studio__copy p {
  margin: 1rem 0 0;
  max-width: 42rem;
  color: rgba(98, 85, 79, 0.82);
  line-height: 1.8;
  font-size: 1rem;
}

.home-editorial__actions {
  display: flex;
  gap: 0.85rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.2rem;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}

.home-link--primary {
  background: rgba(191, 166, 158, 0.2);
  color: rgba(72, 59, 53, 0.96);
  border: 1px solid rgba(191, 166, 158, 0.24);
}

.home-link--secondary {
  background: rgba(255, 255, 255, 0.66);
  color: rgba(98, 85, 79, 0.86);
  border: 1px solid rgba(135, 121, 112, 0.12);
}

.home-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(126, 111, 103, 0.1);
}

.home-editorial__facts {
  display: grid;
  gap: 1rem;
}

.fact-card,
.anchor-card,
.rhythm-card,
.mode-card,
.preset-chip {
  position: relative;
  overflow: hidden;
  border-radius: 1.6rem;
  border: 1px solid rgba(135, 121, 112, 0.12);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(247, 241, 236, 0.82));
  box-shadow: 0 22px 44px rgba(126, 111, 103, 0.08);
}

.fact-card {
  padding: 1.4rem;
}

.fact-card span,
.anchor-card__head span {
  display: inline-flex;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(117, 103, 95, 0.68);
}

.fact-card strong {
  display: block;
  margin-top: 0.7rem;
  font-size: 1.2rem;
  line-height: 1.35;
  color: rgba(72, 59, 53, 0.96);
}

.fact-card p {
  margin: 0.8rem 0 0;
  color: rgba(98, 85, 79, 0.76);
  line-height: 1.65;
}

.anchor-grid,
.home-shot-grid {
  display: grid;
  gap: 1.25rem;
}

.anchor-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

.anchor-card {
  padding: 1.5rem;
}

.anchor-card__head h3 {
  margin: 0.55rem 0 0;
  font-size: 1.35rem;
  color: rgba(72, 59, 53, 0.96);
}

.anchor-card__head p {
  margin: 0.75rem 0 0;
  color: rgba(98, 85, 79, 0.78);
  line-height: 1.75;
}

.anchor-card__items {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.25rem;
}

.anchor-item {
  padding: 1rem 1.05rem;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(135, 121, 112, 0.08);
}

.anchor-item strong {
  color: rgba(72, 59, 53, 0.95);
}

.anchor-item p {
  margin: 0.45rem 0 0;
  color: rgba(98, 85, 79, 0.74);
  line-height: 1.6;
  font-size: 0.92rem;
}

.home-rhythm {
  display: grid;
  gap: 1.2rem;
}

.home-rhythm__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.rhythm-card {
  padding: 1.5rem;
  min-height: 14rem;
}

.rhythm-card span {
  display: inline-flex;
  width: 2.7rem;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(191, 166, 158, 0.16);
  color: rgba(98, 85, 79, 0.82);
  font-weight: 700;
}

.rhythm-card h3,
.mode-card h3 {
  margin: 1rem 0 0;
  font-size: 1.2rem;
  color: rgba(72, 59, 53, 0.96);
}

.rhythm-card p,
.mode-card p,
.preset-chip p {
  margin: 0.75rem 0 0;
  color: rgba(98, 85, 79, 0.76);
  line-height: 1.7;
}

.home-shot-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
}

.theme-studio {
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
  align-items: start;
}

.theme-studio__modes,
.theme-studio__presets {
  display: grid;
  gap: 1rem;
}

.theme-studio__modes {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mode-card,
.preset-chip {
  padding: 1.35rem;
}

.mode-card--auto {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(242, 237, 232, 0.9));
}

.mode-card--light {
  background: linear-gradient(180deg, rgba(255, 252, 248, 0.92), rgba(245, 238, 231, 0.92));
}

.mode-card--dark {
  background: linear-gradient(180deg, rgba(94, 87, 84, 0.92), rgba(72, 66, 64, 0.96));
}

.mode-card--dark h3,
.mode-card--dark p {
  color: rgba(246, 239, 233, 0.92);
}

.theme-studio__presets {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 1rem;
}

.preset-chip strong {
  color: rgba(72, 59, 53, 0.95);
  font-size: 1rem;
}

@media (max-width: 1180px) {
  .home-editorial,
  .theme-studio,
  .anchor-grid,
  .home-rhythm__grid,
  .home-shot-grid,
  .theme-studio__modes,
  .theme-studio__presets {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .home-editorial__copy,
  .theme-studio__copy,
  .fact-card,
  .anchor-card,
  .rhythm-card,
  .mode-card,
  .preset-chip {
    padding: 1.2rem;
    border-radius: 1.3rem;
  }

  .home-editorial__copy h2,
  .home-rhythm__intro h2,
  .theme-studio__copy h2 {
    font-size: 2rem;
  }

  .home-editorial__actions {
    flex-direction: column;
  }

  .home-link {
    width: 100%;
  }
}
</style>
