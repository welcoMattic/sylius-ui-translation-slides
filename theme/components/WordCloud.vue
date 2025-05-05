<template>
  <div class="word-cloud">
    <span
      v-for="(item, index) in services"
      :key="index"
      :style="getStyle()"
      class="cloud-item"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  services: string[]
}>()

// Generate random style for each item
const getStyle = () : {[key: string]: string} => {
  const sizes : string[] = ['1.2rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem']
  const colors : string[] = ['#72d630', '#26bc94', '#ffc932', '#ee3c3c']

  return {
    fontSize: sizes[Math.floor(Math.random() * sizes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    margin: '0.5rem',
    display: 'inline-block',
  }
}
</script>

<style scoped>
.word-cloud {
  margin-top: -2rem;
  text-align: center;
  opacity: 0.3;
  position: absolute;
  z-index: -1;
  inset: 0;
}

.cloud-item {
  padding: 0.5rem;
  transition: transform 0.3s;
}

.cloud-item:hover {
  transform: scale(1.2);
}
</style>