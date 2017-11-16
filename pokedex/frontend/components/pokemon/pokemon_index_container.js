import {connect} from 'react-redux';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: ()=> dispatch(requestAllPokemon()),
  selectAllPokemon: ()=> dispatch(selectAllPokemon())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
