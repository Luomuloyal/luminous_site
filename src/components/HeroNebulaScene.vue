<script setup>
import { shallowRef } from 'vue'

const coreRef = shallowRef()
const ringRef = shallowRef()

const fieldOrbs = [
  { position: [-3.4, 1.8, -1.5], scale: 0.22, color: '#d4b8e0' },
  { position: [-2.8, -1.4, -2.1], scale: 0.14, color: '#f5d5c8' },
  { position: [1.9, -2.2, -1.4], scale: 0.2, color: '#f8d7da' },
  { position: [3.2, 1.2, -2.3], scale: 0.16, color: '#ffe5b4' },
]
</script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 8]" :fov="42" />
  <TresColor attach="background" color="#fcfaf6" />
  <TresFog :args="['#fcfaf6', 12, 28]" />
  <TresAmbientLight color="#b8a8c0" :intensity="1.2" />
  <TresPointLight :position="[3.5, 2, 5]" color="#d4b8e0" :intensity="40" />
  <TresPointLight :position="[-4, -1.4, 5.5]" color="#f5d5c8" :intensity="50" />

  <TresGroup>
    <TresMesh
      v-for="orb in fieldOrbs"
      :key="orb.position.join('-')"
      :position="orb.position"
      :scale="orb.scale"
    >
      <TresSphereGeometry :args="[1, 12, 12]" />
      <TresMeshBasicMaterial :color="orb.color" />
    </TresMesh>
  </TresGroup>

  <TresMesh ref="coreRef">
    <TresIcosahedronGeometry :args="[1.85, 12]" />
    <TresMeshPhysicalMaterial
      color="#d4b8e0"
      emissive="#c4a1d9"
      :emissive-intensity="0.5"
      :roughness="0.35"
      :metalness="0.3"
      :transmission="0.15"
      :opacity="0.8"
      :transparent="true"
    />
  </TresMesh>

  <TresMesh ref="ringRef" :rotation="[0.65, 0.24, 0.18]">
    <TresTorusGeometry :args="[3, 0.05, 16, 150]" />
    <TresMeshBasicMaterial color="#f5d5c8" />
  </TresMesh>
</template>
