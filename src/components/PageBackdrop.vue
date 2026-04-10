<script setup>
import { computed } from 'vue'
import { canShowFloatShapes, canShowBgFlow } from '../composables/useAnimationLevel'

const props = defineProps({
  theme: {
    type: Object,
    required: true,
  },
})

function orbStyle(orb) {
  return {
    '--orb-size': orb.size,
    '--orb-top': orb.top || 'auto',
    '--orb-right': orb.right || 'auto',
    '--orb-bottom': orb.bottom || 'auto',
    '--orb-left': orb.left || 'auto',
    '--orb-color': orb.color,
  }
}
</script>

<template>
  <div class="page-backdrop" aria-hidden="true">
    <div class="page-backdrop__mesh"></div>
    <div
      v-for="(orb, index) in props.theme.orbs"
      :key="`${index}-${orb.size}`"
      class="page-backdrop__orb"
      :style="orbStyle(orb)"
    ></div>
    <div class="page-backdrop__noise"></div>
    <div class="page-backdrop__scan"></div>
    
    <!-- 全屏漂浮彩色装饰，极致视觉效果 -->
    <div v-if="canShowFloatShapes" class="float-shape shape-1"></div>
    <div v-if="canShowFloatShapes" class="float-shape shape-2"></div>
    <div v-if="canShowFloatShapes" class="float-shape shape-3"></div>
  </div>
</template>
