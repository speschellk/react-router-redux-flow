// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
  // now BrowserRouter only rendered on client, so Node can render differently
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

renderApp();

// 'module' var is injected from webpack
if (module.hot) {
  // any time App changes, rerender the whole app
  module.hot.accept('./App', () => {
    renderApp();
  });
}
