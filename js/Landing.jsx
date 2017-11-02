// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>videos</h1>
    <input type="text" placeholder="Search" />
    <Link to="/Search">or Browse All</Link>
  </div>
);

export default Landing;
