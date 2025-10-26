<template>
  <div id="default-layout">
    <CommonDefaultLayoutHeader />
    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>
    <CommonDefaultLayoutFooter />
  </div>
</template>

<script setup lang="ts"></script>
