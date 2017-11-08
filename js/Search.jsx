// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: { searchTerm: string, shows: Array<Show> }) => (
  <div className="search">
    <Header
      searchTerm={props.searchTerm}
      showSearch
    />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

// return object whose properties will be spread over Search
// passes props into search
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

// only for testing purposes
export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
