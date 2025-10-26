<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  layout: 'default',
});
useHead({
  title: t('pages.index.meta.title'),
  meta: [{ name: 'description', content: t('pages.index.meta.description') }],
});
useSeoMeta({
  title: t('pages.index.meta.title'),
  description: t('pages.index.meta.description'),
});
</script>

<template>
  <h1 class="mb-4 text-4xl font-bold">Index page!</h1>
</template>
