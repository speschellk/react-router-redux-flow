// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

// 'module' var is injected from webpack
if (module.hot) {
  // any time App changes, rerender the whole app
  module.hot.accept('./App', () => {
    renderApp();
  });
}
