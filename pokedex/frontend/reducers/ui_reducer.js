import { merge } from 'lodash';
import { RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

export const uiReducer = (state = {}, action) => {
  let newState = merge({},state);

  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      newState.pokeDisplay = action.payload.pokemon.id;
      return newState;
    default:
      return state;
  }
};
