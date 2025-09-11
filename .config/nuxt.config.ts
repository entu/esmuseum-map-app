// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  ssr: false,
  devtools: { enabled: false },
  spaLoadingTemplate: false,
  runtimeConfig: {
    entuKey: '',
    public: {
      entuDb: '',
      entuUrl: ''
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-09-04',
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'et', name: 'Eesti' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: '~~/.config/i18n.config.ts'
  },
  icon: {
    customCollections: [{
      prefix: 'local',
      dir: './app/assets/icons'
    }]
  },
  tailwindcss: {
    cssPath: './app/assets/tailwind.css',
    configPath: '~~/.config/tailwind.config.ts'
  }
})
