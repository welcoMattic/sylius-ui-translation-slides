<script setup lang="ts">
const props = defineProps<{
  class?: string,
}>()
</script>

<template>
  <div class="slidev-layout two-columns-demo">
    <slot />
    <div class="two-columns-demo__cols grid grid-cols-2 gap-4">
      <div
        class="two-columns-demo__col-left col-left"
        :class="props.class"
      >
        <slot name="left" />
      </div>
      <div
        class="two-columns-demo__col-right col-right"
        :class="props.class"
      >
        <slot name="right" />
      </div>
    </div>
    <slot name="bottom" />
  </div>
</template>
