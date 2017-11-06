// @flow

import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';
import { Link } from 'react-router-dom';

const Header = (props: {
  showSearch: boolean,
  handleSearchTermChange: Function,
  searchTerm: string
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/Search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

// dispatch: function provided by Redux to pass actions into reducers
// translates events in the UI to actions in the Redux store
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
