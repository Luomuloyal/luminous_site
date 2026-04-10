<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  value: String,
  unit: String,
  trend: String,
  icon: String
})

const isExpanded = ref(false)
</script>

<template>
  <article class="health-metric-card" :class="{ 'is-expanded': isExpanded }">
    <div class="health-metric-card__header">
      <div class="health-metric-card__icon">
        <span v-if="icon">{{ icon }}</span>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <span class="health-metric-card__title">{{ title }}</span>
    </div>
    
    <div class="health-metric-card__value">
      {{ value }}
      <small v-if="unit">{{ unit }}</small>
    </div>
    
    <div class="health-metric-card__trend" :class="'trend-' + trend">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" v-if="trend === 'up'">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" v-if="trend === 'down'">
        <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" v-if="trend === 'stable'">
        <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span>{{ trend === 'up' ? 'Increase' : trend === 'down' ? 'Decrease' : 'Stable' }}</span>
    </div>
  </article>
</template>

<style scoped>
.health-metric-card {
  background: var(--surface-glass);
  border: var(--surface-border);
  border-radius: 1.5rem;
  padding: 1.25rem;
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.health-metric-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.health-metric-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.health-metric-card__icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  background: var(--route-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--copy-strong);
  font-size: 1.1rem;
}

.health-metric-card__title {
  color: var(--copy-muted);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.health-metric-card__value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: var(--copy-strong);
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.health-metric-card__value small {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--copy-muted);
  margin-left: 0.25rem;
}

.health-metric-card__trend {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--copy-muted);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(100, 116, 139, 0.08);
}

.health-metric-card__trend svg {
  opacity: 0.8;
}

.health-metric-card__trend.trend-up {
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.health-metric-card__trend.trend-down {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.health-metric-card__trend.trend-stable {
  color: #64748b;
  background: rgba(100, 116, 139, 0.1);
}
</style>