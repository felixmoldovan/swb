// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // This defines your primary CMS/Documentation collection
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    
    // Example: If you wanted a separate collection for "Legal" or "News"
    // news: defineCollection({
    //   type: 'page',
    //   source: 'news/**/*.md',
    //   schema: z.object({
    //     date: z.string(),
    //     author: z.string()
    //   })
    // })
  }
})