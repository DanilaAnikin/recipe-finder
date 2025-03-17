<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <div class="max-w-2xl mx-auto bg-white shadow rounded p-4">
        <div class="flex justify-between">
            <h1 class="text-2xl font-bold mb-2">{{ recipe.title }}</h1>
            <button @click="router.push('/')" class="bg-red-700 text-white py-2 px-3 rounded">Back</button>
        </div>
        <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
        <h2 class="text-xl font-semibold mb-2">Ingredients</h2>
        <div class="grid grid-cols-2">
            <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="flex items-center mb-2">
                <input type="checkbox" :id="`ingredient-${index}`" class="mr-2 h-6 w-6" v-model="selected[index]" @change="updateSelected(ingredient, index)" />
                <label :for="`ingredient-${index}`">
                    {{ ingredient }}
                </label>
            </div>
        </div>
        <div v-if="addedIngredients.length" class="mt-4">
          <h3 class="text-lg font-semibold">Added Ingredients:</h3>
          <ul class="list-disc list-inside grid grid-cols-2">
            <li v-for="(ing, idx) in addedIngredients" :key="idx">{{ ing }}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import recipesData from '../recipes.json';
  
interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
};

const router = useRouter();
const route = useRoute();

const recipeId = Number(route.params.id);
const recipe = computed(() => recipesData.find((r: Recipe) => r.id === recipeId) as Recipe);

const selected = ref<boolean[]>(recipe.value.ingredients.map(() => false));

const addedIngredients = ref<string[]>([]);
  
const updateSelected = (ingredient: string, index: number) => {
    if (selected.value[index]) {
      if (!addedIngredients.value.includes(ingredient)) {
        addedIngredients.value.push(ingredient);
      }
    } else {
      addedIngredients.value = addedIngredients.value.filter(i => i !== ingredient);
    }
};
</script>
  