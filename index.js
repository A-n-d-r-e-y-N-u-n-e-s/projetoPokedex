const listaSelecaoPokemon = document .querySelectorAll('.pokemon')
const PokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener(
        'click', () => {
            const fecharcartaoPokemon = document.querySelector('.aberto')
            fecharcartaoPokemon.classList.remove('aberto')

            const idPokemonSelecionado = pokemon.attributes.id.value
            
            const abricartaoPokemon = document.getElementById('cartao-' + idPokemonSelecionado)
            abricartaoPokemon.classList.add('aberto')
            
            const pokemonativonalista = document.querySelector('.ativo')
            pokemonativonalista.classList.remove('ativo')

            const pokemonativonalistagem = document.getElementById(idPokemonSelecionado)
            pokemonativonalistagem.classList.add('ativo')
        }
    )
} )