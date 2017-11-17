import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    return this.props.requestAllPokemon();
  }

  render(){
    let { pokemon } = this.props;
    let pokemonItems = pokemon.map(poke=> (<PokemonIndexItem key={poke.id} pokemon={poke}/>
    ));

    return(

      <section className="pokedex">
        <ul className="pokedex-list">
          {pokemonItems}
        </ul>
        <Route path={`/pokemon/:pokemonId`} component={PokemonDetailContainer} />
      </section>






    );
  }


}

export default PokemonIndex;
