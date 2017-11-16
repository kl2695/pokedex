import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    return this.props.requestAllPokemon();
  }

  render(){
    let { pokemon } = this.props;
    console.log(pokemon);
    pokemon = pokemon.map(poke=> (<li>{poke.name}</li>));
    return(
      <ul>
        {pokemon}
      </ul>
    );
  }


}

export default PokemonIndex;
