<script setup lang="ts">
const route = useRoute();
const title = 'Laser model ' + route.params.slug + ' page!';
const description = 'Laser model ' + route.params.slug + ' page!';

definePageMeta({
  layout: 'default',
});
useHead({
  title: title,
  meta: [{ name: 'description', content: description }],
});
useSeoMeta({ title, description });
</script>

<template>
  <div>
    <h1 class="mb-4 text-4xl font-bold">
      Laser model '{{ route.params.slug }}'!
    </h1>
    <h2>Category: {{ route.params.category }}</h2>
    <h2>ID: {{ route.params.id }}</h2>
  </div>
</template>
