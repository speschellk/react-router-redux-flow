// @flow

import { createStore, compose applyMiddleware } from 'redux';
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
