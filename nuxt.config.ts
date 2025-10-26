// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@pinia/nuxt'],
  imports: {
    dirs: ['app/stores'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    },
  },
  routeRules: {
    '/': {
      isr: {
        expiration: 600,
      },
    },
  },
  compatibilityDate: '2025-01-15',
  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    defaultLocale: 'en-US',
    langDir: './',
    strategy: 'prefix_except_default',
    locales: [{ code: 'en-US', iso: 'en-US', file: 'en-US.json' }],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'nuxt-lang',
      redirectOn: 'root',
    },
  },
});
