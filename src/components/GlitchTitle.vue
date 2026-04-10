<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: 'h2',
  },
  size: {
    type: String,
    default: 'lg',
  },
})

const titleClass = computed(() => `glitch-title glitch-title--${props.size}`)
</script>

<template>
  <component :is="props.tag" :class="titleClass">
    <span class="glitch-title__main">{{ props.text }}</span>
    <span class="glitch-title__ghost glitch-title__ghost--a" aria-hidden="true">{{ props.text }}</span>
    <span class="glitch-title__ghost glitch-title__ghost--b" aria-hidden="true">{{ props.text }}</span>
  </component>
</template>
