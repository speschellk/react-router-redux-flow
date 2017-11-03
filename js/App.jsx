// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    {/* BrowserRouter is a higher-order component:
    introduces behavior but doesn't render any markup */}
    <div className="app">
      <Switch>
        {/* If this exact path is matched, render this component */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={(props) => <Search shows={preload.shows} {...props}/>} />
        {/* If no match, render this component */}
        <Route
          path="/details/:id"
          component={(props: {match: Match}) => (
            <Details
              show={preload.shows.find(show => props.match.params.id === show.imdbID)}
              {...props}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
