<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { projects } from '../data/projects'

const selectedProject = ref(null)
const form = ref({ name: '', subject: '', message: '' })
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'fadela.bensaid@gmail.com'

function sendMessage() {
  const body = `Bonjour,\n\n${form.value.message}\n\n${form.value.name}`
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div id="top">
    <a class="skip-link" href="#content">Aller au contenu</a>
    <SiteHeader />
    <main id="content">
      <section id="presentation" class="hero" aria-labelledby="hero-title">
        <div>
          <p class="eyebrow">Business Analyst · Développeuse web junior</p>
          <h1 id="hero-title">Fadela<br><span>Bensaid</span></h1>
          <p class="hero-text">Je transforme un besoin en solution claire. Mon expérience de Business Analyst nourrit aujourd’hui ma pratique du développement front-end.</p>
          <a class="primary-button" href="#creations">Découvrir mes créations</a>
        </div>
        <div class="portrait" aria-hidden="true"><span>FB</span><small>Analyse × Web</small></div>
      </section>

      <section class="about" aria-labelledby="about-title">
        <p class="section-number">01</p>
        <div>
          <h2 id="about-title">À propos</h2>
          <p>Ingénieure de formation et Business Analyst dans le secteur bancaire, j’aime comprendre les usages, structurer les exigences et sécuriser la qualité d’un produit. Cette formation me permet de prolonger cette démarche jusqu’à la réalisation d’interfaces accessibles et responsive.</p>
        </div>
        <ul class="skills" aria-label="Compétences principales">
          <li>Vue.js 3</li><li>HTML5 & CSS3</li><li>JavaScript</li><li>Git & GitHub</li>
        </ul>
      </section>

      <section id="creations" class="projects" aria-labelledby="projects-title">
        <div class="section-heading"><div><p class="eyebrow">Une sélection de travaux</p><h2 id="projects-title">Mes créations</h2></div><p>{{ projects.length }} projets</p></div>
        <div class="project-grid">
          <button v-for="project in projects" :key="project.id" class="project-card" type="button" @click="selectedProject = project">
            <span class="project-visual" :style="{ background: project.accent }"><strong>{{ project.symbol }}</strong></span>
            <span class="project-copy"><small>{{ project.date }}</small><strong>{{ project.title }}</strong><span>{{ project.short }}</span><em>Voir les détails +</em></span>
          </button>
        </div>
      </section>

      <section id="contact" class="contact" aria-labelledby="contact-title">
        <div><p class="eyebrow">Parlons de votre projet</p><h2 id="contact-title">Me contacter</h2><p>Une question ou une opportunité ? Laissez-moi un message. Votre application de messagerie préparera l’e-mail.</p></div>
        <form @submit.prevent="sendMessage">
          <label for="name">Nom et prénom</label><input id="name" v-model.trim="form.name" name="name" autocomplete="name" required>
          <label for="subject">Objet</label><input id="subject" v-model.trim="form.subject" name="subject" required>
          <label for="message">Message</label><textarea id="message" v-model.trim="form.message" name="message" rows="5" required></textarea>
          <button class="primary-button" type="submit">Préparer l’e-mail</button>
        </form>
      </section>
    </main>
    <SiteFooter />
    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>
