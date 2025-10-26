<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <UError
    :error="{
      statusCode: error?.statusCode,
      statusMessage:
        error?.statusCode == 404 ? $t('error.404.title') : error?.message,
      message: error?.statusCode == 404 ? $t('error.404.message') : undefined,
    }"
  />
</template>
