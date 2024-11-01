import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue';
import PokemonList from '../views/PokemonList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonList
    } 
  ]
})

export default router
