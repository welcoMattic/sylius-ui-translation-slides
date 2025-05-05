<script setup lang="ts">
  const props = withDefaults(defineProps<{
    type?: 'info' | 'warning' | 'error',
    class: string,
  }>(), {
    type: 'info',
  });
</script>

<template>
  <div
    class="alert"
    :class="`${props.class} alert--${type}`"
  >
    <span class="alert__icon">
      <svg
        v-if="type === 'info'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="3rem"
        height="3rem"
      >
        <path
          fill="currentColor"
          d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
        />
      </svg>

      <svg
        v-else-if="type === 'warning'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="3rem"
        height="3rem"
      >
        <path
          fill="currentColor"
          d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"
        />
      </svg>

      <svg
        v-else-if="type === 'error'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2rem"
        height="2rem"
      >
        <path
          fill="currentColor"
          d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"
        />
      </svg>
    </span>
    <div class="alert__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .alert {
    position: relative;
    display: flex;
    padding: 15px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .alert::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.15;
    pointer-events: none;
  }

  .alert--info {
    color: var(--color-info);
  }

  .alert--info::before {
    background-color: var(--color-info);
  }

  .alert--warning {
    color: var(--color-warning);
  }

  .alert--warning::before {
    background-color: var(--color-warning);
    opacity: 10%;
  }

  .alert--error {
    color: var(--color-error);
  }

  .alert--error::before {
    background-color: var(--color-error);
  }

  .alert__icon {
    display: flex;
    align-items: center;
    padding: 0 25px 0 10px;
  }
</style>

<style>
  .alert .alert__content > p {
    margin: 0;
  }
</style>
