<template>
  <footer
    v-if="!['cover', 'section-title', 'module-cover', 'about-me'].includes($slidev.nav.currentLayout)"
    class="absolute flex bottom-0 left-0 right-0 py-2 px-4"
  >
    <div class="font-size-5 font-semibold">
      {{ $slidev.nav.currentPage }}
    </div>
    <div class="ms-auto">
      <Logo height="1.5rem" />
    </div>
  </footer>
</template>
<script setup>
  import Logo from "./components/Logo.vue";
</script>
