<template>
  <header class="ecl-site-header ecl-site-header-with-logo-l ecl-site-header--has-menu" data-ecl-site-header data-ecl-auto-init="SiteHeader">
    <div class="ecl-site-header__container ecl-container">
      <div class="ecl-site-header__top">
        <NuxtLink to="/" class="ecl-site-header__logo-link">
          <picture class="ecl-picture ecl-site-header__picture">
            <source 
              srcset="/ecl/images/logo/positive/logo-ec--en.svg"
              media="(min-width: 996px)"
            >
            <img 
              src="/ecl/images/logo/positive/logo-ec--en.svg"
              alt="European Commission" 
              class="ecl-site-header__logo-image ecl-site-header__logo-image--l"
            >
          </picture>
        </NuxtLink>
        <div class="ecl-site-header__action">
          <div class="ecl-site-header__search-container" role="search">
            <form class="ecl-search-form ecl-site-header__search" role="search">
              <div class="ecl-form-group">
                <label for="search-input" class="ecl-form-label ecl-search-form__label">Search</label>
                <input 
                  type="search" 
                  id="search-input"
                  name="keys"
                  class="ecl-text-input ecl-text-input--m ecl-search-form__text-input"
                >
              </div>
              <button type="submit" class="ecl-button ecl-button--tertiary ecl-search-form__button ecl-button--icon-only">
                <span class="ecl-button__container">
                  <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                    <path d="M44.1 39.9 32.7 28.5c-.6-.6-1.3-.4-1.3-.4a13.4 13.4 0 0 0 3.2-8.7c0-7.5-6.1-13.5-13.5-13.5S7.5 11.9 7.5 19.4a13.5 13.5 0 0 0 21.9 10.5s0 .8.5 1.2L41.3 42.5c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8zM21 29c-5.3 0-9.6-4.3-9.6-9.6S15.7 9.8 21 9.8s9.6 4.3 9.6 9.6S26.3 29 21 29z"/>
                  </svg>
                  <span class="ecl-button__label" data-ecl-label="true">Search</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <nav class="ecl-mega-menu" data-ecl-mega-menu data-ecl-auto-init="MegaMenu">
      <div class="ecl-container ecl-mega-menu__container">
        <button class="ecl-button ecl-button--tertiary ecl-mega-menu__open" type="button" data-ecl-mega-menu-open>
          <span class="ecl-button__label">Menu</span>
        </button>

        <section class="ecl-mega-menu__inner" data-ecl-mega-menu-inner>
          <ul class="ecl-mega-menu__list">
            <li class="ecl-mega-menu__item">
              <NuxtLink to="/" class="ecl-mega-menu__link">Home</NuxtLink>
            </li>
            <li class="ecl-mega-menu__item">
              <NuxtLink to="/shop" class="ecl-mega-menu__link">Shop</NuxtLink>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Adding the auto-init logic to ensure the menu works in the browser
onMounted(async () => {
  if (import.meta.client) {
    const { ECL } = await import('@ecl/preset-ec');
    ECL.autoInit();
  }
});
</script>