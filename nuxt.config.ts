export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2026-02-05',

  modules: ['@nuxt/content', 'nuxt-studio'],

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

  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'felixmoldovan', // your GitHub/GitLab username or organization
      repo: 'swb', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    }
  },

  build: {
    transpile: ['@ecl/preset-ec']
  },
})