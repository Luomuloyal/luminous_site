<script setup>
import GlitchTitle from './GlitchTitle.vue'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  lead: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <section :id="props.id" class="glass-section" :class="`glass-section--${props.align}`">
    <div class="glass-section__inner">
      <header
        v-if="props.eyebrow || props.title || props.lead || $slots.header"
        class="glass-section__header"
      >
        <slot name="header">
          <span v-if="props.eyebrow" class="glass-section__eyebrow">{{ props.eyebrow }}</span>
          <GlitchTitle v-if="props.title" :text="props.title" tag="h2" size="md" />
          <p v-if="props.lead" class="glass-section__lead">{{ props.lead }}</p>
        </slot>
      </header>
      <div class="glass-section__body">
        <slot />
      </div>
    </div>
  </section>
</template>
