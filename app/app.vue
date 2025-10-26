<script setup>
const { locale, t } = useI18n();

if (import.meta.client) {
  const storedLanguage = localStorage.getItem('nuxt-lang');
  if (storedLanguage && storedLanguage !== 'en-US') {
    locale.value = storedLanguage;
  }
}

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t('locale.dir');
    }),
  },
  titleTemplate(title) {
    return title ? `${title} - ${t('site.name')}` : `${t('site.name')}`;
  },
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
