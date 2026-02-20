export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxtjs/seo',
  ],
  css: ['~/styles/main.css'],
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteName: 'Slukan Interijeri',
      siteDescription: 'Završni radovi u gradnji i uređenje interijera po sistemu ključ u ruke. Knauf, soboslikarski radovi, adaptacije, dekorativni elementi, izolacije, sanacije.',
      titleSeparator: '|',
      siteUrl: 'https://www.slukani-interijeri.hr',
      language: 'hr',
      siteImage: '/slukani-interijeri.jpg',
    },
  },
  googleFonts: {
    families: {
      'Barlow': true,
      'Open+Sans': true,
      'Poppins': true,
    },
    display: 'swap',
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  compatibilityDate: '2026-02-20'
})
