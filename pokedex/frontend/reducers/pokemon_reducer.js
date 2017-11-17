import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


export const pokemonReducer = (state = {}, action)=>{
  let newState = {};
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      Object.keys(action.pokemon).forEach((id) =>(
        newState[id] = action.pokemon[id]
      ));
      return merge({}, state, newState);
    case RECEIVE_ONE_POKEMON:
        newState[action.payload.pokemon.id] = action.payload.pokemon;
        console.log(newState);
        return merge({}, state, newState);
    default:
      return state;
  }
};
