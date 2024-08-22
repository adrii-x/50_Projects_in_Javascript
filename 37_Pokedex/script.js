const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}



const createCard = (pokemon) =>{
    const element = document.createElement('div')
    element.classList.add('pokemon')
    // console.log(pokemon)
    const poke_types = pokemon.types[0].type.name
    // console.log(typeof(poke_types))

    color = colors[poke_types]

    element.style.background = color
    
    
    
    // if (!color=== undefined) {
        
    //     console.log('----------'+color)
    //   }


    
    
    const id = pokemon.id.toString().padStart(3,'0')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const PokemonInnerHtml=`
    
    
    <div class="img-container">
    <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${poke_types}</span></small>
    </div>
  `
  element.innerHTML = PokemonInnerHtml
  poke_container.appendChild(element)

  
  

}


const getPokemon = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url)
    const data = await res.json()
    createCard(data)
}

const fetchPokemons  = async ()=>{
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
        
    }
}


fetchPokemons()