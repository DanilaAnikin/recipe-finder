<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-8xl mx-auto">
      <SearchBar v-model="query" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import RecipeCard from './RecipeCard.vue';
import SearchBar from './SearchBar.vue';
import recipesData from '../recipes.json';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
};

const recipes = ref<Recipe[]>(recipesData);
const query = ref('');

const filteredRecipes = computed(() => {
  if (!query.value) return recipes.value;
  return recipes.value.filter(recipe => recipe.title.toLowerCase().includes(query.value.toLowerCase()));
});
</script>
