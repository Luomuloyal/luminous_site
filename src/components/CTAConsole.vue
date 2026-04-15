<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useSiteManifest } from '../composables/useSiteManifest'
import { formatBytes, formatUpdatedAt, formatVersion } from '../lib/siteRuntime'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})

const { download, screenshots } = useSiteManifest()

const hasRuntimeDownload = computed(() =>
  Boolean(download.value?.available && download.value?.url),
)

const primaryAction = computed(() => {
  if (!hasRuntimeDownload.value || props.content.primaryAction.to) {
    return props.content.primaryAction
  }

  return {
    label: '下载 Android 内测版',
    note: formatVersion(download.value),
    href: download.value.url,
  }
})

const statusText = computed(() => {
  if (!hasRuntimeDownload.value) {
    return props.content.status
  }

  return `${props.content.status} · ${download.value.channel || 'Live Build'}`
})

const runtimeFacts = computed(() => {
  if (!hasRuntimeDownload.value) {
    return []
  }

  return [
    {
      label: 'Version',
      value: formatVersion(download.value),
    },
    {
      label: 'Size',
      value: formatBytes(download.value.sizeBytes),
    },
    {
      label: 'Updated',
      value: formatUpdatedAt(download.value.updatedAt),
    },
  ]
})

const availableScreenshotCount = computed(
  () => screenshots.value.filter((item) => item.available).length,
)

const runtimeSummaryLabel = computed(() =>
  hasRuntimeDownload.value ? 'Manifest Live' : 'Fallback Mode',
)

const runtimeSummaryText = computed(() => {
  if (!hasRuntimeDownload.value) {
    return '媒体服务离线时，下载按钮和截图会优雅回退到当前静态占位内容。'
  }

  const segments = [download.value.channel || 'Android Beta']

  if (screenshots.value.length) {
    segments.push(
      `${availableScreenshotCount.value}/${screenshots.value.length} screenshots ready`,
    )
  }

  if (download.value.updatedAt) {
    segments.push(`Last sync ${formatUpdatedAt(download.value.updatedAt)}`)
  }

  return segments.join(' · ')
})

function actionComponent(action) {
  if (action?.to) {
    return RouterLink
  }

  if (action?.href) {
    return 'a'
  }

  return 'span'
}

function actionProps(action) {
  if (action?.to) {
    return { to: action.to }
  }

  if (action?.href) {
    return {
      href: action.href,
      target: '_blank',
      rel: 'noreferrer',
    }
  }

  return {
    'aria-disabled': 'true',
  }
}
</script>

<template>
  <section class="cta-console" :class="{ 'cta-console--compact': props.compact }" data-animate="fade-up">
    <div class="cta-console__meta">
      <span class="cta-console__status">{{ statusText }}</span>
      <h2>{{ props.content.title }}</h2>
      <p>{{ props.content.body }}</p>

      <div class="cta-console__summary">
        <strong>{{ runtimeSummaryLabel }}</strong>
        <p>{{ runtimeSummaryText }}</p>
      </div>

      <div v-if="runtimeFacts.length" class="cta-console__runtime">
        <article
          v-for="item in runtimeFacts"
          :key="item.label"
          class="cta-console__runtime-card"
        >
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </div>
    </div>

    <div class="cta-console__actions">
      <component
        :is="actionComponent(primaryAction)"
        v-bind="actionProps(primaryAction)"
        class="cta-console__button cta-console__button--primary"
        :class="{ 'is-disabled': !primaryAction.href && !primaryAction.to }"
      >
        <span>{{ primaryAction.label }}</span>
        <small>{{ primaryAction.note }}</small>
      </component>

      <component
        :is="actionComponent(props.content.secondaryAction)"
        v-bind="actionProps(props.content.secondaryAction)"
        class="cta-console__button cta-console__button--secondary"
        :class="{ 'is-disabled': !props.content.secondaryAction.href && !props.content.secondaryAction.to }"
      >
        <span>{{ props.content.secondaryAction.label }}</span>
        <small>{{ props.content.secondaryAction.note }}</small>
      </component>
    </div>
  </section>
</template>

<style scoped>
.cta-console {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  background:
    radial-gradient(circle at top right, rgba(215, 199, 187, 0.14), transparent 28%),
    linear-gradient(180deg, rgba(255,255,255,0.82), rgba(248,242,237,0.9));
  border: 1px solid rgba(132, 120, 113, 0.12);
  border-radius: 1.9rem;
  box-shadow: 0 24px 56px rgba(126, 111, 103, 0.08);
}

.cta-console__meta {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: center;
}

.cta-console__status {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(108, 95, 89, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.cta-console__meta h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  font-weight: 700;
  color: rgba(72, 59, 53, 0.96);
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.cta-console__meta > p {
  margin: 0;
  color: rgba(98, 85, 79, 0.8);
  line-height: 1.75;
  font-size: 0.98rem;
}

.cta-console__summary {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(132, 120, 113, 0.08);
  border-radius: 1.25rem;
  text-align: center;
}

.cta-console__summary strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(72, 59, 53, 0.9);
  margin-bottom: 0.5rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cta-console__summary p {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(98, 85, 79, 0.72);
  line-height: 1.65;
}

.cta-console__runtime {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-console__runtime-card {
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(132, 120, 113, 0.08);
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  white-space: nowrap;
}

.cta-console__runtime-card span {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(108, 95, 89, 0.62);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.5rem;
}

.cta-console__runtime-card strong {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  color: rgba(72, 59, 53, 0.95);
}

.cta-console__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
  width: 100%;
  margin-top: 0.5rem;
}

.cta-console__button {
  width: 100%;
  padding: 1.2rem 1.75rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(132, 120, 113, 0.12);
  border-radius: 1.2rem;
  color: rgba(72, 59, 53, 0.95);
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.cta-console__button span {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(72, 59, 53, 0.95);
}

.cta-console__button small {
  display: block;
  font-size: 0.8rem;
  color: rgba(108, 95, 89, 0.72);
  font-weight: 500;
}

.cta-console__button--primary {
  background: linear-gradient(135deg, rgba(191, 166, 158, 0.18) 0%, rgba(215, 199, 187, 0.24) 100%);
  border-color: rgba(191, 166, 158, 0.22);
  color: rgba(72, 59, 53, 0.98);
  box-shadow: 0 12px 24px rgba(126, 111, 103, 0.08);
}

.cta-console__button--primary:hover:not(.is-disabled) {
  background: linear-gradient(135deg, rgba(191, 166, 158, 0.24) 0%, rgba(215, 199, 187, 0.3) 100%);
  border-color: rgba(191, 166, 158, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 18px 32px rgba(126, 111, 103, 0.11);
}

.cta-console__button--secondary {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(132, 120, 113, 0.14);
  color: rgba(98, 85, 79, 0.9);
}

.cta-console__button--secondary:hover:not(.is-disabled) {
  background: #ffffff;
  border-color: rgba(132, 120, 113, 0.22);
  transform: translateY(-3px);
  box-shadow: 0 18px 30px rgba(126, 111, 103, 0.1);
}

.cta-console__button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.cta-console--compact {
  gap: 2rem;
  padding: 2rem;
  width: 100%;
}

.cta-console--compact .cta-console__meta {
  gap: 1rem;
}

.cta-console--compact .cta-console__meta h2 {
  font-size: clamp(1.5rem, 2.4vw, 2rem);
}

.cta-console--compact .cta-console__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
}

.cta-console--compact .cta-console__button {
  width: 100%;
  padding: 0.9rem 1rem;
  font-size: 0.9rem;
}

.cta-console--compact .cta-console__button small {
  font-size: 0.7rem;
}

@media (max-width: 768px) {
  .cta-console {
    gap: 2rem;
    padding: 1.75rem;
    max-width: 100%;
    margin: 0 auto;
  }

  .cta-console__meta {
    gap: 1rem;
  }

  .cta-console__meta h2 {
    font-size: 1.5rem;
  }

  .cta-console__runtime {
    flex-direction: column;
    justify-content: center;
  }

  .cta-console__runtime-card {
    white-space: normal;
    text-align: center;
  }

  .cta-console__actions {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .cta-console__button {
    width: 100%;
    padding: 0.9rem 1rem;
    font-size: 0.9rem;
  }

  .cta-console--compact {
    gap: 1.5rem;
    padding: 1.5rem;
  }
}
</style>
