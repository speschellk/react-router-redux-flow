// @flow

import { createStore, compose, applyMiddleware } from 'redux';
// looks at every action produced, and calls it if it's a function
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  // augment Redux capabilities by giving it middleware
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      // identity function
      : f => f
  )
);

export default store;
