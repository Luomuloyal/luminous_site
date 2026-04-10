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
        title="你的用药数据的三层防护"
        lead="从收集原则、存储加密到访问控制，我们在产品设计的每一层都把你的隐私放在最高优先级。"
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
            <p>随时查看应用中存储的全部个人数据，包括识别结果、提醒历史与打卡记录。</p>
            <a href="#" class="action-link">如何导出数据</a>
          </article>

          <article class="right-card">
            <span class="right-icon">✏️</span>
            <h4>编辑与更正</h4>
            <p>修改不准确的信息，比如药物名称、用法用量或个人信息。</p>
            <a href="#" class="action-link">编辑指南</a>
          </article>

          <article class="right-card">
            <span class="right-icon">🗑️</span>
            <h4>删除与遗忘</h4>
            <p>删除任何不需要的数据，我们会彻底清除对应的副本与备份。</p>
            <a href="#" class="action-link">请求删除</a>
          </article>

          <article class="right-card">
            <span class="right-icon">🔗</span>
            <h4>可携带权</h4>
            <p>以标准格式导出全部数据，迁移到其他应用或保存为个人备份。</p>
            <a href="#" class="action-link">数据导出</a>
          </article>

          <article class="right-card">
            <span class="right-icon">🚫</span>
            <h4>撤销同意</h4>
            <p>随时撤销之前授予的任何权限，比如停止与医生的数据共享。</p>
            <a href="#" class="action-link">管理权限</a>
          </article>

          <article class="right-card">
            <span class="right-icon">❌</span>
            <h4>账户注销</h4>
            <p>注销账户时，全部个人数据会按照法律要求的时间表安全删除。</p>
            <a href="#" class="action-link">请求注销</a>
          </article>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="Technical Safeguard"
        title="我们怎样在技术层面保护你的数据"
        lead="除了政策与流程，我们还在系统架构、网络通信、存储加密的每一环都部署了防护措施。"
      >
        <div class="safeguard-timeline">
          <div class="safeguard-step">
            <span class="safeguard-phase">在你的设备上</span>
            <div class="safeguard-detail">
              <h4>本地优先</h4>
              <p>除非你明确选择分享或启用 AI 解读，否则识别结果与提醒记录都只存在你的设备上。即使丢失设备，云端也没有备份副本。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">在网络传输中</span>
            <div class="safeguard-detail">
              <h4>端到端加密</h4>
              <p>所有网络通信都使用 TLS 1.2+ 加密，防止中间人攻击。敏感数据如用户密码在传输前还会进行额外的加密。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">在我们的服务器上</span>
            <div class="safeguard-detail">
              <h4>应用级别加密</h4>
              <p>即使数据已送达服务器，用户数据也以加密形式存储在 MongoDB 中。用户只能通过自己的认证令牌访问。</p>
            </div>
          </div>

          <div class="safeguard-step">
            <span class="safeguard-phase">对第三方 API</span>
            <div class="safeguard-detail">
              <h4>数据处理协议</h4>
              <p>调用豆包 AI 时，我们会签订数据处理协议，保证 AI 提供商不存储或二次使用数据。处理完成即刻删除。</p>
            </div>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        eyebrow="If You Have Questions"
        title="隐私与安全疑问？让我们帮你解答"
        lead="如果这份政策中还有不清楚的地方，或者你想了解更多细节，我们很乐意倾听。"
      >
        <div class="contact-section">
          <p>
            你可以通过以下方式与我们联系，我们会在 48 小时内回复关于隐私与安全的问题：
          </p>
          <ul class="contact-methods">
            <li><strong>应用内反馈：</strong>打开应用 → 设置 → 反馈与建议</li>
            <li><strong>官方邮箱：</strong>contact@luminous.app（隐私问题请标注 [Privacy]）</li>
            <li><strong>GitHub Issue：</strong>提交到公开仓库，我们会公开回复</li>
          </ul>
          <p style="margin-top: 1rem; color: rgba(71, 85, 105, 0.75);">
            <em>最后更新：2026 年 3 月 29 日</em>
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
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
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
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  overflow: hidden;
  background: #ffffff;
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
  border-top: 1px solid rgba(100, 116, 139, 0.06);
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
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.right-card:hover {
  background: rgba(255, 217, 227, 0.06);
  border-color: rgba(255, 217, 227, 0.12);
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
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
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
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
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
