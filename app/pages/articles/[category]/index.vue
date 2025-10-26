<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
definePageMeta({
  layout: 'default',
});
useHead({
  title: t('pages.3dModels.meta.title'),
  meta: [
    { name: 'description', content: t('pages.3dModels.meta.description') },
  ],
});
useSeoMeta({
  title: t('pages.3dModels.meta.title'),
  description: t('pages.3dModels.meta.description'),
});
</script>

<template>
  <h1 class="mb-4 text-4xl font-bold">
    Article Category '{{ route.params.category }}'!
  </h1>
</template>
