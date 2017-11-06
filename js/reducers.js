// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// searchTerm very siloed to this reducer and
// others don't need to worry about it
const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
