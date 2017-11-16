import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    return this.props.requestAllPokemon();
  }

  render(){

    const pokemon = Object.keys(this.props.pokemon).map((id)=>(
      <li>{this.props.pokemon[id].name}</li>
    ));

    return(
      <ul>
        {pokemon}
      </ul>
    );
  }


}

export default PokemonIndex;
