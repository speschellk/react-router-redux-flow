// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
  }
  return state;
};

// searchTerm very siloed to this reducer and
// others don't need to worry about it
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
