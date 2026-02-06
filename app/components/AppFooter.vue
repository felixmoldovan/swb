<template>
  <footer class="ecl-site-footer ecl-u-mt-3xl">
    <div class="ecl-site-footer__main">
      <div class="ecl-container ecl-site-footer__container">
        <div class="ecl-site-footer__row ecl-site-footer__row--specific">
          
          <div class="ecl-site-footer__section ecl-site-footer__section--site-info">
            <NuxtLink to="/" class="ecl-link ecl-link--standalone ecl-link--inverted ecl-site-footer__logo-link">
              <img 
                class="ecl-site-footer__logo-image" 
                src="/ecl/images/logo/negative/logo-ec--en.svg" 
                alt="European Commission logo"
              >
            </NuxtLink>
            <div class="ecl-site-footer__description">
              This site is managed by:<br />
              Directorate-General for Informatics
            </div>
          </div>

          <div class="ecl-site-footer__section ecl-site-footer__section--core">
            <ul class="ecl-site-footer__list">
              <li class="ecl-site-footer__list-item">
                <a href="#" class="ecl-link ecl-link--standalone ecl-link--inverted ecl-site-footer__link">About us</a>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>