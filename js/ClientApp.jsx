// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

// module var is specific to webpack
if (module.hot) {
  // any time App changes, rerender the whole app (in dev)
  module.hot.accept('./App', () => {
    renderApp();
  });
}
