import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  ui: state.ui,
  pokemon: state.entities.pokemon,
  items: state.entities.items

});

const mapDispatchToProps = (dispatch) => ({
  requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
