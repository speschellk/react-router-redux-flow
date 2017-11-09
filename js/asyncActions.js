// @flow

import axios from 'axios';
import { addAPIData } from './actionCreators';

export function getAPIDetails(imdb: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdb}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => console.log('axios error', error));
  };
}
