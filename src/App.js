//Dependencies
import React from 'react';

//CSS
import './App.css';

//Components
import PokemonList from './components/PokemonList/PokemonList';
import TypeDropdown from './components/TypeDropdown/TypeDropdown';
import WeaknessDropdown from './components/WeaknessDropdown/WeaknessDropdown';

class App extends React.Component {

  state = {
    searchInput: '',
    types: [''],
    weakness: ['']
  }

  searchPokemon = (input) => {
    this.setState(() => {
      return { searchInput: input }
    })
  }

  selectTypes = (types) => {
    this.setState((state) => {
      return { types: [...types]}
    })
  }

  selectWeaknesses = (weaknesses) => {
    this.setState((state) => {
      return { weaknesses: [...weaknesses]}
    })
  }

  render() {
    return (
      <div>
        <h1>Pokeedex</h1>
        <input className='search-bar' onChange={(e) => this.searchPokemon(e.target.value)} value={this.state.searchInput} placeholder='Search...' id='filter_searchbox'/>
        <TypeDropdown selectTypes={this.selectTypes} />
        <WeaknessDropdown selectWeaknesses={this.selectWeaknesses} />
        <PokemonList 
        searchInputValue={this.state.searchInput} 
        value={this.stateInput} 
        types={this.state.types}
        weaknesses={this.state.weaknesses}
        />
      </div>
    );
  }

}

export default App;
