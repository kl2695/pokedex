import { merge } from 'lodash';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type){
    case RECEIVE_ONE_POKEMON:
      const items = action.payload.items.reduce((a, item) => {
        a[item.id] = item;
        return a;
      }, {});
      return merge({}, state, items);
    default:
      return state;
  }
};
