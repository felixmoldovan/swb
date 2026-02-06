export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2026-02-05',

  modules: [
    '@nuxt/content',
    '@nuxthq/studio'
  ],

  css: [], 

  app: {
    head: {
      // Load the ECL CSS files from the public folder
      link: [
        { rel: 'stylesheet', href: '/ecl/styles/optional/ecl-reset.css' },
        { rel: 'stylesheet', href: '/ecl/styles/ecl-ec.css' },
        { rel: 'stylesheet', href: '/ecl/styles/optional/ecl-ec-default.css' },
        { rel: 'stylesheet', href: '/ecl/styles/optional/ecl-ec-utilities.css' }
      ]
    }
  },

  build: {
    transpile: ['@ecl/preset-ec']
  },

  content: {
    highlight: {
      theme: 'github-light'
    }
  }
})