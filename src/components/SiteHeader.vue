<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const active = ref('presentation')
const open = ref(false)
let observer

onMounted(() => {
  const sections = document.querySelectorAll('main section[id]')
  observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && (active.value = entry.target.id)),
    { rootMargin: '-35% 0px -55%' },
  )
  sections.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Revenir en haut de la page">FB<span>.</span></a>
    <button class="menu-button" type="button" :aria-expanded="open" aria-controls="main-menu" @click="open = !open">
      <span></span><span></span><span></span><span class="sr-only">Menu</span>
    </button>
    <nav id="main-menu" :class="{ open }" aria-label="Navigation principale">
      <a href="#presentation" :class="{ active: active === 'presentation' }" @click="open = false">Présentation</a>
      <a href="#creations" :class="{ active: active === 'creations' }" @click="open = false">Créations</a>
      <a href="#contact" :class="{ active: active === 'contact' }" @click="open = false">Contact</a>
    </nav>
  </header>
</template>
