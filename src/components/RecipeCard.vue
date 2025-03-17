<template>
    <div class="bg-white shadow rounded p-4 flex flex-col justify-between">
      <div>
          <h2 class="text-xl font-semibold mb-2">{{ recipe.title }}</h2>
          <p class="text-gray-600">{{ recipe.description }}</p>
        </div>
      <div>
        <ul class="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="mt-4">
        <button @click="goToDetail" class="bg-green-500 text-white px-2 hover:bg-green-600 transition-all duration-500 py-1 rounded flex justify-between items-center">
            Details
            <ChevronRightIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
};
  
const props = defineProps<{
    recipe: Recipe;
}>();
  
const showIngredients = ref(false);
const router = useRouter();
  
const toggleIngredients = () => {
    showIngredients.value = !showIngredients.value;
};
  
const goToDetail = () => {
    router.push(`/${props.recipe.id}`);
};
</script>
  