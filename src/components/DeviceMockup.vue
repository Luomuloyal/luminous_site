<script setup>
const props = defineProps({
  scene: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="device-mockup" data-animate="zoom-in">
    <div class="device-mockup__frame">
      <div class="device-mockup__island"></div>
      <div class="device-mockup__screen">
        <div class="device-mockup__topline">
          <span>{{ props.scene.screen.tag }}</span>
          <small>LIVE</small>
        </div>

        <div class="device-mockup__hero">
          <strong>{{ props.scene.label }}</strong>
          <h4>{{ props.scene.screen.headline }}</h4>
          <p>{{ props.scene.screen.body }}</p>
        </div>

        <div class="device-mockup__panels">
          <div
            v-for="panel in props.scene.screen.panels"
            :key="panel.title"
            class="device-mockup__panel"
          >
            <span>{{ panel.title }}</span>
            <strong>{{ panel.value }}</strong>
          </div>
        </div>

        <div class="device-mockup__dock" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
