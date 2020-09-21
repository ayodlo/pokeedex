//Dependencies
import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import './PokemonList.css'

//Components
import DetailsPage from './DetailsPage/DetailsPage';

class PokemonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            showPokemonDetails: false,
            currentPokemon: null
        }
    }

    // make componentDidMount an async method
    async componentDidMount() {
        // fetch our json data via axios
        const response = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        // set state property 'pokemon' equal to the pokemon data we fetched
        this.setState(state => {
            return { pokemon: [...response.data.pokemon] }
        })
    }

    render() {
        // variables
        let pokemonMapped = [];
        const pokemonFiltered = this.state.pokemon
            //filter pokemon based on search input value
            .filter((pokemon) => {
                return pokemon.name
                    .toLowerCase()
                    .includes(this.props.searchInputValue.toLowerCase())
            })
            //filter pokemon based on type dropdown  
            .filter((pokemon) => {
                if (this.props.types == "") {
                    return true
                }
                //using lodash to check if the selected types are included within the pokemon's types
                return _.difference(this.props.types, pokemon.type).length === 0
            })
            //filter pokemon based on weakness dropdown  
            .filter((pokemon) => {
                if (this.props.weaknesses == "") {
                    return true
                }
                //using lodash to check if the selected types are included within the pokemon's types
                return _.difference(this.props.weaknesses, pokemon.weaknesses).length === 0
            })

        // map pokemon to JSX objects
        pokemonMapped = pokemonFiltered
        .map((pokemon) => {
                return (
                    <div className={'pokemon-index-card ' + pokemon.type[0].toLowerCase()} key={pokemon.id} onClick={() => renderPokemonDetails(pokemon)}>
                        <img alt={pokemon.name + ' image'} className='pokemon-index-card_img' src={pokemon.img} />
                        <span className='pokemon-index-card_name'>{pokemon.name} </span>
                        <span className='pokemon-index-card_type'><b>Type:</b> {pokemon.type.join(' / ')}</span>
                        <span className='pokemon-index-card_weakness'><b>Weakness:</b> {pokemon.weaknesses.join(' / ')}</span>
                        <span className='pokemon-index-card_num'>#{pokemon.num}</span>
                    </div>
                )
            })
        
        // load details page for specific pokemon
        const renderPokemonDetails = (pokemon) => {
            this.setState((state) => {
                return { 
                    showPokemonDetails: true,
                    currentPokemon: pokemon
                }
            })
        };

        // close details page
        const closePokemonDetails = () => {
            this.setState((state) => {
                return { 
                    showPokemonDetails: false
                }
            })
        };

        // render JSX
        if(this.state.showPokemonDetails) {
            return (
                <div className='details-page-container'>
                    <DetailsPage 
                    currentPokemon={ this.state.currentPokemon } 
                    closePokemonDetails={() => closePokemonDetails()} 
                    renderPokemonDetails={() => renderPokemonDetails()} 
                    pokemonFiltered={this.state.pokemon}
                    />
                </div>
            )
        } else {
            return (
                <div className='pokemon-index-container'>
                    { pokemonMapped }
                </div>
            )
        }

    }
}

export default PokemonList;