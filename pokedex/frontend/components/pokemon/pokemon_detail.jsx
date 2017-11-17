import React from 'react';


class PokemonDetail extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    const singlePokemon = this.props.pokemon[this.props.match.params.pokemonId];

    if(!singlePokemon.item_ids){
      return ( <div className="pokemon-detail">
        <img src={singlePokemon.image_url}></img>
      </div>);
    }



    const items = singlePokemon.item_ids.map(id => (
      <img src={this.props.items[id].image_url}></img>
    ));


    return(
      <div className="pokemon-detail">
        <img src={singlePokemon.image_url}></img>

        {items}
      </div>
    );
  }
}

export default PokemonDetail;
