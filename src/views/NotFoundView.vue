<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div id="top">
    <SiteHeader />
    <main class="not-found">
      <div class="lost-orbit" aria-hidden="true"><span>?</span></div>
      <p class="eyebrow">Page introuvable</p>
      <h1>404</h1>
      <p>Cette page semble avoir quitté son itinéraire.</p>
      <RouterLink class="primary-button" to="/">Retour à l’accueil</RouterLink>
    </main>
    <SiteFooter />
  </div>
</template>
