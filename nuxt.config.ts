export default defineNuxtConfig({
  // App
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Build
  builder: 'vite',
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'starter-ts',
        preview_urls: false,
        workers_dev: false,
      },
    },
  },

  // Nuxt modules
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/partytown',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@arkenv/nuxt/module',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt/module',
    '@nuxtjs/seo',
  ],
  fonts: {
    provider: 'local',
    defaults: {
      weights: [400],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  image: {
    format: ['avif', 'webp'],
    dir: 'assets/images',
  },
  scripts: {
    registry: {
      cloudflareWebAnalytics: {
        token: '',
        trigger: 'onNuxtReady',
        partytown: true,
      },
    },
  },
  // SEO
  site: {
    name: 'Starter Nuxt',
  },
  robots: {
    blockNonSeoBots: true,
  },
})
