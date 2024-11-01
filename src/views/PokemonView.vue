<template>
  <h1>Pokemon</h1>
  <ul>
   <!-- <li v-for="pokemon in pokemons" :key="pokemon.name">
    {{ pokemon.name }}
   </li>  -->
   <DataTable v-if="pokemon!=[]" :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%">
      <template #body="slotProps">
            <Button icon="pi pi-search" @click="selectToPokemon(pokemon)" severity="secondary" rounded></Button>
      </template>
    </Column>
    </DataTable>
  </ul>
  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">{{pokemonName}}</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
</Dialog>
</template>

<script setup>
import { ref } from 'vue';
import fetchPokemons from '../services/getPokemons'
import { onMounted } from 'vue';


const pokemons = ref([])
const visible = ref(false);
const pokemonName = ref('')
const selectToPokemon= (pokemon) =>{
  if(!pokemon || !pokemon.name) {
    console.error('no existe')
  }
  pokemonName.value = pokemon.name
  visible.value = true
}
const loadPokemons = async() =>{
  try {
    const response = await fetchPokemons()
    pokemons.value = response.results
    console.log('pokemons.value ::: ', pokemons.value );
  } catch (error) {
    console.error('Error en el fetch del pokemon', error)
  }
}
onMounted(loadPokemons);

</script>

