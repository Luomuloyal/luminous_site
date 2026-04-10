<script setup>
import { computed } from 'vue'

const props = defineProps({
  group: {
    type: Object,
    required: true,
  },
})

const fillerIndex = computed(() => {
  const cards = props.group?.cards ?? []
  const hasWide = cards.some(card => card?.span === 'wide')
  if (!hasWide || cards.length !== 3) {
    return -1
  }
  return cards.length - 1
})
</script>

<template>
  <section class="feature-orbit" data-animate="fade-up">
    <header class="feature-orbit__header">
      <span class="feature-orbit__label">{{ props.group.orbit }}</span>
      <div>
        <h3>{{ props.group.title }}</h3>
        <p>{{ props.group.lead }}</p>
      </div>
    </header>

    <div class="feature-orbit__grid">
      <article
        v-for="(card, index) in props.group.cards"
        :key="card.title"
        class="feature-card"
        :class="[
          card.span ? `feature-card--${card.span}` : '',
          index === fillerIndex ? 'feature-card--full' : '',
        ]"
        data-animate="zoom-in"
      >
        <div class="feature-card__signal">
          <span>{{ `0${index + 1}`.slice(-2) }}</span>
          <small>{{ card.label }}</small>
        </div>
        <h4>{{ card.title }}</h4>
        <p>{{ card.body }}</p>
        <p v-if="card.detail" class="feature-card__detail">{{ card.detail }}</p>
        <ul>
          <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
        <div v-if="card.facts?.length" class="feature-card__facts">
          <span v-for="fact in card.facts" :key="fact">{{ fact }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
