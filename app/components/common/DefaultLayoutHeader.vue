<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const route = useRoute();
const { t } = useI18n();

const mainNavItems = [
  {
    label: t('pages.3dModels.link'),
    to: '/3d-models',
    active: route.path.startsWith('3d-models'),
  },
  {
    label: t('pages.laserModels.link'),
    to: '/laser-models',
    active: route.path.startsWith('/laser-models'),
  },
  {
    label: t('pages.articles.link'),
    to: '/articles',
    active: route.path.startsWith('/articles'),
  },
];

const userMenuItems = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'ben@example.com',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Profile',
      icon: 'i-heroicons-user-circle',
      to: '/profile',
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
      to: '/settings',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      to: '/logout',
    },
  ],
]);
</script>

<template>
  <header
    class="bg-default/75 border-default sticky top-0 z-50 h-(--ui-header-height) border-b backdrop-blur"
  >
    <UContainer class="flex h-full items-center justify-between">
      <div class="flex items-center space-x-1">
        <UDropdownMenu :items="mainNavItems" class="lg:hidden">
          <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
        </UDropdownMenu>

        <a class="flex space-x-0.5" href="/">
          <BaseLogo class="h-8 w-8" />
          <span class="text-2xl font-black">MakerStation</span>
        </a>

        <UNavigationMenu :items="mainNavItems" class="hidden lg:block" />
      </div>
      <div>
        <UButton
          color="primary"
          variant="outline"
          aria-label="Login"
          href="/login"
          >Login</UButton
        >
        <UDropdownMenu :items="userMenuItems" :ui="{ content: 'w-48' }">
          <UAvatar src="https://github.com/benjamincanac.png" class="hidden" />
        </UDropdownMenu>
      </div>
    </UContainer>
  </header>
</template>
