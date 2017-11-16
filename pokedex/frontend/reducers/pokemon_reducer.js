import {merge} from 'lodash';
import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';


export const pokemonReducer = (state ={}, action)=>{
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let newState = {};
      Object.keys(action.pokemon).forEach((id) =>(
        newState[id] = action.pokemon[id]
      ));
      return merge({}, state, newState);
    default:
      return state;
  }
};
