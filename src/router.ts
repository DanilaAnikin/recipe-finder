import { createRouter, createWebHistory } from 'vue-router';
import RecipeList from './components/RecipeList.vue';
import RecipeDetail from './pages/[id].vue';

const routes = [
  { path: '/', component: RecipeList },
  { path: '/:id', component: RecipeDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
