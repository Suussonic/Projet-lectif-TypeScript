<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

// État pour la recherche
const searchQuery = ref('');
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Logo ou titre -->
      <p class="title">Chercher un article</p>
      
      <!-- Barre de recherche -->
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un article..."
        />
        <button @click="performSearch">Rechercher</button>
      </div>
    </div>
  </header>

  <!-- Contenu principal -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Réinitialisation globale */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #1c1c1c;
  color: #fff;
}

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
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-bar input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
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

main {
  margin-top: 100px; /* Espace pour le header fixe */
  padding: 1rem;
}

@media (min-width: 1024px) {
  header {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .search-bar input {
    font-size: 1rem;
  }

  .search-bar button {
    font-size: 1rem;
  }
}
</style>

<script lang="ts">
// Fonction de recherche (à personnaliser en fonction des besoins)
function performSearch() {
  console.log(`Recherche pour : ${searchQuery.value}`);
}
</script>
