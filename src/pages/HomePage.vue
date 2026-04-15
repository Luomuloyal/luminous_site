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
    body: '覆盖首页、搜索、扫描、提醒、打卡与安全辅助等核心页面，主要功能入口完整清晰。',
  },
  {
    label: '显示模式',
    value: '跟随系统 / 浅色 / 深色',
    body: '支持跟随系统、浅色与深色三种显示模式，适配不同设备环境与阅读习惯。',
  },
  {
    label: '主题预设',
    value: '柔岚 / 月雾 / 神树 / 虚霭 / 浅砂',
    body: '提供五套主题预设，让界面在保持统一秩序的同时具备更细腻的视觉层次。',
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
  {
    title: '跟随系统',
    desc: '适合把应用放进日常设备环境里，不强迫你学习另一套视觉节奏。',
    tone: 'auto',
    palette: ['#C7D5E6', '#E6D6C9', '#D4E1D1'],
  },
  {
    title: '浅色模式',
    desc: '适合白天高频查看信息，界面明快柔和，便于长时间阅读。',
    tone: 'light',
    palette: ['#D8E5F0', '#F3DDCF', '#E3E7CC'],
  },
  {
    title: '深色模式',
    desc: '在夜间或暗光环境下减少刺激感，和提醒、打卡等高频页面更好配合。',
    tone: 'dark',
    palette: ['#5D5961', '#847A78', '#8A92A1'],
  },
]

const themePresets = [
  {
    name: '柔岚',
    mood: '轻盈明快',
    desc: '淡蓝、浅紫和暖金并置，明快但不刺眼。',
    palette: ['#CFE1F3', '#E7D8EE', '#F1E1B9'],
    tone: 'soft-glow',
  },
  {
    name: '月雾',
    mood: '冷静通透',
    desc: '冷蓝为主，像月光下的薄雾，气质更静。',
    palette: ['#D5E3F6', '#C7D5F2', '#E7EDF6'],
    tone: 'moon-mist',
  },
  {
    name: '神树',
    mood: '生机秩序',
    desc: '黄绿与柔金交织，更适合强调生机和秩序感。',
    palette: ['#DCE6BE', '#C8D49F', '#E7D6A8'],
    tone: 'divine-tree',
  },
  {
    name: '虚霭',
    mood: '朦胧层次',
    desc: '偏紫主调里带一点蓝光，保留轻微的层次感。',
    palette: ['#DCCEF2', '#C9BEE7', '#D8DEF4'],
    tone: 'illusion',
  },
  {
    name: '浅砂',
    mood: '日常器物',
    desc: '奶茶、枯粉和陶土色更克制，接近日常器物感。',
    palette: ['#E9D7C8', '#DDBFBA', '#E9E0D5'],
    tone: 'light-sand',
  },
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
          <span class="home-kicker">Product Overview</span>
          <h2>围绕识药、懂药、记药，建立清晰连续的用药体验</h2>
          <p>
            Luminous 面向日常用药管理场景，整合查药、拍照识别、提醒、打卡、AI 解读与安全辅助，
            让信息获取、重点理解与后续执行自然衔接。
          </p>
          <div class="home-editorial__actions">
            <RouterLink to="/features" class="home-link home-link--primary">
              查看功能全景
            </RouterLink>
            <RouterLink to="/about" class="home-link home-link--secondary">
              了解产品与架构
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
        title="从查药到提醒，形成完整的用药辅助链路"
        lead="功能围绕查找、理解、提醒与复查展开，帮助用户在一次使用之后继续完成后续管理。"
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
        title="核心界面示意，对应主要使用环节"
        lead="页面示意展示识别、搜索与安全辅助等核心体验；运行时素材在线时会优先展示最新截图。"
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
          <h2>浅色莫兰迪配色，让信息层次更柔和</h2>
          <p>
            产品支持显示模式切换与多套主题预设，页面在保持统一品牌气质的同时，
            兼顾阅读舒适度与层次辨识度。
          </p>
        </div>

        <div class="theme-studio__surface">
          <div class="theme-studio__modes">
            <article
              v-for="mode in themeModes"
              :key="mode.title"
              class="mode-card"
              :class="`mode-card--${mode.tone}`"
            >
              <div class="mode-card__palette">
                <i
                  v-for="color in mode.palette"
                  :key="color"
                  :style="{ background: color }"
                ></i>
              </div>
              <h3>{{ mode.title }}</h3>
              <p>{{ mode.desc }}</p>
            </article>
          </div>

          <div class="theme-studio__swash-grid">
            <span class="theme-studio__swash theme-studio__swash--blue"></span>
            <span class="theme-studio__swash theme-studio__swash--pink"></span>
            <span class="theme-studio__swash theme-studio__swash--sage"></span>
            <span class="theme-studio__swash theme-studio__swash--sand"></span>
            <span class="theme-studio__swash theme-studio__swash--lavender"></span>
            <span class="theme-studio__swash theme-studio__swash--mist"></span>
          </div>
        </div>

        <div class="theme-studio__presets">
          <article
            v-for="preset in themePresets"
            :key="preset.name"
            class="preset-chip"
            :class="`preset-chip--${preset.tone}`"
          >
            <div class="preset-chip__palette">
              <i
                v-for="color in preset.palette"
                :key="color"
                :style="{ background: color }"
              ></i>
            </div>
            <div class="preset-chip__copy">
              <span>{{ preset.mood }}</span>
              <strong>{{ preset.name }}</strong>
              <p>{{ preset.desc }}</p>
            </div>
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

.theme-studio {
  align-items: stretch;
}

.home-editorial__copy,
.theme-studio__copy {
  position: relative;
  overflow: hidden;
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
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.2rem;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}

.home-link::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 18%, rgba(255, 255, 255, 0.26) 34%, transparent 52%);
  opacity: 0;
  transform: translateX(-22%);
  transition: opacity 0.28s ease, transform 0.4s ease;
  pointer-events: none;
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

.theme-studio__surface,
.theme-studio__modes,
.theme-studio__presets {
  display: grid;
  gap: 1rem;
}

.theme-studio__surface {
  grid-template-rows: auto 1fr;
}

.theme-studio__modes {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mode-card,
.preset-chip {
  padding: 1.35rem;
}

.home-editorial__copy::before,
.theme-studio__copy::before,
.fact-card::before,
.anchor-card::before,
.rhythm-card::before,
.mode-card::before,
.preset-chip::before {
  content: '';
  position: absolute;
  inset: auto -14% -38% auto;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: rgba(215, 199, 187, 0.22);
  opacity: 0;
  filter: blur(24px);
  transform: scale(0.82);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.theme-studio__swash,
.anchor-item {
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background-color 0.28s ease;
}

@media (hover: hover) and (pointer: fine) {
  .home-editorial__copy:hover,
  .theme-studio__copy:hover,
  .fact-card:hover,
  .anchor-card:hover,
  .rhythm-card:hover,
  .mode-card:hover,
  .preset-chip:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 52px rgba(126, 111, 103, 0.12);
    border-color: rgba(135, 121, 112, 0.2);
  }

  .home-editorial__copy:hover::before,
  .theme-studio__copy:hover::before,
  .fact-card:hover::before,
  .anchor-card:hover::before,
  .rhythm-card:hover::before,
  .mode-card:hover::before,
  .preset-chip:hover::before {
    opacity: 0.88;
    transform: scale(1);
  }

  .home-link:hover::after {
    opacity: 1;
    transform: translateX(12%);
  }

  .anchor-card:hover .anchor-item {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(126, 111, 103, 0.08);
    border-color: rgba(135, 121, 112, 0.14);
    background: rgba(255, 255, 255, 0.82);
  }

  .theme-studio__swash:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 18px 28px rgba(126, 111, 103, 0.12);
  }

  .preset-chip:hover .preset-chip__palette i,
  .mode-card:hover .mode-card__palette i {
    transform: translateY(-2px);
  }
}

.mode-card--auto {
  background:
    radial-gradient(circle at top right, rgba(199, 213, 230, 0.22), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(242, 239, 236, 0.92));
}

.mode-card--light {
  background:
    radial-gradient(circle at top right, rgba(243, 221, 207, 0.26), transparent 34%),
    linear-gradient(180deg, rgba(255, 252, 248, 0.94), rgba(245, 238, 231, 0.94));
}

.mode-card--dark {
  background:
    radial-gradient(circle at top right, rgba(138, 146, 161, 0.14), transparent 32%),
    linear-gradient(180deg, rgba(94, 87, 84, 0.92), rgba(72, 66, 64, 0.96));
}

.mode-card--dark h3,
.mode-card--dark p {
  color: rgba(246, 239, 233, 0.92);
}

.mode-card__palette,
.preset-chip__palette {
  display: flex;
  gap: 0.45rem;
}

.mode-card__palette {
  margin-bottom: 1rem;
}

.mode-card__palette i,
.preset-chip__palette i {
  display: block;
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
}

.mode-card__palette i {
  width: 2.1rem;
  height: 0.65rem;
}

.theme-studio__swash-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(135, 121, 112, 0.12);
  background:
    radial-gradient(circle at top left, rgba(212, 223, 236, 0.24), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(246, 241, 236, 0.92));
  box-shadow: 0 22px 44px rgba(126, 111, 103, 0.08);
}

.theme-studio__swash {
  display: block;
  min-height: 5.4rem;
  border-radius: 1.3rem;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55);
}

.theme-studio__swash--blue {
  background: linear-gradient(180deg, #d9e7f4, #c3d5e7);
}

.theme-studio__swash--pink {
  background: linear-gradient(180deg, #efdfd5, #e2c7be);
}

.theme-studio__swash--sage {
  background: linear-gradient(180deg, #dce7d9, #c5d5c0);
}

.theme-studio__swash--sand {
  background: linear-gradient(180deg, #efe1d5, #dfc9b8);
}

.theme-studio__swash--lavender {
  background: linear-gradient(180deg, #e4d8ef, #cabde2);
}

.theme-studio__swash--mist {
  background: linear-gradient(180deg, #e8edf2, #d2dbe5);
}

.theme-studio__presets {
  grid-column: 1 / -1;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 1rem;
}

.preset-chip {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  min-height: 15rem;
}

.preset-chip__palette i {
  width: 100%;
  height: 0.9rem;
}

.preset-chip__copy {
  display: grid;
  align-content: start;
  gap: 0.4rem;
}

.preset-chip__copy span {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(109, 95, 89, 0.64);
}

.preset-chip strong {
  color: rgba(72, 59, 53, 0.95);
  font-size: 1rem;
}

.preset-chip--soft-glow {
  background:
    radial-gradient(circle at top right, rgba(207, 225, 243, 0.32), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(246, 241, 236, 0.9));
}

.preset-chip--moon-mist {
  background:
    radial-gradient(circle at top right, rgba(213, 227, 246, 0.32), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(241, 244, 248, 0.92));
}

.preset-chip--divine-tree {
  background:
    radial-gradient(circle at top right, rgba(220, 230, 190, 0.34), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(245, 244, 235, 0.92));
}

.preset-chip--illusion {
  background:
    radial-gradient(circle at top right, rgba(220, 206, 242, 0.34), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(244, 240, 247, 0.92));
}

.preset-chip--light-sand {
  background:
    radial-gradient(circle at top right, rgba(233, 215, 200, 0.34), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(246, 241, 237, 0.92));
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

  .theme-studio__swash-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
