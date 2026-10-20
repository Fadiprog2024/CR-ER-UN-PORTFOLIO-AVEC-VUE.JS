<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({ project: { type: Object, required: true } })
const emit = defineEmits(['close'])
const handleKey = (event) => event.key === 'Escape' && emit('close')
onMounted(() => {
  document.body.classList.add('modal-open')
  document.addEventListener('keydown', handleKey)
})
onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
  document.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <article class="modal" role="dialog" aria-modal="true" :aria-labelledby="`project-${project.id}`">
      <button class="modal-close" type="button" aria-label="Fermer la fenêtre" @click="$emit('close')">×</button>
      <div class="modal-visual" :style="{ background: project.accent }"><span>{{ project.symbol }}</span></div>
      <div class="modal-content">
        <p class="eyebrow">{{ project.date }}</p>
        <h2 :id="`project-${project.id}`">{{ project.title }}</h2>
        <p>{{ project.details }}</p>
        <h3>Technologies utilisées</h3>
        <ul class="tags"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
        <div class="modal-links">
          <a v-if="project.siteUrl" :href="project.siteUrl" target="_blank" rel="noopener noreferrer">Voir le projet ↗</a>
          <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">Repository GitHub ↗</a>
        </div>
      </div>
    </article>
  </div>
</template>
