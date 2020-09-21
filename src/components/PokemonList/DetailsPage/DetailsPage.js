import React from 'react';
import './DetailsPage.css'

class DetailsPage extends React.Component {

    state = {
        currentPokemon: this.props.currentPokemon,
        pokemon: this.props.pokemonFiltered
    }

    render() {
        let name, num, img, type, weaknesses, height, weight, prev_evolution, next_evolution;
        ({ name, num, img, type, weaknesses, height, weight, prev_evolution, next_evolution } = this.state.currentPokemon);

        const updatePokemon = (pokemon) => {
            this.setState(() => {
                return { currentPokemon: pokemon }
            })
        }

        return (
            <div className='details-page'>
                <div className={'details-page-card ' + type[0].toLowerCase()}>
                    <button className='back-button' onClick={this.props.closePokemonDetails}>CLOSE</button>
                    <img alt={name + ' image'} className='pokemon-index-card_img' src={img}/>
                    <span className='pokemon-index-card_name'>{name} </span>
                    <span className='pokemon-index-card_type'><b>Type:</b> {type.join(' / ')}</span>
                    <span className='pokemon-index-card_weakness'><b>Weakness:</b> {weaknesses.join(' / ')}</span>
                    <span className='pokemon-index-card_num'><b>#{num}</b></span>
                    <span className='pokemon-index-height'><b>Height: </b>{height}</span>
                    <span className='pokemon-index-weight'><b>Weight: </b>{weight}</span>
                    {prev_evolution &&
                        <span className='pokemon-index-prev_evolution' onClick={() => updatePokemon(this.state.pokemon[(prev_evolution[0].num * 1) - 1])}>
                            <b>Prev Evo:</b> <span className='link'>#{prev_evolution[prev_evolution.length - 1].num} - {prev_evolution[prev_evolution.length - 1].name}</span>
                        </span>
                    }
                    {next_evolution &&
                        <span className='pokemon-index-next_evolution' onClick={() => updatePokemon(this.state.pokemon[(next_evolution[0].num * 1) - 1])}>
                            <b>Next Evo:</b> <span className='link'>#{next_evolution[0].num} - {next_evolution[0].name}</span>
                        </span>
                    }
                </div>
            </div>
        )
    }

}

export default DetailsPage;