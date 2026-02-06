<script setup lang="ts">
const route = useRoute()

// Query the 'content' collection defined in your content.config.ts
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

// If no page is found, you can manually trigger a 404 or show a fallback
if (!page.value && import.meta.server) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
  <article v-if="page" class="ecl-u-type-prose">
    <ContentRenderer :value="page" />
  </article>
</template>