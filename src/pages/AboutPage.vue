<script setup>
import { ref } from 'vue'
import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const teamMembers = [
  {
    role: '客户端',
    name: 'Flutter App',
    desc: '覆盖识别、药品信息、提醒、打卡和安全辅助等主流程页面。',
  },
  {
    role: '服务端',
    name: 'Express API',
    desc: '提供认证、药品查询和 AI 相关接口，并保持 RESTful 路由演进。',
  },
  {
    role: '数据层',
    name: 'Mongo + MySQL',
    desc: 'MongoDB 存储用户数据，MySQL 负责药品查询数据，兼顾扩展性与稳定性。',
  },
]

const milestones = [
  { year: '阶段 1', event: '完成识别、药品信息、提醒和打卡的核心链路搭建' },
  { year: '阶段 2', event: '补齐安全辅助与识别相册，形成可回看的闭环体验' },
  { year: '阶段 3', event: '后端迁移到云服务器并推进 RESTful API 规范改造' },
  { year: '阶段 4', event: '建立双数据库架构：MongoDB 用户数据 + MySQL 药品数据' },
  { year: '阶段 5', event: '站点接入运行时清单，支持版本与截图信息同步更新' },
]

const architectureFacts = [
  {
    title: '认证体系',
    desc: '使用 JWT 双 Token（AT/RT）与刷新机制，保证登录态安全和连续使用体验。',
  },
  {
    title: '接口形态',
    desc: '围绕 Express 构建 API 服务，逐步完成从旧云函数路径到 RESTful 路由的过渡。',
  },
  {
    title: '数据策略',
    desc: '用户数据走 MongoDB，药品查询走 MySQL，本地侧强调轻量缓存与按需同步。',
  },
]

const values = [
  {
    title: '安全第一',
    desc: '每一个功能设计都以用药安全为底线，AI 辅助永远不能替代专业判断。',
  },
  {
    title: '化繁为简',
    desc: '把复杂的医学和用药信息，翻译成每个人都能看懂的语言。',
  },
  {
    title: '隐私守护',
    desc: '你的用药数据只属于你，我们会尽量让数据流向、权限边界和用户控制权都保持清楚。',
  },
]
</script>

<template>
  <div ref="pageRef" class="page page--about">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">About Us</span>
          <h1>关于 Luminous</h1>
          <p>
            我们希望把识别、提醒与安全辅助做成一款真正能长期使用的轻量工具，
            让重要信息在正确的时间出现，而不是增加新的操作负担。
          </p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <GlassSection
        eyebrow="Our Mission"
        title="让用药安全变得顺手"
        lead="药品信息分散、提醒容易中断、历史难回看，是我们重点要解决的问题。我们把这些环节编织成一条连续链路，从识别到提醒都保持同一体验语义。"
      >
        <div class="about-mission-grid">
          <article v-for="v in values" :key="v.title" class="value-card">
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Architecture"
        title="当前技术架构"
        lead="网站文案与软件实现保持一致：服务端采用 Express + JWT，用户与药品数据分层存储，并在云服务器部署。"
      >
        <div class="about-mission-grid">
          <article v-for="item in architectureFacts" :key="item.title" class="value-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Project Modules"
        title="产品是如何被拼起来的"
        lead="从移动端、服务端到数据层，各模块围绕同一套用药管理流程协同工作。"
      >
        <div class="team-grid">
          <article v-for="member in teamMembers" :key="member.name" class="team-card">
            <div class="team-card__avatar">
              <span>{{ member.name.charAt(0) }}</span>
            </div>
            <div class="team-card__info">
              <span class="team-card__role">{{ member.role }}</span>
              <h3>{{ member.name }}</h3>
              <p>{{ member.desc }}</p>
            </div>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Timeline"
        title="迭代里程碑"
        lead="按功能闭环、架构升级和上线能力三个维度持续推进。"
      >
        <div class="timeline">
          <article
            v-for="(m, i) in milestones"
            :key="m.year"
            class="timeline-item"
          >
            <span class="timeline-item__year">{{ m.year }}</span>
            <span class="timeline-item__dot"></span>
            <p>{{ m.event }}</p>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Tech Stack Breakdown"
        title="完整的技术栈清单"
        lead="从前端到后端，从数据存储到外部服务集成，这是驱动 Luminous 的所有关键技术。"
      >
        <div class="techstack-categories">
          <article
            v-for="category in siteContent.techStackDetails"
            :key="category.category"
            class="techstack-category"
          >
            <h3>{{ category.category }}</h3>
            <div class="techstack-items">
              <div
                v-for="item in category.items"
                :key="item.name"
                class="techstack-item"
              >
                <div class="item-header">
                  <strong>{{ item.name }}</strong>
                  <span class="item-version">{{ item.version }}</span>
                </div>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Release History"
        title="发布日志与更新记录"
        lead="追踪每个版本背后有哪些功能完善和问题修复。"
      >
        <div class="release-timeline">
          <article
            v-for="release in siteContent.releaseNotes"
            :key="release.version"
            class="release-card"
          >
            <div class="release-header">
              <h4>{{ release.version }}</h4>
              <span class="release-date">{{ release.date }}</span>
            </div>
            <ul class="release-highlights">
              <li v-for="highlight in release.highlights" :key="highlight">
                {{ highlight }}
              </li>
            </ul>
          </article>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.aboutMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.about-mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-card {
  padding: 1.5rem;
  border-radius: 1.2rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-tertiary) 14%));
  border: 1px solid var(--route-border);
}

.value-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--copy-strong);
  margin-bottom: 0.75rem;
}

.value-card p {
  font-size: 0.95rem;
  color: var(--copy-soft);
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.team-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1.2rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-secondary) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--route-accent-tertiary) 12%));
  border: 1px solid var(--route-border);
}

.team-card__avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--route-accent), var(--route-accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.team-card__avatar span {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}

.team-card__info {
  flex: 1;
}

.team-card__role {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--route-accent);
}

.team-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--copy-strong);
  margin: 0.25rem 0 0.5rem;
}

.team-card p {
  font-size: 0.88rem;
  color: var(--copy-soft);
  line-height: 1.5;
}

.timeline {
  margin-top: 2rem;
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--route-accent), var(--route-accent-secondary));
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  padding: 0.75rem 0 0.75rem 1.5rem;
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
  align-items: center;
}

.timeline-item__dot {
  position: absolute;
  left: -2.35rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--route-accent);
}

.timeline-item__year {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--route-accent);
}

.timeline-item p {
  font-size: 0.95rem;
  color: var(--copy-soft);
}

.techstack-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.techstack-category {
  padding: 1.75rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--route-accent-secondary) 12%));
  border: 1px solid var(--route-border);
  border-radius: 0.75rem;
}

.techstack-category h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: rgba(15, 23, 42, 0.95);
  border-bottom: 2px solid var(--route-accent);
  padding-bottom: 0.75rem;
}

.techstack-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.techstack-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.5rem;
  border-left: 3px solid var(--route-accent);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.item-header strong {
  color: rgba(15, 23, 42, 0.95);
  font-size: 0.95rem;
}

.item-version {
  font-size: 0.75rem;
  background: linear-gradient(135deg, var(--route-accent), var(--route-accent-secondary));
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

.techstack-item p {
  font-size: 0.85rem;
  color: rgba(71, 85, 105, 0.75);
  margin: 0;
  line-height: 1.5;
}

.release-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.release-card {
  padding: 1.5rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--route-accent-tertiary) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), color-mix(in srgb, white 86%, var(--route-accent-tertiary) 14%));
  border: 1px solid var(--route-border);
  border-radius: 0.75rem;
  border-left: 4px solid var(--route-accent);
  transition: all 0.3s ease;
}

.release-card:hover {
  transform: translateY(-2px);
  border-left-color: var(--route-accent-secondary);
}

.release-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(100, 116, 139, 0.08);
}

.release-header h4 {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(15, 23, 42, 0.95);
  margin: 0;
}

.release-date {
  font-size: 0.8rem;
  color: rgba(100, 110, 120, 0.7);
}

.release-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.release-highlights li {
  font-size: 0.9rem;
  color: rgba(71, 85, 105, 0.8);
  padding-left: 1.5rem;
  position: relative;
}

.release-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--route-accent);
  font-weight: 600;
}

@media (max-width: 768px) {
  .techstack-categories {
    grid-template-columns: 1fr;
  }

  .release-timeline {
    grid-template-columns: 1fr;
  }
}
</style>
