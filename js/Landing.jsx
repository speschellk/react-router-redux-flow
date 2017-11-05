// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // injects objects as props into specified components
import { setSearchTerm} from './actionCreators'

const Landing = (props: { searchTerm: string, handleSearchTermChange: Function }) => (
  <div className="landing">
    <h1>videos</h1>
    <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    <Link to="/Search">or Browse All</Link>
  </div>
);

// takes whole state of Redux and returns just the state that this component cares about
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch: Function => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
