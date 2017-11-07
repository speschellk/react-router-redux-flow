// @flow

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(action: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdb: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdb}`)
      .then(response => {
        console.log('then response', response)
        dispatch(addAPIData(response.data));
      })
      .catch(error => console.log('axios error', error));
  };
}
