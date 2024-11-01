import apiPokemon from '../api/apiPokemon'
console.log('respuestas get')
const fetchPokemons = async ()=>{
    const respuesta = await apiPokemon.get('/pokemon')
    console.log('respuesta::: ', respuesta)
    return respuesta.data;
}
export default fetchPokemons