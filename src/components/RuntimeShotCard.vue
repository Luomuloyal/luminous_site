<script setup>
import { computed } from 'vue'

import { useSiteManifest } from '../composables/useSiteManifest'
import DeviceMockup from './DeviceMockup.vue'

const props = defineProps({
  shotId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  fallbackScene: {
    type: Object,
    default: null,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})

const { getScreenshotById } = useSiteManifest()

const screenshot = computed(() => getScreenshotById(props.shotId))
const hasRuntimeImage = computed(() =>
  Boolean(
    screenshot.value?.available && (screenshot.value?.imageUrl || screenshot.value?.thumbUrl),
  ),
)
const imageUrl = computed(
  () => screenshot.value?.imageUrl || screenshot.value?.thumbUrl || '',
)
const displayTitle = computed(() => screenshot.value?.title || props.title)
const displayCaption = computed(() => screenshot.value?.caption || props.caption)
const surfaceLabel = computed(() =>
  props.label || (hasRuntimeImage.value ? 'Runtime Media' : 'Design Fallback'),
)
const stateLabel = computed(() => (hasRuntimeImage.value ? 'Real Capture' : 'Mockup'))
const signalLabel = computed(() => (hasRuntimeImage.value ? 'MEDIA LIVE' : 'FALLBACK'))
</script>

<template>
  <article
    class="runtime-shot-card"
    :class="{
      'runtime-shot-card--compact': props.compact,
      'is-runtime': hasRuntimeImage,
      'is-fallback': !hasRuntimeImage,
    }"
    data-animate="zoom-in"
  >
    <div class="runtime-shot-card__media">
      <div class="runtime-shot-card__glow"></div>
      <div class="runtime-shot-card__badge">
        <span>{{ surfaceLabel }}</span>
        <small>{{ stateLabel }}</small>
      </div>

      <div class="runtime-shot-card__signal">
        <i></i>
        <span>{{ signalLabel }}</span>
      </div>

      <div v-if="hasRuntimeImage" class="runtime-shot-card__device">
        <div class="device-mockup__frame device-mockup__frame--shot">
          <div class="device-mockup__island"></div>
          <div class="device-mockup__screen device-mockup__screen--shot">
            <img :src="imageUrl" :alt="displayTitle || props.shotId" loading="lazy" />
          </div>
        </div>
      </div>

      <div v-else-if="props.fallbackScene" class="runtime-shot-card__fallback">
        <DeviceMockup :scene="props.fallbackScene" />
      </div>

      <div v-else class="runtime-shot-card__placeholder">
        <strong>Capture Pending</strong>
        <p>模拟器截图还没入库，这里会在媒体服务同步后自动替换成真实界面。</p>
      </div>

      <div v-if="props.compact" class="runtime-shot-card__compact-copy">
        <strong>{{ displayTitle }}</strong>
        <small>{{ stateLabel }}</small>
      </div>
    </div>

    <div v-if="!props.compact" class="runtime-shot-card__copy">
      <span>{{ surfaceLabel }}</span>
      <h3>{{ displayTitle }}</h3>
      <p>{{ displayCaption }}</p>
    </div>
  </article>
</template>
