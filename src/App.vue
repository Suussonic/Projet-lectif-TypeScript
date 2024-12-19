<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchArticles, Article } from './components/GetApi';

const articles = ref<Article[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

// Fonction pour charger les articles
onMounted(async () => {
  try {
    const response = await fetchArticles();
    articles.value = response.articles;
  } catch (err) {
    error.value = 'Impossible de charger les articles.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <header>
    <div class="wrapper">
      <p class="title">Chercher un article</p>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher un article..." />
        <button>Rechercher</button>
      </div>
    </div>
  </header>

  <main>
    <h1>Liste des articles</h1>
    <div v-if="isLoading" class="loading">Chargement...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ul v-else class="articles-list">
      <li v-for="article in articles" :key="article.id" class="article-item">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p><strong>Créé le :</strong> {{ new Date(article.createdAt).toLocaleDateString() }}</p>
        <p><strong>Auteur :</strong> {{ article.author.image ? article.author.image : 'Anonyme' }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
/* Header styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2c2c2c;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
}

.search-bar button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.search-bar button:hover {
  background-color: #45a049;
}

/* Main content */
main {
  margin-top: 100px;
  padding: 1rem;
}

.articles-list {
  list-style: none;
  padding: 0;
}

.article-item {
  background: #1e1e1e;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.article-item h2 {
  margin: 0 0 0.5rem;
}

.loading {
  color: #fff;
  font-size: 1.2rem;
}

.error {
  color: red;
  font-size: 1.2rem;
}
</style>
