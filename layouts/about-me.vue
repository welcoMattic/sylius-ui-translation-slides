<!-- Based on https://github.com/slidevjs/slidev/blob/v51.5.0/packages/client/layouts/image-right.vue -->
<script setup lang="ts">
  import { computed } from 'vue'
  import { handleBackground } from '@slidev/client/layoutHelper.ts'

  const props = defineProps<{
    imageSrc?: string
    helloMsg?: string
    name?: string
    job?: string
    line1?: string
    line2?: string
    email?: string
    social1?: string
    social2?: string
    social3?: string
    position?: string
  }>()

  const style = computed(() => handleBackground(props.imageSrc, false))
  const flexRow = computed(() => props.position === 'left' ? 'flex-row-reverse' : 'flex-row')
  const textItems = computed(() => props.position === 'left' ? 'items-start' : 'items-end')
  const textAlign = computed(() => props.position === 'left' ? 'text-left' : 'text-right')
</script>

<template>
  <div class="slidev-layout about-me p-0">
    <div class="flex h-full" :class="flexRow">
      <div class="w-1/2 h-full flex flex-col justify-end" :style="style">
      </div>
      <div class="w-1/2 flex flex-col justify-between px-8 py-16" :class="textItems">
        <h1 v-if="helloMsg" class="flex">{{ helloMsg }}</h1>

        <div class="flex flex-col flex flex-col justify-end py-16" :class="[textItems, textAlign]">
          <h3 class="font-extrabold">{{ name }}</h3>

          <div class="text-2xl space-y-2 mt-4">
            <div class="job font-bold" v-html="job"></div>
            <div class="line-1" v-html="line1"></div>
            <div class="line-2" v-html="line2"></div>
          </div>

          <div class="text-2xl space-y-2 mt-4">
            <div class="social social-1" v-html="social1"></div>
            <div class="social social-2" v-html="social2"></div>
            <div class="social social-3" v-html="social3"></div>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

