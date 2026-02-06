<template>
  <div class="ecl ecl-color-mode--blue ecl-u-d-flex ecl-u-flex-column ecl-u-flex-grow-1">
    <AppHeader />
    
    <main class="ecl-u-pb-xl ecl-u-flex-grow-1">
      <div class="ecl-container ecl-u-mt-l">
        <NuxtPage />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Structural CSS for sticky footer - ECL utilities don't provide min-height/vh units */
html { height: 100%; }
body { min-height: 100%; display: flex; flex-direction: column; }
#__nuxt { display: flex; flex-direction: column; flex: 1; }
</style>