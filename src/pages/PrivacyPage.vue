<script setup>
import { ref } from 'vue'
import CTAConsole from '../components/CTAConsole.vue'
import GlassSection from '../components/GlassSection.vue'
import { siteContent } from '../content/siteContent'
import { usePageMotion } from '../composables/usePageMotion'

const pageRef = ref(null)

usePageMotion(pageRef)

const expandedSection = ref(0)

const toggleSection = (index) => {
  expandedSection.value = expandedSection.value === index ? -1 : index
}
</script>

<template>
  <div ref="pageRef" class="page page--privacy">
    <section class="page-hero">
      <div class="page__container">
        <div class="page-hero__content" data-hero-item>
          <span class="page-hero__eyebrow">Trust & Security</span>
          <h1>{{ siteContent.privacyContent.title }}</h1>
          <p>{{ siteContent.privacyContent.subtitle }}</p>
        </div>
      </div>
    </section>

    <div class="page__container">
      <GlassSection
        eyebrow="Core Principle"
        title="把数据边界讲清楚，比写满口号更重要"
        lead="我们重点说明数据范围、AI 参与时机与用户控制方式，帮助你清楚了解产品如何处理信息。"
      >
        <div class="principles-grid">
          <article class="principle-card">
            <span class="principle-number">01</span>
            <h3>最小化收集</h3>
            <p>只收集支持用药管理真正必要的数据，不要求不必要的权限。</p>
          </article>
          <article class="principle-card">
            <span class="principle-number">02</span>
            <h3>透明使用</h3>
            <p>每项数据使用都会明确告知用户，没有隐蔽的跟踪或分析。</p>
          </article>
          <article class="principle-card">
            <span class="principle-number">03</span>
            <h3>用户掌控</h3>
            <p>用户对自己的数据有完全的查看、修改、删除与共享权限。</p>
          </article>
        </div>
      </GlassSection>

      <section class="privacy-accordion">
        <div
          v-for="(section, sectionIdx) in siteContent.privacyContent.sections"
          :key="section.heading"
          class="accordion-item"
        >
          <button
            class="accordion-header"
            @click="toggleSection(sectionIdx)"
            :class="{ 'accordion-header--expanded': expandedSection === sectionIdx }"
          >
            <span class="accordion-title">{{ section.heading }}</span>
            <span class="accordion-icon">›</span>
          </button>

          <transition
            enter-active-class="transition-all duration-300"
            leave-active-class="transition-all duration-300"
          >
            <div
              v-show="expandedSection === sectionIdx"
              class="accordion-content"
            >
              <div class="content-inner">
                <article
                  v-for="item in section.items"
                  :key="item.title"
                  class="privacy-item"
                >
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.detail }}</p>
                </article>
              </div>
            </div>
          </transition>
        </div>
      </section>

      <GlassSection
        eyebrow="Data Rights"
        title="你有权对自己的数据做这些事"
        lead="我们不仅要保护你的数据，还要让你在任何时候都能完全掌控它。"
      >
        <div class="rights-grid">
          <article class="right-card">
            <span class="right-icon">👁️</span>
            <h4>查看与访问</h4>
            <p>识别历史、提醒计划、打卡记录与相册条目，都应该尽量以用户可回看的形式存在。</p>
            <span class="action-link">应用内逐步完善</span>
          </article>

          <article class="right-card">
            <span class="right-icon">✏️</span>
            <h4>编辑与更正</h4>
            <p>提醒计划、药物备注或部分个人资料出现错误时，用户应该能自己改回来，而不是只能重新开始。</p>
            <span class="action-link">以应用能力为准</span>
          </article>

          <article class="right-card">
            <span class="right-icon">🗑️</span>
            <h4>删除与遗忘</h4>
            <p>如果某条识别记录、提醒或相册内容已经没有保留价值，用户应能主动删除它。</p>
            <span class="action-link">不展示伪入口</span>
          </article>

          <article class="right-card">
            <span class="right-icon">🔗</span>
            <h4>可携带权</h4>
            <p>导出与迁移能力会随着产品迭代持续完善，具体支持范围将以正式上线能力为准。</p>
            <span class="action-link">后续随版本同步</span>
          </article>

          <article class="right-card">
            <span class="right-icon">🚫</span>
            <h4>撤销同意</h4>
            <p>你可以停用 AI 解读、取消提醒、退出登录或关闭相关权限，而不是被迫接受整套能力。</p>
            <span class="action-link">用户拥有选择权</span>
          </article>

          <article class="right-card">
            <span class="right-icon">❌</span>
            <h4>账户注销</h4>
            <p>账户注销与数据清理将按照实际产品能力和后端流程推进，以正式提供的入口与说明为准。</p>
            <span class="action-link">以实际流程为准</span>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Technical Safeguard"
        title="当前产品提供的技术与数据保护措施"
        lead="我们围绕本地存储、数据分层、JWT 会话与 AI 代理等机制说明信息处理方式。"
      >
        <div class="safeguard-timeline">
          <div class="safeguard-step">
            <span class="safeguard-phase">在你的设备上</span>
            <div class="safeguard-detail">
              <h4>本地优先</h4>
              <p>项目中已经接入本地数据库、偏好存储与本地通知能力，说明提醒、历史和部分状态被设计为尽量先在设备侧完成。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">在网络传输中</span>
            <div class="safeguard-detail">
              <h4>通过服务端统一代理</h4>
              <p>客户端不会直接把所有外部能力散落到多个地方调用，而是通过后端 API 统一承接认证、查药、扫描记录和 AI 相关请求。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">在我们的服务器上</span>
            <div class="safeguard-detail">
              <h4>数据分层</h4>
              <p>用户业务数据与药品结构化数据分别由 MongoDB 与 MySQL 承担，JWT 会话负责维持登录态边界。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">对第三方 API</span>
            <div class="safeguard-detail">
              <h4>AI 按需参与</h4>
              <p>AI 相关能力通过后端代理，并只在你主动使用 AI 解读或安全辅助时按需参与。</p>
            </div>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="If You Have Questions"
        title="如果你想继续核对这些描述"
        lead="你可以通过应用内反馈或版本更新信息，继续了解产品能力与数据处理边界。"
      >
        <div class="contact-section">
          <p>
            目前更现实的沟通与核对路径有这些：
          </p>
          <ul class="contact-methods">
            <li><strong>应用内反馈：</strong>打开应用 → 设置 → 反馈与建议</li>
            <li><strong>版本更新：</strong>通过下载页与版本说明了解新功能、调整项与可用状态</li>
            <li><strong>隐私说明：</strong>当数据流或功能边界发生变化时，本页会同步更新</li>
          </ul>
          <p style="margin-top: 1rem; color: rgba(71, 85, 105, 0.75);">
            <em>最后更新：2026 年 4 月 15 日</em>
          </p>
        </div>
      </GlassSection>

      <CTAConsole :content="siteContent.privacyMeta" compact />
    </div>
  </div>
</template>

<style scoped>
.page--privacy {
  --color-accent: var(--theme-accent, #ffd9e3);
  --color-accent-secondary: var(--theme-accent-secondary, #d8e0ff);
  --color-glow: var(--theme-glow, rgba(255, 217, 227, 0.08));
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.principle-card {
  padding: 1.25rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent) 18%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--color-accent-secondary) 12%));
  border: 1px solid color-mix(in srgb, var(--color-accent) 28%, white);
  border-radius: 0.5rem;
  position: relative;
}

.principle-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--color-accent);
}

.principle-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 0.3rem;
  opacity: 0.3;
}

.principle-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(15, 23, 42, 0.95);
}

.principle-card p {
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  margin: 0;
  font-size: 0.9rem;
}

.privacy-accordion {
  margin: 2rem 0;
}

.accordion-item {
  margin-bottom: 0.75rem;
  border: 1px solid color-mix(in srgb, var(--color-accent) 28%, white);
  border-radius: 0.5rem;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent-secondary) 14%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 90%, var(--color-accent-secondary) 10%));
  transition: border-color 0.25s ease, background-color 0.25s ease;
}

.accordion-item:hover {
  border-color: rgba(100, 116, 139, 0.08);
  background: rgba(255, 255, 255, 1);
}

.accordion-header {
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.25s ease;
}

.accordion-header:hover {
  background: rgba(255, 217, 227, 0.06);
}

.accordion-header--expanded {
  background: rgba(255, 217, 227, 0.08);
}

.accordion-title {
  font-weight: 600;
  color: rgba(15, 23, 42, 0.95);
  text-align: left;
}

.accordion-icon {
  font-size: 1.25rem;
  color: var(--color-accent);
  transition: transform 0.25s ease;
  display: inline-block;
  flex-shrink: 0;
}

.accordion-header--expanded .accordion-icon {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
}

.content-inner {
  padding: 0 1.5rem 1rem;
  border-top: 1px solid color-mix(in srgb, var(--color-accent) 22%, white);
}

.privacy-item {
  margin-bottom: 1rem;
}

.privacy-item:last-child {
  margin-bottom: 0;
}

.privacy-item h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: rgba(15, 23, 42, 0.95);
}

.privacy-item p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  font-size: 0.9rem;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.right-card {
  padding: 1.25rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent-secondary) 16%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--color-accent-tertiary) 12%));
  border: 1px solid color-mix(in srgb, var(--color-accent) 26%, white);
  border-radius: 0.5rem;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.right-card:hover {
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent) 20%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.95), color-mix(in srgb, white 84%, var(--color-accent) 16%));
  border-color: color-mix(in srgb, var(--color-accent) 36%, white);
}

.right-icon {
  display: block;
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.right-card h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(15, 23, 42, 0.95);
}

.right-card p {
  font-size: 0.9rem;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.action-link {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}

.action-link:hover {
  color: rgba(15, 23, 42, 0.95);
}

.safeguard-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.safeguard-step {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  padding: 1.25rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent-tertiary) 16%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--color-accent-secondary) 12%));
  border: 1px solid color-mix(in srgb, var(--color-accent) 24%, white);
  border-radius: 0.5rem;
}

.safeguard-phase {
  font-weight: 600;
  color: var(--color-accent);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.safeguard-detail h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: rgba(15, 23, 42, 0.95);
}

.safeguard-detail p {
  margin: 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  font-size: 0.9rem;
}

.contact-section {
  padding: 1.5rem;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-accent) 16%, white), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), color-mix(in srgb, white 88%, var(--color-accent-tertiary) 12%));
  border: 1px solid color-mix(in srgb, var(--color-accent) 24%, white);
  border-radius: 0.5rem;
}

.contact-section p {
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.contact-methods {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.contact-methods li {
  padding: 0.5rem 0;
  color: rgba(71, 85, 105, 0.7);
  line-height: 1.5;
  font-size: 0.9rem;
}

.contact-methods strong {
  color: rgba(15, 23, 42, 0.95);
  font-weight: 600;
}

@media (max-width: 768px) {
  .safeguard-step {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .safeguard-phase {
    padding-bottom: 0.4rem;
    display: block;
  }

  .principles-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
