// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    {/* BrowserRouter is a higher-order component:
    introduces behavior but doesn't render any markup */}
    <div className="app">
      <Switch>
        {/* If this exact path is matched, render this component */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        {/* If no match, render this component */}
        <Route path="/details/:id" component={Details} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
