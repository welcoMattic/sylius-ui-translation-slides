<template>
  <footer
    v-if="!['cover', 'section-title', 'module-cover', 'about-me'].includes($slidev.nav.currentLayout)"
    class="absolute flex bottom-0 left-0 right-0 py-2 px-4"
  >
    <div class="font-size-5 font-semibold">
<!--      {{ $slidev.nav.currentPage }}-->
    </div>
    <div class="ms-auto">
      <SyliusDays2025Logo height="2.5rem" />
    </div>
    <div class="ms-auto">
<!--      <Logo height="1.5rem" />-->
    </div>
  </footer>
  <Progress level="0" position="bottom" height="1" thickness="6px" opacity="0.7" class="z-1"/>
</template>
<script setup>
  import Logo from "./theme/components/Logo.vue";
  import SyliusDays2025Logo from "./components/SyliusDays2025Logo.vue";
</script>
